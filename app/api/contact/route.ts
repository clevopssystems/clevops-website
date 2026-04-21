import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  business: string;
  email: string;
  phone?: string;
  website?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    if (!data.name?.trim() || !data.email?.trim() || !data.business?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and business name are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ── Webhook delivery ──────────────────────────────────────────
    // Set CONTACT_WEBHOOK_URL in your environment to receive leads.
    // Works with Zapier, Make (Integromat), n8n, Pipedream, etc.
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: "ClevOps Website Contact Form",
        }),
      });
      if (!res.ok) {
        console.error("Webhook delivery failed:", res.status, await res.text());
      }
    } else {
      // Development fallback — log to console
      console.log("[Contact Form] New submission:", {
        name: data.name,
        email: data.email,
        business: data.business,
        service: data.service,
        phone: data.phone,
        website: data.website,
        message: data.message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact Form] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
