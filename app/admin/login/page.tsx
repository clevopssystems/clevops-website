import { type Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-[#070709]">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4f7fff] mb-3">
            ClevOps
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-[#f0f0f2]">
            Admin Dashboard
          </h1>
          <p className="text-sm text-[#888898] mt-2">Sign in to manage leads</p>
        </div>

        <div className="bg-[#0e0e12] border border-[#1e1e22] rounded-2xl p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
