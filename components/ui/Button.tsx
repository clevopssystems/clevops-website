"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<string, string> = {
  primary: cn(
    "relative bg-co-accent text-white font-semibold overflow-hidden",
    "shadow-glow-sm"
  ),
  secondary: cn(
    "bg-co-surface text-co-text font-medium",
    "border border-co-border hover:border-co-border-hover",
    "hover:bg-co-card"
  ),
  outline: cn(
    "bg-transparent text-co-text font-semibold",
    "border border-co-border hover:border-co-border-hover",
    "hover:bg-white/[0.06]"
  ),
  ghost: cn(
    "bg-transparent text-co-text-muted font-medium",
    "hover:text-co-text hover:bg-white/[0.05]"
  ),
};

const sizeStyles: Record<string, string> = {
  sm: "h-9 px-4 text-sm rounded-lg gap-1.5",
  md: "h-11 px-6 text-sm rounded-xl gap-2",
  lg: "h-[3.25rem] px-8 text-sm rounded-xl gap-2.5",
};

function Shimmer() {
  return (
    <span
      className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden"
      aria-hidden
    >
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        style={{
          background:
            "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.14) 50%, transparent 80%)",
        }}
      />
    </span>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
  external,
  icon,
  iconPosition = "right",
}: ButtonProps) {
  const baseClasses = cn(
    "group inline-flex items-center justify-center",
    "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "select-none",
    "disabled:opacity-40 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {variant === "primary" && <Shimmer />}
      {icon && iconPosition === "left" && (
        <span className="relative shrink-0">{icon}</span>
      )}
      <span className="relative">{children}</span>
      {icon && iconPosition === "right" && (
        <span className="relative shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}
        >
          {content}
        </motion.a>
      );
    }
    const isFullWidth = className?.includes("w-full");
    return (
      <motion.div
        className={isFullWidth ? "w-full" : "inline-flex"}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
      >
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
    >
      {content}
    </motion.button>
  );
}
