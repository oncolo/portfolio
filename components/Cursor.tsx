"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.transform  += " scale(2.5)";
      if (ringRef.current) ringRef.current.style.transform += " scale(1.6)";
      if (ringRef.current) ringRef.current.style.borderColor = "#E8323C";
    };

    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.borderColor = "rgba(232,50,60,0.5)";
    };

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position: "fixed", top: 0, left: 0, zIndex: 99999,
        width: 8, height: 8, borderRadius: "50%",
        background: "#E8323C", pointerEvents: "none",
        transition: "transform 0.08s linear",
        mixBlendMode: "difference",
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: "fixed", top: 0, left: 0, zIndex: 99998,
        width: 36, height: 36, borderRadius: "50%",
        border: "1.5px solid rgba(232,50,60,0.5)",
        pointerEvents: "none",
        transition: "border-color 0.2s",
      }} />
    </>
  );
}
