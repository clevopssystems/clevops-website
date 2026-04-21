"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate, motion } from "framer-motion";

interface CounterProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function Counter({
  to,
  from = 0,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent =
            prefix + v.toFixed(decimals) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, from, duration, count, suffix, prefix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {prefix}
      {from}
      {suffix}
    </motion.span>
  );
}
