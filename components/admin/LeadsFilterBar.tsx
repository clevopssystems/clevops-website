"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const STATUSES = [
  { value: "ALL", label: "All Statuses" },
  { value: "NEW", label: "New" },
  { value: "CONTACTED", label: "Contacted" },
  { value: "CALL_BOOKED", label: "Call Booked" },
  { value: "PROPOSAL_SENT", label: "Proposal Sent" },
  { value: "WON", label: "Won" },
  { value: "LOST", label: "Lost" },
];

interface LeadsFilterBarProps {
  initialQ?: string;
  initialStatus?: string;
}

export function LeadsFilterBar({ initialQ, initialStatus }: LeadsFilterBarProps) {
  const router = useRouter();
  const [q, setQ] = useState(initialQ ?? "");
  const [status, setStatus] = useState(initialStatus ?? "ALL");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (status && status !== "ALL") params.set("status", status);
    router.push(`/admin/leads?${params.toString()}`);
  }

  function handleClear() {
    setQ("");
    setStatus("ALL");
    router.push("/admin/leads");
  }

  const hasFilters = q.trim() || (status && status !== "ALL");

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3">
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search name, email, business…"
        className="bg-[#0e0e12] border border-[#1e1e22] rounded-lg px-4 py-2 text-sm text-[#f0f0f2] placeholder:text-[#444450] focus:outline-none focus:border-[#4f7fff] transition-colors w-64"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="bg-[#0e0e12] border border-[#1e1e22] rounded-lg px-3 py-2 text-sm text-[#f0f0f2] focus:outline-none focus:border-[#4f7fff] transition-colors"
      >
        {STATUSES.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-[#4f7fff] hover:bg-[#3d6eef] text-white text-sm rounded-lg font-medium transition-colors"
      >
        Filter
      </button>

      {hasFilters && (
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-[#888898] hover:text-[#f0f0f2] transition-colors"
        >
          Clear
        </button>
      )}
    </form>
  );
}
