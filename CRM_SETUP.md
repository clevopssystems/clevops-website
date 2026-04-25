# ClevOps CRM — Setup Guide

Lead storage uses **Prisma 5** + **Neon PostgreSQL**.
The admin dashboard is protected by HMAC-signed session cookies.

---

## Required Environment Variables

| Variable | Required | Notes |
|---|---|---|
| `DATABASE_URL` | **Yes** | Neon connection string. Server-only — never expose to the client. |
| `ADMIN_USERNAME` | **Yes** | Dashboard login username. Server-only. |
| `ADMIN_PASSWORD` | **Yes** | Dashboard login password. Server-only. |
| `ADMIN_SESSION_SECRET` | **Yes** | Random secret (32+ chars) used to sign session tokens. |

### Getting your Neon connection string

1. Go to [console.neon.tech](https://console.neon.tech) and create a project
2. Open **Connection Details** → choose the **Prisma** tab
3. Copy the connection string:
   ```
   postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
4. Add to your environment:
   - **Local dev**: `.env.local` — `DATABASE_URL=postgresql://...`
   - **Vercel**: Dashboard → Project → Settings → Environment Variables

### Generating a session secret

```bash
# Generate a secure random secret (run once, save the output)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Example `.env.local`

```
DATABASE_URL=postgresql://user:pass@ep-xxx.neon.tech/neondb?sslmode=require
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-strong-password-here
ADMIN_SESSION_SECRET=a1b2c3d4e5f6...64-hex-chars...
```

---

## First-time setup

```bash
# 1. Set all env vars in .env.local, then push the schema to Neon
npm run db:push

# 2. Verify tables were created (optional)
npm run db:studio
```

`db:push` creates all tables and generates the Prisma client.
You do **not** need migrations — `db:push` is the right command for a direct schema sync.

---

## Ongoing workflow

| Command | What it does |
|---|---|
| `npm run db:generate` | Regenerate the Prisma client after schema changes (no DB needed) |
| `npm run db:push` | Push schema changes to Neon (requires `DATABASE_URL`) |
| `npm run db:studio` | Open Prisma Studio browser UI to browse leads |

---

## Admin Dashboard

### Logging in

1. Navigate to `/admin/login`
2. Enter the `ADMIN_USERNAME` and `ADMIN_PASSWORD` from your env vars
3. Session lasts **8 hours** (HTTP-only, signed cookie — secure in production)

### What you can do

| Route | Description |
|---|---|
| `/admin/leads` | Table of all leads with status + search filters |
| `/admin/leads/[id]` | Full lead detail, message, activity log, status change |

### Status flow

`NEW` → `CONTACTED` → `CALL_BOOKED` → `PROPOSAL_SENT` → `WON` / `LOST`

Every status change is logged in the activity timeline automatically.

---

## Verifying lead storage

After running `db:push` and deploying, submit the contact form, then:

```bash
# Browse the Lead table in your browser
npm run db:studio
```

Or query directly in the Neon console:

```sql
SELECT id, name, email, "businessName", "serviceInterest", status, "createdAt"
FROM "Lead"
ORDER BY "createdAt" DESC
LIMIT 20;
```

---

## Data model

**Lead** — one row per form submission

| Field | Type | Notes |
|---|---|---|
| `id` | String (cuid) | Primary key |
| `name` | String | Sanitized |
| `email` | String | Lowercased, validated |
| `phone` | String? | Optional |
| `businessName` | String? | From "business" form field |
| `serviceInterest` | String? | From "service" form field |
| `message` | String | Sanitized |
| `source` | String | Default `"website"` |
| `status` | LeadStatus | Default `NEW` |
| `ipHash` | String? | First 16 chars of SHA-256(ip) — privacy-safe |
| `userAgent` | String? | Truncated to 500 chars |
| `createdAt` | DateTime | Auto |
| `updatedAt` | DateTime | Auto |

**LeadStatus enum:** `NEW` → `CONTACTED` → `CALL_BOOKED` → `PROPOSAL_SENT` → `WON` / `LOST`

**LeadActivity** — audit trail per lead

| Field | Notes |
|---|---|
| `action` | `"LEAD_CREATED"` or `"STATUS_CHANGED"` |
| `metadata` | JSON — source/service/website at creation; previousStatus/newStatus on changes |

---

## Security notes

- Session tokens are HMAC-SHA256 signed with `ADMIN_SESSION_SECRET` and expire after 8 hours
- Session verification runs in Edge middleware — protected before any page renders
- Login endpoint uses timing-safe credential comparison with a 400 ms delay on failure
- No credentials are ever sent to the browser or logged
- The admin dashboard is excluded from site robots (`noindex, nofollow`)
- The public marketing site is unaffected — Nav/Footer are hidden for all `/admin/*` routes

---

## What NOT to commit

- `.env`, `.env.local`, `.env.production`, or any file containing credentials
- These are already excluded by `.gitignore`
- Never hardcode `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, or `ADMIN_SESSION_SECRET` in source files

---

## Build behaviour

The `build` script runs `prisma generate` automatically:

```
"build": "prisma generate && next build"
```

Vercel regenerates the Prisma client on every deploy.
`prisma generate` does **not** require `DATABASE_URL` — it only reads `prisma/schema.prisma`.
`DATABASE_URL` is only needed at runtime and for `db:push`.
