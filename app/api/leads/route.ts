import { NextResponse } from "next/server";
import { autoReplyEmail, notificationEmail, sendEmail } from "./emails";
import { parseLead } from "../../components/enquiry-validation";
import { clientKey, rateLimit } from "./rate-limit";

/**
 * POST /api/leads: the /start-a-project enquiry.
 *
 *   200 { ok: true }                         lead notified (or honeypot, silently)
 *   400 { ok: false, error: "invalid", fields } one message per bad field
 *   403 / 413 / 415                          wrong origin, oversized, not JSON
 *   429 { ok: false, error: "rate_limited" } with Retry-After
 *   500 { ok: false, error: "server" }       the ClevOps notification did not send
 *
 * The notification to ClevOps is the critical email: if it fails the request
 * fails, so the visitor knows to try again and nothing is silently lost. The
 * auto-reply is a courtesy: if it fails after the notification succeeded, the
 * failure is logged and the submission still succeeds, because the lead has
 * already reached the inbox. Other methods get Next's automatic 405.
 */

export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;

type ErrorCode = "invalid" | "forbidden" | "too_large" | "unsupported" | "rate_limited" | "server";

function fail(status: number, error: ErrorCode, extra: Record<string, unknown> = {}, headers?: HeadersInit) {
  return NextResponse.json({ ok: false, error, ...extra }, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

/** Browsers always send Origin on a cross-site POST; refuse any that isn't us. */
function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/** Reads the body up to the cap without trusting Content-Length. */
async function readBody(request: Request): Promise<string | null> {
  const declared = Number(request.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) return null;
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(chunks));
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return fail(403, "forbidden");

  const type = request.headers.get("content-type") ?? "";
  if (!type.toLowerCase().startsWith("application/json")) return fail(415, "unsupported");

  let raw: string | null;
  try {
    raw = await readBody(request);
  } catch {
    // The client dropped the connection mid-upload.
    return fail(400, "invalid", { fields: {} });
  }
  if (raw === null) return fail(413, "too_large");

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, "invalid", { fields: {} });
  }

  const parsed = parseLead(body);
  if (parsed.kind === "invalid") return fail(400, "invalid", { fields: parsed.fields });

  // Only well-formed submissions count toward the limit, so a visitor
  // correcting a typo is never locked out by their own validation errors.
  const limit = rateLimit(clientKey(request.headers));
  if (!limit.allowed) {
    return fail(429, "rate_limited", {}, { "Retry-After": String(limit.retryAfterSeconds) });
  }

  // Honeypot: answer exactly as a success would, send nothing.
  if (parsed.kind === "spam") {
    console.info("[leads] honeypot submission discarded");
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const notifyTo = process.env.LEADS_NOTIFY_EMAIL?.trim();
  const notifyFrom = process.env.LEADS_FROM_EMAIL?.trim();
  if (!notifyTo || !notifyFrom) {
    console.error("[leads] LEADS_NOTIFY_EMAIL or LEADS_FROM_EMAIL is not set; enquiry not delivered");
    return fail(500, "server");
  }

  const { lead } = parsed;
  const notified = await sendEmail(notificationEmail(lead, notifyFrom, notifyTo, new Date()));
  if (!notified.ok) {
    console.error(`[leads] notification failed: ${notified.reason}`);
    return fail(500, "server");
  }

  const replyFrom = process.env.AUTO_REPLY_FROM_EMAIL?.trim();
  if (!replyFrom) {
    console.warn("[leads] AUTO_REPLY_FROM_EMAIL is not set; auto-reply skipped");
  } else {
    const replied = await sendEmail(autoReplyEmail(lead, replyFrom));
    if (!replied.ok) console.warn(`[leads] auto-reply failed (lead was delivered): ${replied.reason}`);
  }

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
