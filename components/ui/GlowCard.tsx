"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverGlow?: boolean;
  bordered?: boolean;
  accentBorder?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(79,127,255,0.15)",
  hoverGlow = true,
  bordered = true,
  accentBorder = false,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl bg-co-card overflow-hidden",
        "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        bordered &&
          !accentBorder &&
          "border border-[rgba(255,255,255,0.07)]",
        accentBorder && "border-gradient",
        hoverGlow && "group",
        className
      )}
      whileHover={
        hoverGlow
          ? {
              y: -4,
              boxShadow: `0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px ${glowColor}`,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      initial={
        hoverGlow
          ? {
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
            }
          : undefined
      }
    >
      {/* Glow overlay on hover */}
      {hoverGlow && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${glowColor} 0%, transparent 60%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
