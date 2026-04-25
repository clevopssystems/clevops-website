"use client";

import { useState } from "react";

const STATUSES = [
  "NEW",
  "CONTACTED",
  "CALL_BOOKED",
  "PROPOSAL_SENT",
  "WON",
  "LOST",
] as const;

type LeadStatus = (typeof STATUSES)[number];

interface StatusChangerProps {
  leadId: string;
  currentStatus: LeadStatus;
}

export function StatusChanger({ leadId, currentStatus }: StatusChangerProps) {
  const [status, setStatus] = useState<LeadStatus>(currentStatus);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleUpdate() {
    if (status === currentStatus) return;
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch(`/admin/api/leads/${leadId}/status`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      const json = (await res.json()) as { error?: string };

      if (res.ok) {
        setMessage({ type: "success", text: "Status updated." });
        // Reload page so activity log reflects the change
        window.location.reload();
      } else {
        setMessage({ type: "error", text: json.error ?? "Update failed." });
        setSaving(false);
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Try again." });
      setSaving(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as LeadStatus)}
          disabled={saving}
          className="bg-[#0e0e12] border border-[#1e1e22] rounded-lg px-3 py-2 text-sm text-[#f0f0f2] focus:outline-none focus:border-[#4f7fff] transition-colors disabled:opacity-60"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s.replace(/_/g, " ")}
            </option>
          ))}
        </select>

        <button
          onClick={handleUpdate}
          disabled={saving || status === currentStatus}
          className="px-4 py-2 bg-[#4f7fff] hover:bg-[#3d6eef] text-white text-sm rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? "Saving…" : "Update"}
        </button>
      </div>

      {message && (
        <p
          className={`text-xs ${
            message.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
