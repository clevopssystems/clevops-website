import Link from "next/link";

/** The one conversion route. Every primary CTA on the site resolves here. */
export const PROJECT_PAGE = "/start-a-project";

type ProjectLinkProps = {
  children?: React.ReactNode;
  variant?: "primary" | "dark";
  /** Where on the site the click came from, e.g. "navbar" or "final-cta". Read
   *  from the data-cta attribute when analytics is added. */
  source?: string;
  /** Set on /start-a-project itself: the button jumps to the form on the page
   *  instead of reloading the page it is already on. */
  current?: boolean;
};

/**
 * Every Start a Project CTA on the site. It always points at /start-a-project,
 * so the enquiry form is the single place a visitor gets in touch.
 */
export function ProjectLink({ children = "Start a Project", variant = "primary", source, current }: ProjectLinkProps) {
  return (
    <Link
      className={`button button-${variant}`}
      href={current ? "#project-form" : PROJECT_PAGE}
      aria-current={current ? "page" : undefined}
      data-cta={source}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
