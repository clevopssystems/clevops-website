# ClevOps Site — Security Checklist

## What Was Added

### 1. Security Headers (`next.config.ts`)
Applied to every route via `headers()`:

| Header | Value | Purpose |
|---|---|---|
| `Content-Security-Policy` | Custom per below | Controls which resources the browser may load |
| `X-Frame-Options` | `DENY` | Prevents clickjacking (iframes of your site) |
| `X-Content-Type-Options` | `nosniff` | Stops browsers guessing MIME types |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits referrer data sent to third parties |
| `Permissions-Policy` | camera, mic, geo, topics all `()` | Disables unused browser features |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Forces HTTPS for 2 years |

**CSP notes:**
- `'unsafe-inline'` is required for `script-src` because Next.js injects inline hydration scripts. A nonce-based approach would remove this requirement but needs Next.js middleware — deferred.
- `'unsafe-inline'` is required for `style-src` because Framer Motion and Tailwind use inline styles.
- `https://challenges.cloudflare.com` is allowed for Turnstile captcha. Remove if you remove captcha.
- Google Fonts do **not** need to be in the CSP because `next/font/google` self-hosts fonts at build time.

**If you add Vercel Analytics or Speed Insights**, add these to the CSP in `next.config.ts`:
```
script-src: https://va.vercel-scripts.com
connect-src: https://va.vercel-scripts.com
```

---

### 2. Contact API Hardening (`app/api/contact/route.ts`)
- **Method guard** — only `POST` is handled; all other methods return `405`
- **Origin validation** — cross-origin browser requests are rejected with `403`
- **Body size limit** — requests over 16 KB are rejected with `413` (checked via header and actual body)
- **Zod schema validation** — all fields are type-checked and length-bounded before touching any data
- **Input sanitisation** — HTML tags and control characters stripped from every string field
- **Generic error messages** — stack traces and internal details are never returned to the client
- **Safe server logging** — only sanitised fields are logged, never raw request bodies

---

### 3. Bot Protection (Contact Form)

Three independent layers, all must pass:

| Layer | How It Works |
|---|---|
| **Honeypot field** | Hidden off-screen input (`name="honeypot"`). Bots fill it; humans don't. Detected bots get a fake `200 OK`. |
| **Timing check** | `formStartTime` is set on component mount. Server rejects submissions under 3 seconds (bots submit instantly). |
| **Cloudflare Turnstile** | Client-side challenge widget. Token verified server-side with Cloudflare's API. Skipped if `TURNSTILE_SECRET_KEY` is not set. |

---

