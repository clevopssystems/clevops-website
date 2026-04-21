import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: string;
  className?: string;
  dot?: boolean;
}

export function SectionLabel({ children, className, dot = true }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        "rounded-full px-3.5 py-1.5",
        "border border-co-border",
        "bg-white/[0.03]",
        "text-xs font-medium tracking-widest uppercase",
        "text-co-text-secondary",
        className
      )}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-co-accent shrink-0 animate-pulse-slow" />
      )}
      {children}
    </div>
  );
}
