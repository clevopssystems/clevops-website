import "server-only";
import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "co_admin_session";
const MAX_AGE = 8 * 60 * 60; // 8 hours in seconds

function getSecret(): Buffer {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET env var is not set");
  return Buffer.from(s, "utf8");
}

// Token format: {username}:{unixExpiry}:{hmac-sha256-hex}
export function signSession(username: string): string {
  const expiry = Math.floor(Date.now() / 1000) + MAX_AGE;
  const payload = `${username}:${expiry}`;
  const sig = createHmac("sha256", getSecret()).update(payload).digest("hex");
  return `${payload}:${sig}`;
}

export function verifySession(token: string): string | null {
  const lastColon = token.lastIndexOf(":");
  if (lastColon === -1) return null;

  const sig = token.slice(lastColon + 1);
  const rest = token.slice(0, lastColon); // username:expiry

  const secondLastColon = rest.lastIndexOf(":");
  if (secondLastColon === -1) return null;

  const username = rest.slice(0, secondLastColon);
  const expiryStr = rest.slice(secondLastColon + 1);
  const expiry = parseInt(expiryStr, 10);
  if (isNaN(expiry) || Math.floor(Date.now() / 1000) > expiry) return null;

  const expected = createHmac("sha256", getSecret()).update(rest).digest("hex");

  // Reject if lengths differ before timingSafeEqual (avoids buffer size mismatch)
  if (sig.length !== expected.length) return null;
  try {
    if (!timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"))) {
      return null;
    }
  } catch {
    return null;
  }

  return username;
}

export async function getSessionUser(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!token) return null;
  return verifySession(token);
}

export const SESSION_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/admin",
  maxAge: MAX_AGE,
};
