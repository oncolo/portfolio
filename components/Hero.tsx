"use client";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { ArrowRight, Phone, Mail, ChevronDown } from "lucide-react";

const R = "#E8323C";
const W = "var(--white)";
const WD = "var(--white-70)";
const FONT_HEAD = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const roles = ["Web Developer", "QA Tester", "React & Next.js Dev", "Frontend Engineer"];

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop", // code editor dark
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&h=900&fit=crop", // code screen
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1600&h=900&fit=crop", // laptop code
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop", // programming
];

export default function Hero() {
  const blobX = useMotionValue(50);
  const blobY = useMotionValue(50);
  const springX = useSpring(blobX, { stiffness: 40, damping: 20 });
  const springY = useSpring(blobY, { stiffness: 40, damping: 20 });
  const roleRef = useRef<HTMLSpanElement>(null);
  const roleIndex = useRef(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      blobX.set((e.clientX / window.innerWidth) * 100);
      blobY.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [blobX, blobY]);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    const cycle = () => {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
      setTimeout(() => {
        roleIndex.current = (roleIndex.current + 1) % roles.length;
        el.textContent = roles[roleIndex.current];
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 350);
    };
    const id = setInterval(cycle, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const words = ["Building", "web apps", "that", "work."];

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "8rem 2rem 4rem",
      background: "var(--bg)",
    }}>
      {/* Dynamic background images */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: "var(--hero-bg-opacity)" as any }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${BACKGROUND_IMAGES[bgIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.15) 0%, var(--bg) 90%)",
        }} />
      </div>

      {/* Geometric bg shapes */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <ElegantShape delay={0.3} width={620} height={140} rotate={12} gradient="from-red-500/[0.08]" className="left-[-8%] top-[18%]" />
        <ElegantShape delay={0.5} width={480} height={110} rotate={-15} gradient="from-rose-500/[0.06]" className="right-[-4%] top-[65%]" />
        <ElegantShape delay={0.4} width={280} height={75} rotate={-8} gradient="from-red-500/[0.06]" className="left-[8%] bottom-[8%]" />
        <ElegantShape delay={0.6} width={180} height={55} rotate={22} gradient="from-rose-500/[0.05]" className="right-[18%] top-[12%]" />
      </div>

      {/* Mouse glow */}
      <motion.div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(232,50,60,0.08) 0%, transparent 70%)`,
        pointerEvents: "none", left: springX, top: springY, x: "-50%", y: "-50%",
      }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${R}06 1px, transparent 1px), linear-gradient(90deg, ${R}06 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
      }} />

      {/* Content grid */}
      <div className="hero-grid" style={{
        maxWidth: 1160, width: "100%", position: "relative", zIndex: 1,
        display: "grid", gridTemplateColumns: "400px 1fr", gap: "5rem", alignItems: "center",
      }}>
        {/* LEFT — Photo card */}
        <motion.div initial={{ opacity: 0, x: -60, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", margin: "0 auto" }} className="hero-photo-col">

          {/* Glow */}
          <div style={{
            position: "absolute", inset: -35,
            background: `radial-gradient(ellipse at center, rgba(232,50,60,0.22) 0%, transparent 70%)`,
            borderRadius: "50%", filter: "blur(35px)", pointerEvents: "none"
          }} />

          {/* Underlay Card 1 (Red outline offset) */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: `1.5px solid ${R}`,
            background: "rgba(232,50,60,0.03)",
            transform: "rotate(-4deg) translate(-10px, -5px)",
            pointerEvents: "none", zIndex: 0,
            transition: "transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          }} className="photo-underlay-1" />

          {/* Underlay Card 2 (Glass outline offset) */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: `1.5px solid rgba(255, 255, 255, 0.08)`,
            background: "rgba(255,255,255,0.01)",
            transform: "rotate(3deg) translate(8px, 8px)",
            pointerEvents: "none", zIndex: 0,
            transition: "transform 0.4s ease, border-color 0.4s ease",
          }} className="photo-underlay-2" />

          {/* Photo card */}
          <div style={{
            position: "relative", borderRadius: "50%", overflow: "hidden",
            border: `1.5px solid rgba(255,255,255,0.12)`,
            boxShadow: `0 30px 85px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,50,60,0.15)`,
            aspectRatio: "1/1", background: "#111118", zIndex: 1,
            transition: "transform 0.4s ease, border-color 0.4s ease"
          }}
            className="photo-main-card">
            <Image
              src="/u/photo_2026-04-25_09-15-43.jpg"
              alt="Oncolo Oysa — Web Developer & QA Tester"
              fill style={{ objectFit: "cover", objectPosition: "top" }} priority sizes="400px" />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,8,14,0.95) 0%, rgba(8,8,14,0.3) 40%, transparent 70%)",
              pointerEvents: "none"
            }} />

            {/* Name tag */}
            <div style={{
              position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
              width: "82%", textAlign: "center",
              padding: "0.65rem 1rem", zIndex: 2,
              background: "var(--glass-bg)", backdropFilter: "blur(12px)",
              border: `1px solid var(--border)`, borderRadius: 999,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}>
              <p style={{ fontFamily: FONT_HEAD, fontWeight: 700, fontSize: "0.95rem", color: W, letterSpacing: "-0.02em", marginBottom: "0.05rem" }}>
                Oncolo <span style={{ color: R }}>Oysa</span>
              </p>
              <p style={{ fontSize: "0.58rem", color: R, fontFamily: FONT_BODY, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                Web Dev · QA Tester
              </p>
            </div>
          </div>


        </motion.div>

        {/* RIGHT — Text content */}
        <div>
          {/* Available badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: `rgba(232,50,60,0.1)`, border: `1px solid rgba(232,50,60,0.25)`,
              borderRadius: 999, padding: "0.35rem 1rem", marginBottom: "1.5rem"
            }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: R, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.72rem", color: R, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: FONT_HEAD, fontWeight: 600 }}>
              Available for work
            </span>
          </motion.div>

          {/* Label */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.6rem",
              fontSize: "0.72rem", fontFamily: FONT_HEAD, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.1em",
              color: WD, marginBottom: "0.85rem",
            }}>
            <span style={{ color: W }}>Oncolo <span style={{ color: R }}>Oysa</span></span>
            <span style={{ color: "rgba(255,255,255,0.18)" }}>|</span>
            <span style={{ color: R }}>Web Dev &amp; QA Tester</span>
          </motion.div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(2.6rem,8vw,6rem)", lineHeight: 0.95, fontFamily: FONT_HEAD, fontWeight: 700, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
            {words.map((word, i) => (
              <motion.span key={word}
                initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "inline-block", marginRight: "0.25em", color: i === 1 || i === 3 ? R : W }}>
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Role cycling */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <span style={{ color: WD, fontSize: "0.95rem", fontFamily: FONT_BODY }}>I am a</span>
            <span ref={roleRef} style={{ color: R, fontFamily: FONT_HEAD, fontWeight: 600, fontSize: "0.95rem", transition: "opacity 0.3s ease, transform 0.3s ease" }}>
              {roles[0]}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}
            style={{ fontSize: "0.95rem", color: WD, lineHeight: 1.8, maxWidth: 500, marginBottom: "2.5rem", fontFamily: FONT_BODY }}>
            Experienced in building responsive web applications using HTML, CSS, JavaScript, React, and Next.js. Also skilled in backend development with PHP &amp; SQL, plus full web and mobile QA testing.
          </motion.p>

          {/* Contact links */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {[
              { href: "tel:+251960277455", label: "+251 960 277 455", Icon: Phone },
              { href: "mailto:oysaoncolo3@gmail.com", label: "oysaoncolo3@gmail.com", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a key={href} href={href} style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", color: WD, textDecoration: "none", fontFamily: FONT_BODY, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = W}
                onMouseLeave={e => e.currentTarget.style.color = WD}>
                <Icon size={13} color={R} /><span>{label}</span>
              </a>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#work" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: R, color: W, padding: "0.85rem 2rem", borderRadius: 999,
              fontFamily: FONT_HEAD, fontWeight: 600, textDecoration: "none", fontSize: "0.9rem",
              boxShadow: `0 0 36px rgba(232,50,60,0.35)`, transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 36px rgba(232,50,60,0.55)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 0 36px rgba(232,50,60,0.35)`; }}>
              View Projects <ArrowRight size={15} />
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "transparent", color: W,
              padding: "0.85rem 2rem", borderRadius: 999,
              fontFamily: FONT_HEAD, fontWeight: 500, textDecoration: "none", fontSize: "0.9rem",
              border: "1px solid rgba(255,255,255,0.15)", transition: "border 0.2s, background 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,50,60,0.5)"; e.currentTarget.style.background = "rgba(232,50,60,0.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent"; }}>
              <Mail size={15} /> Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem"
        }}>
        <span style={{ fontSize: "0.58rem", color: WD, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: FONT_BODY }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={16} color={R} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        .hero-photo-col:hover .photo-underlay-1 {
          transform: rotate(-7deg) translate(-16px, -10px) !important;
          border-color: ${R} !important;
          box-shadow: 0 0 20px rgba(232,50,60,0.2);
        }
        .hero-photo-col:hover .photo-underlay-2 {
          transform: rotate(6deg) translate(14px, 14px) !important;
          border-color: rgba(255,255,255,0.18) !important;
        }
        .hero-photo-col:hover .photo-main-card {
          transform: translateY(-4px) scale(1.02) !important;
          border-color: rgba(232,50,60,0.4) !important;
        }
        .hero-photo-col { width: 340px; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-photo-col { width: 220px !important; }
          .hero-photo-col .pill { display: none !important; }
        }
        @media (max-width: 600px) {
          .hero-grid { padding: 0 !important; }
          .hero-photo-col { width: 170px !important; }
        }
      `}</style>
    </section>
  );
}
