"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: Variants;
  stagger?: boolean;
  delay?: number;
  once?: boolean;
  threshold?: number;
  as?: "div" | "section" | "article" | "aside";
}

export function AnimatedSection({
  children,
  className,
  variant,
  stagger = false,
  delay = 0,
  once = true,
  threshold = 0.15,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const selectedVariant = variant ?? (stagger ? staggerContainer : fadeUp);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...({ as: Tag } as any)}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  variant?: Variants;
  delay?: number;
}

export function AnimatedItem({
  children,
  className,
  variant,
  delay,
}: AnimatedItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const defaultVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay: delay ?? 0,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant ?? defaultVariant}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
