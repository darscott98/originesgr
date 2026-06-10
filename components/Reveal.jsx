"use client";

import { useEffect } from "react";

// Handles the on-scroll reveal animations and the portfolio donut fill.
// Rendered once near the root; it wires up observers against the static markup.
export default function Reveal() {
  useEffect(() => {
    // The app hydrated, so cancel the no-JS/failed-hydration failsafe in layout.jsx.
    clearTimeout(window.__revealFailsafe);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const reveals = Array.from(document.querySelectorAll(".reveal"));

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));

      // Fill the donut once it scrolls into view.
      const donut = document.getElementById("donut");
      const seg1 = document.getElementById("seg1");
      const seg2 = document.getElementById("seg2");
      if (donut && seg1 && seg2) {
        const C = 2 * Math.PI * 86; // r = 86
        const draw = () => {
          const a = C * 0.6; // 60% majority equity
          const b = C * 0.4; // 40% minority & quasi-equity
          seg1.style.strokeDasharray = `${a} ${C}`;
          seg2.style.strokeDasharray = `${b} ${C}`;
          seg2.style.strokeDashoffset = `${-a}`;
        };
        const dio = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                draw();
                obs.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        dio.observe(donut);
        return () => {
          io.disconnect();
          dio.disconnect();
        };
      }
      return () => io.disconnect();
    }
  }, []);

  return null;
}
