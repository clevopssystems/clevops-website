"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Motion is an enhancement: server-rendered content is always readable. */
export function ScrollScene({ children }: { children: ReactNode }) {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!scene || reducedMotion.matches || !("IntersectionObserver" in window)) return;

    const elements = scene.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "visible";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => {
      element.dataset.reveal = "ready";
      observer.observe(element);
    });

    function stopMotion() {
      if (!reducedMotion.matches) return;
      observer.disconnect();
      elements.forEach((element) => { element.dataset.reveal = ""; });
    }

    reducedMotion.addEventListener("change", stopMotion);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", stopMotion);
      elements.forEach((element) => { element.dataset.reveal = ""; });
    };
  }, []);

  return <div ref={sceneRef}>{children}</div>;
}
