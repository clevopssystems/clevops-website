import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "co_admin_session";

// Edge-compatible HMAC verification using Web Crypto API
async function verifySessionEdge(token: string, secret: string): Promise<boolean> {
  // Token format: {username}:{unixExpiry}:{hmac-sha256-hex}
  const lastColon = token.lastIndexOf(":");
  if (lastColon === -1) return false;

  const sig = token.slice(lastColon + 1);
  const rest = token.slice(0, lastColon); // username:expiry

  const secondLastColon = rest.lastIndexOf(":");
  if (secondLastColon === -1) return false;

  const expiryStr = rest.slice(secondLastColon + 1);
  const expiry = parseInt(expiryStr, 10);
  if (isNaN(expiry) || Math.floor(Date.now() / 1000) > expiry) return false;

  // sig must be exactly 64 hex chars (SHA-256 = 32 bytes)
  if (sig.length !== 64) return false;

  let sigBytes: Uint8Array;
  try {
    const pairs = sig.match(/.{2}/g);
    if (!pairs || pairs.length !== 32) return false;
    sigBytes = new Uint8Array(pairs.map((b) => parseInt(b, 16)));
  } catch {
    return false;
  }

  try {
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    // Cast to ArrayBuffer — runtime always produces ArrayBuffer, TS types are overly broad
    const sigAb = sigBytes.buffer.slice(
      sigBytes.byteOffset,
      sigBytes.byteOffset + sigBytes.byteLength
    ) as ArrayBuffer;
    return crypto.subtle.verify("HMAC", key, sigAb, new TextEncoder().encode(rest));
  } catch {
    return false;
  }
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();

  // Tag every /admin request so root layout can hide site Nav/Footer
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-is-admin", "1");

  // Login page itself is always accessible (no redirect loop)
  if (pathname === "/admin/login") {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const secret = process.env.ADMIN_SESSION_SECRET;
  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (!secret || !token || !(await verifySessionEdge(token, secret))) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/admin/:path*"],
};
