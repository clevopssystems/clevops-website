"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      if (window.scrollY > 600) {
        setVisible(true);
      } else if (window.scrollY < 200) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative flex items-center gap-3 px-4 py-3 mx-3 mb-3 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(68,108,255,0.97) 0%, rgba(105,78,235,0.97) 100%)",
              boxShadow:
                "0 -2px 32px rgba(79,127,255,0.35), 0 8px 32px rgba(0,0,0,0.5)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white/80" />
            </span>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm leading-tight truncate">
                Book a Free Strategy Call
              </div>
              <div className="text-white/65 text-[10px] mt-0.5">
                No pitch · 30 min · Response in 4 hrs
              </div>
            </div>

            {/* CTA button */}
            <Link
              href="/contact"
              className="flex items-center gap-1.5 bg-white/[0.18] hover:bg-white/[0.28] active:bg-white/[0.35] text-white text-[11px] font-bold px-3.5 py-2 rounded-xl transition-colors duration-150 flex-shrink-0"
            >
              Book Now
              <ArrowUpRight size={12} />
            </Link>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-co-card border border-co-border flex items-center justify-center"
            >
              <X size={9} className="text-co-text-muted" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