### 4. Rate Limiting (`lib/rate-limit.ts`)
- **5 submissions per IP per hour**
- **Upstash Redis (sliding window)** — activated automatically when `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are set
- **In-memory fallback** — used when Upstash is not configured (safe for dev; stateless per serverless instance in production)
- Returns `429 Too Many Requests` with a clean message (no internal details)

---

### 5. Dependency Security (`package.json`)
New scripts:
- `npm run typecheck` — TypeScript strict-mode check with no emit
- `npm run security:audit` — `npm audit --audit-level=moderate` (fails CI on moderate+ vulnerabilities)

---

## Required Environment Variables

### Vercel Dashboard → Project → Settings → Environment Variables

| Variable | Required | Where to get it | Notes |
|---|---|---|---|
| `DATABASE_URL` | Required | Neon connection string | Required for saving contact form leads before email delivery. |
| `RESEND_API_KEY` | Required | Resend Dashboard -> API Keys | Required for admin notifications and auto-replies. |
| `CONTACT_TO_EMAIL` | Required | Destination inbox | Admin lead notification recipient. Legacy fallback: `LEADS_NOTIFY_EMAIL`. |
| `CONTACT_FROM_EMAIL` | Required | Verified Resend sender on `clevops.co` | Sender for admin notifications and fallback sender for auto-replies. Legacy fallback: `LEADS_FROM_EMAIL`. |
| `AUTO_REPLY_FROM_EMAIL` | Optional | Verified Resend sender on `clevops.co` | Auto-reply sender. Falls back to `CONTACT_FROM_EMAIL` or `LEADS_FROM_EMAIL`. |
| `NEXT_PUBLIC_APP_URL` | Required | Production site URL | Used in auto-reply emails and production diagnostics. |
| `CONTACT_WEBHOOK_URL` | Recommended | Zapier / Make / n8n webhook URL | Leads are POSTed here. Without it, submissions log to console only. |
| `TURNSTILE_SECRET_KEY` | Optional (but recommended for production) | [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) → site → Secret Key | Server-side only. Never expose to client. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional (pair with above) | Cloudflare Turnstile → site → Site Key | Safe to expose — designed to be public. |
| `UPSTASH_REDIS_REST_URL` | Optional (recommended for production) | [Upstash Console](https://console.upstash.com) → Redis database → REST URL | Enables cross-instance rate limiting on Vercel. |
| `UPSTASH_REDIS_REST_TOKEN` | Optional (pair with above) | Upstash Console → Redis database → REST Token | Server-side only. |

**Without Turnstile keys:** captcha is skipped. The honeypot and timing check still run.
**Without Upstash keys:** in-memory rate limiting is used (resets per serverless cold start — fine for low traffic).

---

## How to Test

### Testing security headers
```bash
# curl with verbose headers
curl -I https://clevops.com

# Or use securityheaders.com — paste your URL
```

### Testing Turnstile (locally)
1. Go to [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) and create a site
2. For local dev use the **test keys** Cloudflare provides (always pass/always fail modes)
3. Set in `.env.local`:
   ```
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA   # always passes
   TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA  # always passes
   ```
4. Run `npm run dev` and submit the contact form — widget should appear and token should be included

### Testing rate limiting
```bash
# Send 6 POST requests from the same IP — the 6th should return 429
for i in {1..6}; do
  curl -s -o /dev/null -w "%{http_code}\n" \
    -X POST https://clevops.com/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","business":"Test Co","email":"test@test.com"}'
done
```

### Testing honeypot
```bash
curl -X POST https://clevops.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Bot","business":"Spam Co","email":"bot@spam.com","honeypot":"I am a bot"}'
# Should return 200 {"success":true} — silent fake acceptance
```

### Testing method rejection
```bash
curl -X GET https://clevops.com/api/contact
# Should return 405 Method Not Allowed
```

### Testing body size limit
```bash
# Generate 20 KB of data and send it
python3 -c "import json,sys; print(json.dumps({'name':'A'*20000,'business':'B','email':'t@t.com'}))" | \
  curl -s -X POST https://clevops.com/api/contact \
    -H "Content-Type: application/json" -d @-
# Should return 413 Payload Too Large
```

---

## What NOT to Commit

- `.env`, `.env.local`, `.env.production`, `.env.development`, `.env*.local` — all covered in `.gitignore`
- Any file containing `TURNSTILE_SECRET_KEY`, `UPSTASH_REDIS_REST_TOKEN`, `CONTACT_WEBHOOK_URL`
- API keys, webhook secrets, or credentials of any kind

---

## Known Limitations

- **PostCSS audit warning** — `npm run security:audit` will flag a moderate PostCSS vulnerability inside Next.js's internal bundler. It is not user-facing and cannot be patched without downgrading Next.js (breaking change). Monitor Next.js releases for a fix.
- **In-memory rate limiting** — when Upstash is not configured, rate limits reset on every Vercel cold start. Fine for low-traffic sites; upgrade to Upstash for high-traffic production.
- **`'unsafe-inline'` in CSP** — required by Next.js hydration and Framer Motion. A nonce-based middleware setup would remove this requirement at the cost of added complexity.
- **HSTS preload** — the `preload` directive submits your domain to browser HSTS preload lists. Only set this after you are 100% sure all subdomains support HTTPS.
