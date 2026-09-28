/**
 * The founder portrait shown on /about.
 *
 * ── HOW TO ADD THE REAL PHOTOGRAPH ─────────────────────────────────────────
 * 1. Use a real photograph of the founder. Never a stock portrait, an avatar
 *    illustration or a generated image, a fabricated face is exactly the kind
 *    of thing the rest of this page says we do not do.
 * 2. Save it as WebP or JPG in public/images/clevops/ as `founder.jpg`,
 *    portrait orientation, 4:5, at least 1000px wide.
 * 3. Replace the `null` below with an object, e.g.
 *
 *      return {
 *        src: "/images/clevops/founder.jpg",
 *        alt: "Zain, founder of ClevOps.",
 *        width: 1200,
 *        height: 1500,
 *      };
 *
 * Nothing else changes: about-people.tsx swaps the labelled placeholder plate
 * for a next/image on its own and keeps the frame, the caption and the layout.
 * The alt text lives here so it is written once, deliberately, alongside the
 * file it describes.
 */

export type FounderPortrait = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** The return annotation keeps both branches of the fallback type-checked. */
export function getFounderPortrait(): FounderPortrait | null {
  // public/images/clevops/founder.jpg
  return null;
}
