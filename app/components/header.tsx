"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROJECT_PAGE, ProjectLink } from "./project-link";

/**
 * /services, /our-system, /work, /process and /about exist as their own
 * routes, so every navbar item now resolves to a page of its own. The one
 * conversion action goes to /start-a-project through ProjectLink.
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let scrolled = false;

    function syncHeaderSurface() {
      const nextScrolled = window.scrollY > 16;
      if (scrolled === nextScrolled) return;
      scrolled = nextScrolled;
      headerRef.current?.toggleAttribute("data-scrolled", scrolled);
    }

    syncHeaderSurface();
    window.addEventListener("scroll", syncHeaderSurface, { passive: true });
    return () => window.removeEventListener("scroll", syncHeaderSurface);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    const desktop = window.matchMedia("(min-width: 761px)");
    function handleResize() {
      if (desktop.matches) setMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      className="site-header"
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <div className="container header-inner">
        <a className="wordmark" href="/" aria-label="ClevOps home">
          <span>ClevOps</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          ref={toggleRef}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={menuOpen ? "m6 6 12 12M6 18 18 6" : "M4 8h16M4 16h16"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <nav id="primary-navigation" className="primary-nav" aria-label="Main navigation" data-open={menuOpen}>
          <ul className="nav-links">
            <li>
              <Link
                className="nav-link"
                href="/services"
                aria-current={pathname === "/services" || pathname.startsWith("/services/") ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/our-system"
                aria-current={pathname === "/our-system" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Our System
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/work"
                aria-current={pathname === "/work" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/process"
                aria-current={pathname === "/process" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="/about"
                aria-current={pathname === "/about" ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
          <ProjectLink variant="dark" source="navbar" current={pathname === PROJECT_PAGE} />
        </nav>
      </div>
    </header>
  );
}
