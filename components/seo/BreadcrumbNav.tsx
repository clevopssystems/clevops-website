import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  className?: string
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center flex-wrap gap-1 text-sm", className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-co-text-muted shrink-0" aria-hidden="true" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-co-text-muted hover:text-co-accent transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast ? "text-co-text-secondary" : "text-co-text-muted")}>
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
