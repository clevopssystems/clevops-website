import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface InternalLink {
  label: string
  href: string
  description?: string
}

interface InternalLinksProps {
  title?: string
  links: InternalLink[]
  className?: string
}

export function InternalLinks({
  title = "Explore More",
  links,
  className,
}: InternalLinksProps) {
  if (links.length === 0) return null

  return (
    <div className={cn("w-full", className)}>
      <p className="text-xs font-medium tracking-widest uppercase text-co-text-muted mb-4">
        {title}
      </p>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "group inline-flex items-center gap-2 rounded-lg",
              "border border-co-border bg-co-card",
              "px-4 py-2.5 text-sm text-co-text-secondary",
              "hover:border-co-border-hover hover:text-co-text hover:bg-co-card-hover",
              "transition-all duration-200"
            )}
          >
            <span>{link.label}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
          </Link>
        ))}
      </div>
    </div>
  )
}
