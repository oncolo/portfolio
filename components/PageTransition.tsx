"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["hero", "work", "skills", "about", "contact"];

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const currentIdx = useRef(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const id = href.slice(1);
      const nextIdx = SECTIONS.indexOf(id);
      if (nextIdx === -1) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const isForward = nextIdx > currentIdx.current;
      currentIdx.current = nextIdx;

      const overlay = overlayRef.current;
      if (!overlay) return;

      // Set direction
      overlay.style.transform = isForward ? "translateX(-100%)" : "translateX(100%)";
      overlay.style.transition = "none";
      overlay.style.display = "block";

      // Force reflow
      overlay.getBoundingClientRect();

      // Slide in
      overlay.style.transition = "transform 0.35s cubic-bezier(0.76,0,0.24,1)";
      overlay.style.transform = "translateX(0%)";

      setTimeout(() => {
        el.scrollIntoView({ behavior: "auto" });
        // Slide out opposite direction
        overlay.style.transition = "transform 0.35s cubic-bezier(0.76,0,0.24,1)";
        overlay.style.transform = isForward ? "translateX(100%)" : "translateX(-100%)";
        setTimeout(() => { overlay.style.display = "none"; }, 360);
      }, 350);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        display: "none",
        position: "fixed", inset: 0, zIndex: 99999,
        background: "#0a0b12",
        borderLeft: "1px solid rgba(232,50,60,0.2)",
        borderRight: "1px solid rgba(232,50,60,0.2)",
      }}
    />
  );
}
