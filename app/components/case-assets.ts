/**
 * Real imagery for the selected build shown on the homepage and on /work.
 *
 * ── HOW TO ADD THE REAL SCREENSHOTS ────────────────────────────────────────
 * 1. Capture the delivered client build.
 *      desktop : 2560 x 1600 (16:10), viewport capture, no browser chrome,
 *                the frame in work.tsx draws its own chrome.
 *      mobile  : 828 x 1792 (roughly 9:19.5), a real phone-width capture.
 * 2. Save them as WebP or JPG in public/images/clevops/ using the names below.
 * 3. Replace the matching `null` in getCaseAssets() with an object, e.g.
 *
 *      desktop: {
 *        src: "/images/clevops/work-service-business.jpg",
 *        alt: "Home page of the delivered website, showing the service
 *              hierarchy and the primary enquiry action.",
 *        width: 2560,
 *        height: 1600,
 *      },
 *
 * Nothing else has to change: work.tsx and work-featured.tsx swap the
 * code-drawn structure diagram for a next/image automatically and keep the
 * frame, caption and layout. `mobile` is optional, leave it null and the
 * device frame is not rendered.
 *
 * Only ever put a verified capture of work we delivered here. No mockups,
 * composites, stock photography or generated imagery. The client is not named
 * on either page, so keep the alt text descriptive rather than identifying.
 */

export type CaseShot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseAssets = {
  desktop: CaseShot | null;
  mobile: CaseShot | null;
};

/** The return annotation keeps both branches of the fallback type-checked. */
export function getCaseAssets(): CaseAssets {
  return {
    // public/images/clevops/work-service-business.jpg
    desktop: null,
    // public/images/clevops/work-service-business-mobile.jpg
    mobile: null,
  };
}
