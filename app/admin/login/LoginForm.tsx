"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: fd.get("username"),
          password: fd.get("password"),
        }),
      });

      const json = (await res.json()) as { error?: string };

      if (res.ok) {
        router.push("/admin/leads");
      } else {
        setError(json.error ?? "Invalid credentials");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="username"
          className="block text-sm text-[#888898] mb-2"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          disabled={loading}
          className="w-full bg-[#070709] border border-[#1e1e22] rounded-lg px-4 py-3 text-[#f0f0f2] placeholder:text-[#444450] focus:outline-none focus:border-[#4f7fff] transition-colors disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm text-[#888898] mb-2"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          disabled={loading}
          className="w-full bg-[#070709] border border-[#1e1e22] rounded-lg px-4 py-3 text-[#f0f0f2] placeholder:text-[#444450] focus:outline-none focus:border-[#4f7fff] transition-colors disabled:opacity-60"
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#4f7fff] hover:bg-[#3d6eef] active:bg-[#3060e0] text-white rounded-lg py-3 font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
