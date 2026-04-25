import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { LeadStatus } from "@prisma/client";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusChanger } from "@/components/admin/StatusChanger";

const STATUS_STYLES: Record<LeadStatus, string> = {
  NEW: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  CONTACTED: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  CALL_BOOKED: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  PROPOSAL_SENT: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  WON: "bg-green-500/15 text-green-300 border-green-500/30",
  LOST: "bg-red-500/15 text-red-300 border-red-500/30",
};

function formatDateTime(date: Date): string {
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const lead = await db.lead.findUnique({ where: { id }, select: { name: true } });
  return {
    title: lead ? `${lead.name} — Lead` : "Lead Not Found",
    robots: { index: false, follow: false },
  };
}

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lead = await db.lead.findUnique({
    where: { id },
    include: {
      activities: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!lead) notFound();

  return (
    <div className="min-h-screen bg-[#070709]">
      <AdminHeader />

      <div className="px-6 py-6 max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/admin/leads"
          className="inline-flex items-center gap-1.5 text-sm text-[#888898] hover:text-[#f0f0f2] transition-colors mb-6"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Leads
        </Link>

        {/* Lead header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-[#f0f0f2]">{lead.name}</h1>
            <p className="text-sm text-[#888898] mt-1">{lead.email}</p>
          </div>
          <span
            className={`self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${STATUS_STYLES[lead.status]}`}
          >
            {lead.status.replace(/_/g, " ")}
          </span>
        </div>

        {/* Lead info card */}
        <div className="bg-[#0e0e12] border border-[#1e1e22] rounded-xl p-6 mb-6">
          <h2 className="text-xs font-semibold tracking-wider text-[#888898] uppercase mb-4">
            Contact Information
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoRow label="Email" value={lead.email} />
            <InfoRow label="Phone" value={lead.phone ?? "—"} />
            <InfoRow label="Business" value={lead.businessName ?? "—"} />
            <InfoRow label="Service Interest" value={lead.serviceInterest ?? "—"} />
            <InfoRow label="Submitted" value={formatDateTime(lead.createdAt)} />
            <InfoRow label="Source" value={lead.source} />
          </dl>
        </div>

        {/* Message */}
        {lead.message && (
          <div className="bg-[#0e0e12] border border-[#1e1e22] rounded-xl p-6 mb-6">
            <h2 className="text-xs font-semibold tracking-wider text-[#888898] uppercase mb-3">
              Message
            </h2>
            <p className="text-[#f0f0f2] text-sm leading-relaxed whitespace-pre-wrap">
              {lead.message}
            </p>
          </div>
        )}

        {/* Status management */}
        <div className="bg-[#0e0e12] border border-[#1e1e22] rounded-xl p-6 mb-6">
          <h2 className="text-xs font-semibold tracking-wider text-[#888898] uppercase mb-4">
            Update Status
          </h2>
          <StatusChanger leadId={lead.id} currentStatus={lead.status} />
        </div>

        {/* Activity log */}
        <div className="bg-[#0e0e12] border border-[#1e1e22] rounded-xl p-6">
          <h2 className="text-xs font-semibold tracking-wider text-[#888898] uppercase mb-4">
            Activity ({lead.activities.length})
          </h2>

          {lead.activities.length === 0 ? (
            <p className="text-sm text-[#444450]">No activity recorded yet.</p>
          ) : (
            <ol className="relative border-l border-[#1e1e22] ml-2 space-y-4">
              {lead.activities.map((activity) => (
                <li key={activity.id} className="ml-4">
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-[#1e1e22] bg-[#070709]" />
                  <p className="text-sm font-medium text-[#f0f0f2]">
                    {activity.action === "STATUS_CHANGED" && isStatusChangedMetadata(activity.metadata)
                      ? `Status: ${activity.metadata.previousStatus.replace(/_/g, " ")} → ${activity.metadata.newStatus.replace(/_/g, " ")}`
                      : activity.action.replace(/_/g, " ")}
                  </p>
                  {activity.action === "LEAD_CREATED" && isLeadCreatedMetadata(activity.metadata) && (
                    <p className="text-xs text-[#888898] mt-0.5">
                      {activity.metadata.service ? `Service: ${activity.metadata.service}` : ""}
                      {activity.metadata.website ? ` · ${activity.metadata.website}` : ""}
                    </p>
                  )}
                  <time className="text-xs text-[#444450] mt-0.5 block">
                    {formatDateTime(activity.createdAt)}
                  </time>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-[#888898] mb-1">{label}</dt>
      <dd className="text-sm text-[#f0f0f2]">{value}</dd>
    </div>
  );
}

// Type guards for activity metadata
function isStatusChangedMetadata(
  m: unknown
): m is { previousStatus: string; newStatus: string } {
  return (
    typeof m === "object" &&
    m !== null &&
    "previousStatus" in m &&
    "newStatus" in m
  );
}

function isLeadCreatedMetadata(
  m: unknown
): m is { service?: string; website?: string; source?: string } {
  return typeof m === "object" && m !== null;
}
