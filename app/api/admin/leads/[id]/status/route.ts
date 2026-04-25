import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import { db } from "@/lib/db";
import { ADMIN_COOKIE, verifySession } from "@/lib/admin-auth";
import { LeadStatus } from "@prisma/client";

const VALID_STATUSES = Object.values(LeadStatus);

const schema = z.object({
  status: z.enum(VALID_STATUSES as [LeadStatus, ...LeadStatus[]]),
});

async function verifyAdminSession(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  const cookieExists = Boolean(token);

  if (!token) {
    console.info("[Admin API] Session cookie check", {
      cookieName: ADMIN_COOKIE,
      cookieExists,
      verified: false,
    });
    return null;
  }

  const user = verifySession(token);
  console.info("[Admin API] Session cookie check", {
    cookieName: ADMIN_COOKIE,
    cookieExists,
    verified: Boolean(user),
  });

  return user;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyAdminSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid status value" }, { status: 400 });
  }

  const { status: newStatus } = result.data;

  try {
    const lead = await db.lead.findUnique({
      where: { id },
      select: { id: true, status: true },
    });

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    const previousStatus = lead.status;

    await db.lead.update({ where: { id }, data: { status: newStatus } });

    await db.leadActivity.create({
      data: {
        leadId: id,
        action: "STATUS_CHANGED",
        metadata: { previousStatus, newStatus },
      },
    });

    return NextResponse.json({ success: true, status: newStatus });
  } catch (err) {
    console.error(
      "[Admin] Status update error:",
      err instanceof Error ? err.message : "Unknown"
    );
    return NextResponse.json(
      { error: "Failed to update status. Please try again." },
      { status: 500 }
    );
  }
}
