import { type Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import { LeadStatus } from "@prisma/client";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { LeadsFilterBar } from "@/components/admin/LeadsFilterBar";

export const metadata: Metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

const VALID_STATUSES = new Set(Object.values(LeadStatus));

const STATUS_STYLES: Record<LeadStatus, string> = {
  NEW: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  CONTACTED: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  CALL_BOOKED: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  PROPOSAL_SENT: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  WON: "bg-green-500/15 text-green-300 border-green-500/30",
  LOST: "bg-red-500/15 text-red-300 border-red-500/30",
};

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface PageProps {
  searchParams: Promise<{ status?: string; q?: string }>;
}

export default async function LeadsPage({ searchParams }: PageProps) {
  const { status, q } = await searchParams;

  const statusFilter =
    status && VALID_STATUSES.has(status as LeadStatus)
      ? (status as LeadStatus)
      : undefined;

  const leads = await db.lead.findMany({
    where: {
      ...(statusFilter ? { status: statusFilter } : {}),
      ...(q?.trim()
        ? {
            OR: [
              { name: { contains: q.trim(), mode: "insensitive" } },
              { email: { contains: q.trim(), mode: "insensitive" } },
              { businessName: { contains: q.trim(), mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 200,
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      businessName: true,
      serviceInterest: true,
      status: true,
      createdAt: true,
    },
  });

  return (
    <div className="min-h-screen bg-[#070709]">
      <AdminHeader />

      <div className="px-6 py-6 max-w-7xl mx-auto">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-semibold text-[#f0f0f2]">Leads</h1>
            <p className="text-sm text-[#888898] mt-0.5">
              {leads.length} {leads.length === 1 ? "result" : "results"}
              {statusFilter ? ` · ${statusFilter.replace(/_/g, " ")}` : ""}
              {q ? ` · "${q}"` : ""}
            </p>
          </div>

          <LeadsFilterBar initialQ={q} initialStatus={status ?? "ALL"} />
        </div>

        {/* Leads table */}
        {leads.length === 0 ? (
          <div className="text-center py-24 text-[#888898]">
            <p className="text-lg mb-2">No leads found</p>
            <p className="text-sm">Try adjusting your filters or submit the contact form to create a lead.</p>
          </div>
        ) : (
          <div className="border border-[#1e1e22] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#1e1e22] bg-[#0e0e12]">
                    <th className="text-left px-4 py-3 text-[#888898] font-medium">Name</th>
                    <th className="text-left px-4 py-3 text-[#888898] font-medium hidden sm:table-cell">Email</th>
                    <th className="text-left px-4 py-3 text-[#888898] font-medium hidden md:table-cell">Business</th>
                    <th className="text-left px-4 py-3 text-[#888898] font-medium hidden lg:table-cell">Service</th>
                    <th className="text-left px-4 py-3 text-[#888898] font-medium">Status</th>
                    <th className="text-left px-4 py-3 text-[#888898] font-medium hidden xl:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e1e22]">
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-[#0e0e12] transition-colors"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="block group"
                        >
                          <span className="font-medium text-[#f0f0f2] group-hover:text-[#4f7fff] transition-colors">
                            {lead.name}
                          </span>
                          {lead.phone && (
                            <span className="block text-xs text-[#888898] mt-0.5 sm:hidden">
                              {lead.email}
                            </span>
                          )}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-[#888898] hidden sm:table-cell">
                        <Link href={`/admin/leads/${lead.id}`} className="hover:text-[#4f7fff] transition-colors">
                          {lead.email}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-[#888898] hidden md:table-cell">
                        {lead.businessName ?? <span className="text-[#444450]">—</span>}
                      </td>
                      <td className="px-4 py-3 text-[#888898] hidden lg:table-cell">
                        {lead.serviceInterest ?? <span className="text-[#444450]">—</span>}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLES[lead.status]}`}
                        >
                          {lead.status.replace(/_/g, " ")}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#888898] text-xs hidden xl:table-cell">
                        {formatDate(lead.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
