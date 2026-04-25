interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

/**
 * Verifies a Cloudflare Turnstile token server-side.
 * Returns true if no secret key is configured (captcha disabled / dev mode).
 * Returns false if the token is missing or verification fails.
 */
export async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) return true; // Captcha not configured — allow through

  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: secretKey, response: token }),
      }
    );
    const data: TurnstileVerifyResponse = await res.json();
    return data.success === true;
  } catch (err) {
    console.error(
      "[Turnstile] Verification error:",
      err instanceof Error ? err.message : "Unknown"
    );
    return false;
  }
}
