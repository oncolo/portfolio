"use client";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";

const Github = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const R = "#E8323C";
const W = "var(--white)";
const WD = "var(--white-70)";
const FONT_HEAD = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const TelegramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21.93 3.24L2.35 10.9c-1.3.52-1.29 1.26-.24 1.58l4.98 1.56 11.53-7.28c.54-.33 1.04-.15.63.21L8.39 16.4l-.37 5.17c.54 0 .78-.25 1.08-.54l2.59-2.52 5.08 3.76c.94.52 1.61.25 1.84-.87l3.33-15.7c.34-1.36-.52-1.97-1.05-1.66z" fill="currentColor"/>
  </svg>
);

const SOCIALS = [
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Telegram", href: "https://t.me/oncolo1226", Icon: TelegramIcon },
];

const NAV = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: `1px solid rgba(232,50,60,0.15)`,
      padding: "4rem 2rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* BG glow */}
      <div style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 200, borderRadius: "50%",
        background: `radial-gradient(ellipse, rgba(232,50,60,0.06) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* ── Top row ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "3rem", alignItems: "start",
          marginBottom: "3rem", paddingBottom: "3rem",
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
        }}
          className="footer-grid"
        >
          {/* LEFT — Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"1rem" }}>
              {/* Avatar image logo */}
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                overflow: "hidden", position: "relative",
                flexShrink: 0,
              }}>
                <Image
                  src="/u/photo_2026-04-25_09-15-43.jpg"
                  alt="Oncolo Oysa logo"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <div style={{ fontFamily: FONT_HEAD, fontWeight: 700, fontSize: "1.1rem", color: W }}>
                  Oncolo <span style={{ color: R }}>Oysa</span>
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: "0.5rem", color: WD, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Web Developer · QA Tester
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: WD, fontFamily: FONT_BODY, lineHeight: 1.7, maxWidth: 280 }}>
              Building responsive web applications and ensuring quality through thorough testing.
            </p>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1.25rem" }}>
              <a href="tel:+251960277455" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.82rem", color: WD, fontFamily: FONT_BODY,
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = W}
                onMouseLeave={e => e.currentTarget.style.color = WD}
              >
                <Phone size={13} color={R} /> +251 960 277 455
              </a>
              <a href="mailto:oysaoncolo3@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.82rem", color: WD, fontFamily: FONT_BODY,
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = W}
                onMouseLeave={e => e.currentTarget.style.color = WD}
              >
                <Mail size={13} color={R} /> oysaoncolo3@gmail.com
              </a>
            </div>
          </div>

          {/* CENTER — Nav links */}
          <div>
            <p style={{ fontSize: "0.65rem", color: R, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: FONT_HEAD, marginBottom: "1rem", fontWeight: 600 }}>
              Navigation
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {NAV.map(({ label, href }) => (
                <a key={label} href={href} style={{
                  fontSize: "0.875rem", color: WD, fontFamily: FONT_BODY,
                  textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.color = W}
                  onMouseLeave={e => e.currentTarget.style.color = WD}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT — CTA box */}
          <div style={{
            background: `rgba(232,50,60,0.06)`,
            border: `1px solid rgba(232,50,60,0.18)`,
            borderRadius: 16, padding: "1.5rem",
          }}>
            <p style={{ fontSize: "0.65rem", color: R, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: FONT_HEAD, fontWeight: 600, marginBottom: "0.6rem" }}>
              Available for Work
            </p>
            <p style={{ fontSize: "0.85rem", color: WD, fontFamily: FONT_BODY, lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Open to freelance projects and full-time roles. Let&apos;s build something great together.
            </p>
            <a href="mailto:oysaoncolo3@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: R, color: W, padding: "0.55rem 1.25rem",
              borderRadius: 999, fontSize: "0.85rem",
              fontFamily: FONT_HEAD, fontWeight: 600,
              textDecoration: "none", boxShadow: `0 4px 18px rgba(232,50,60,0.4)`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px rgba(232,50,60,0.6)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 4px 18px rgba(232,50,60,0.4)`; }}
            >
              <Mail size={13} /> Get In Touch
            </a>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 34, height: 34, borderRadius: 8,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
                    color: WD, transition: "color 0.2s, border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = W; e.currentTarget.style.borderColor = `rgba(232,50,60,0.4)`; e.currentTarget.style.background = `rgba(232,50,60,0.1)`; }}
                  onMouseLeave={e => { e.currentTarget.style.color = WD; e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.75rem", color: WD, fontFamily: FONT_BODY }}>
            © {year} <span style={{ color: W, fontWeight: 500 }}>Oncolo Oysa</span>. Designed &amp; built with Next.js + Framer Motion.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            suppressHydrationWarning
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
              color: WD, cursor: "pointer", borderRadius: 999,
              padding: "0.35rem 0.9rem", fontSize: "0.75rem", fontFamily: FONT_BODY,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = W; e.currentTarget.style.borderColor = `rgba(232,50,60,0.35)`; }}
            onMouseLeave={e => { e.currentTarget.style.color = WD; e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
          >
            <ArrowUp size={12} /> Back to top
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
