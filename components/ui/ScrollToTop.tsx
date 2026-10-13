"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const scroll = () => setVisible(window.scrollY > 300);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return visible ? (
    <button
      className="scroll-top icon-button"
      aria-label="Wróć na górę strony"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        })
      }
    >
      <ArrowUp aria-hidden="true" />
    </button>
  ) : null;
}
