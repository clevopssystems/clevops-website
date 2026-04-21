import type { Variants } from "framer-motion";

/* ── Easing curves ─────────────────────────────────────────── */
export const EASE_PREMIUM  = [0.16, 1, 0.3, 1]  as const;
export const EASE_OUT      = [0.0, 0.0, 0.2, 1] as const;
export const EASE_IN_OUT   = [0.4, 0, 0.2, 1]   as const;
export const EASE_SNAPPY   = [0.22, 1, 0.36, 1] as const;

/* ── Base entrance variants ─────────────────────────────────── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

/* ── Card / block reveal — scale + y + opacity ──────────────── */
export const cardReveal: Variants = {
  hidden:  { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.68, ease: EASE_PREMIUM },
  },
};

/* ── Row/list item reveal — x directional + y + opacity ─────── */
export const rowReveal: Variants = {
  hidden:  { opacity: 0, x: -14, y: 8 },
  visible: {
    opacity: 1, x: 0, y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

/* ── Scale pop (for badges, tags, stat values) ──────────────── */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: EASE_PREMIUM },
  },
};

/* ── Header block — orchestrated section header stagger ─────── */
export const headerBlock: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
};

export const headerLabel: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_PREMIUM } },
};

export const headerH2: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.78, ease: EASE_PREMIUM },
  },
};

export const headerP: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_PREMIUM } },
};

/* ── Stagger containers ─────────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerContainerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/** For grids where the enter delay should start after the header has settled */
export const staggerGrid: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

/** For tighter lists (process steps, deliverables) */
export const staggerList: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

/* ── Stagger items ──────────────────────────────────────────── */
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

/** Card variant with subtle scale for grids */
export const staggerItemCard: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: EASE_PREMIUM },
  },
};

/** Row variant with x-axis directional hint */
export const staggerItemRow: Variants = {
  hidden:  { opacity: 0, x: -12, y: 6 },
  visible: {
    opacity: 1, x: 0, y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

/* ── Hero / large title ─────────────────────────────────────── */
export const heroTitle: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
};

export const heroWord: Variants = {
  hidden:  { opacity: 0, y: 40, rotateX: -20 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
};

/* ── Line / underline draw-in ───────────────────────────────── */
export const lineReveal: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: EASE_PREMIUM } },
};

/* ── Hover configs (pass directly to whileHover) ────────────── */
export const springHoverCard = {
  y: -7,
  scale: 1.005,
  transition: { type: "spring" as const, stiffness: 360, damping: 24 },
};

export const springHoverCardSmall = {
  y: -5,
  transition: { type: "spring" as const, stiffness: 400, damping: 26 },
};

export const springHoverLift = {
  y: -4,
  transition: { type: "spring" as const, stiffness: 500, damping: 30 },
};

/* ── Card shadow variants (for motion.div style animations) ─── */
export const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
  },
  hover: {
    y: -6,
    boxShadow: "0 16px 56px rgba(0,0,0,0.55), 0 0 0 1px rgba(79,127,255,0.18)",
    transition: { duration: 0.35, ease: EASE_PREMIUM },
  },
};
