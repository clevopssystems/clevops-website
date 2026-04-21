import { cn } from "@/lib/utils";

interface LogoIconProps {
  size?: number;
  className?: string;
  color?: string;
}

/**
 * ClevOps logo mark — stacked growth layers icon
 * Faithful SVG recreation of the brand logo.
 */
export function LogoIcon({ size = 32, className, color = "white" }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      aria-hidden
    >
      {/* Bottom layer */}
      <path
        d="M50 87 L79 72 L50 57 L21 72 Z"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Middle layer */}
      <path
        d="M50 69 L79 54 L50 39 L21 54 Z"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Top layer */}
      <path
        d="M50 51 L79 36 L50 21 L21 36 Z"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Data node 1 — filled */}
      <circle cx="37" cy="39" r="3.5" fill={color} />
      {/* Data node 2 — outline */}
      <circle cx="52" cy="32" r="3.5" fill="none" stroke={color} strokeWidth="2.6" />
      {/* Trend line */}
      <polyline
        points="37,39 52,32 65,21"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow shaft */}
      <line x1="65" y1="21" x2="74" y2="12" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      {/* Arrow head */}
      <polyline
        points="67,12 74,12 74,19"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  iconOnly?: boolean;
}

const sizeMap = {
  sm: { icon: 26, text: "text-base" },
  md: { icon: 30, text: "text-lg" },
  lg: { icon: 38, text: "text-xl" },
};

export function Logo({ size = "md", className, iconOnly = false }: LogoProps) {
  const { icon, text } = sizeMap[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative shrink-0 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.09] p-1.5 group-hover:border-white/[0.14] transition-colors duration-300">
        <LogoIcon size={icon} />
      </span>
      {!iconOnly && (
        <span
          className={cn(
            "font-bold tracking-tight",
            text
          )}
          style={{
            background: "linear-gradient(135deg, #F0F0F2 60%, #888898 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Clev<span style={{ WebkitTextFillColor: "#4F7FFF", color: "#4F7FFF" }}>Ops</span>
        </span>
      )}
    </span>
  );
}
