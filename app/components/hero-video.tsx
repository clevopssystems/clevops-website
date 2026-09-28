"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ className = "hero-video" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!video) return;

    // Pages show this footage twice (hero and closing scene), so an instance
    // only plays while it is on screen instead of decoding in the background.
    let onScreen = true;

    function sync() {
      if (!video) return;
      if (reducedMotion.matches || !onScreen) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Keep the hero usable when the browser blocks autoplay.
        });
      }
    }

    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            onScreen = entry.isIntersecting;
            sync();
          }, { rootMargin: "200px 0px" })
        : null;
    observer?.observe(video);

    sync();
    reducedMotion.addEventListener("change", sync);
    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", sync);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}
