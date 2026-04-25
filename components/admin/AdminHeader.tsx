import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

interface AdminHeaderProps {
  title?: string;
}

export function AdminHeader({ title }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#070709]/95 backdrop-blur border-b border-[#1e1e22]">
      <div className="flex items-center justify-between px-6 h-14">
        <div className="flex items-center gap-6">
          <Link
            href="/admin/leads"
            className="text-sm font-semibold tracking-wide text-[#f0f0f2] hover:text-[#4f7fff] transition-colors"
          >
            ClevOps <span className="text-[#4f7fff]">CRM</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/admin/leads"
              className="text-sm text-[#888898] hover:text-[#f0f0f2] transition-colors"
            >
              Leads
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {title && (
            <span className="text-xs text-[#444450] hidden sm:block">{title}</span>
          )}
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
