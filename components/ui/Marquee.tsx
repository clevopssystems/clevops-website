"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
}

const speedDurations: Record<string, string> = {
  slow: "40s",
  normal: "28s",
  fast: "18s",
};

export function Marquee({
  children,
  speed = "normal",
  reverse = false,
  pauseOnHover = true,
  className,
  gap = 16,
}: MarqueeProps) {
  const duration = speedDurations[speed];
  const animationName = reverse ? "marqueeReverse" : "marqueeForward";

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={cn("flex w-max", pauseOnHover && "group")}
        style={{ gap: `${gap}px` }}
      >
        {/* First copy */}
        <div
          className="flex shrink-0 items-center"
          style={{
            gap: `${gap}px`,
            animation: `${animationName} ${duration} linear infinite`,
          }}
        >
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div
          aria-hidden
          className="flex shrink-0 items-center"
          style={{
            gap: `${gap}px`,
            animation: `${animationName} ${duration} linear infinite`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
