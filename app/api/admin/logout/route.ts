import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/admin-auth";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 0,
  });
  return res;
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
