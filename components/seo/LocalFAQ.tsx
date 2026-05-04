"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionLabel } from "@/components/ui/SectionLabel"

export interface FAQItem {
  question: string
  answer: string
}

interface LocalFAQProps {
  items: FAQItem[]
  title?: string
  className?: string
}

const ease = [0.16, 1, 0.3, 1] as const

export function LocalFAQ({ items, title = "Frequently Asked Questions", className }: LocalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-10">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="rounded-xl border border-co-border bg-co-card overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-co-text leading-snug">{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="shrink-0 text-co-text-muted"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <p className="px-6 pb-5 text-sm text-co-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
