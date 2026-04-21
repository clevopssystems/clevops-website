"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "bg-[rgba(7,7,9,0.90)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.10)] py-3"
            : "bg-transparent py-5"
        )}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group" aria-label="ClevOps home">
            <Logo size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  "transition-all duration-200",
                  pathname === link.href
                    ? "text-co-text bg-white/[0.07]"
                    : "text-co-text-secondary hover:text-co-text hover:bg-white/[0.05]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button
                href="/contact"
                size="sm"
                icon={<ArrowUpRight size={14} />}
              >
                Book a Call
              </Button>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "md:hidden w-9 h-9 rounded-lg flex items-center justify-center",
                "text-co-text-secondary hover:text-co-text",
                "border border-co-border hover:border-co-border-hover",
                "transition-all duration-200"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-co-bg/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative flex flex-col h-full pt-24 px-6 pb-10">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.06,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between",
                        "px-4 py-4 rounded-xl text-xl font-medium",
                        "border border-transparent",
                        "transition-all duration-200",
                        pathname === link.href
                          ? "text-co-text bg-white/[0.06] border-co-border"
                          : "text-co-text-secondary hover:text-co-text hover:bg-white/[0.04]"
                      )}
                    >
                      {link.label}
                      <ArrowUpRight size={18} className="opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button href="/contact" size="lg" className="w-full justify-center" icon={<ArrowUpRight size={16} />}>
                  Book a Free Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
