"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu, X, Zap,
  Briefcase, Cpu, User, Mail, Home,
  Code2, FlaskConical, Sun, Moon,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const R  = "#E8323C";
const W  = "var(--white)";
const WD = "var(--white-70)";
const FONT_HEAD = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const NAV_LINKS = [
  { label: "Home",    href: "#hero",    Icon: Home     },
  { label: "Work",    href: "#work",    Icon: Briefcase },
  { label: "Skills",  href: "#skills",  Icon: Cpu       },
  { label: "About",   href: "#about",   Icon: User      },
  { label: "Contact", href: "#contact", Icon: Mail      },
];

/* ── Animated logo graphic ── */
function LogoMark() {
  return (
    <div style={{
      width: 36, height: 36, borderRadius: "50%",
      overflow: "hidden", position: "relative",
    }}>
      <Image
        src="/u/photo_2026-04-25_09-15-43.jpg"
        alt="Oncolo Oysa logo"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

/* ── Decorative line graphic ── */
function Separator() {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:"6px", flexShrink:0 }}>
      <div style={{ width:1, height:20, background:`linear-gradient(to bottom, transparent, ${R}55, transparent)` }} />
      <div style={{ width:4, height:4, borderRadius:"50%", background:R, boxShadow:`0 0 6px ${R}` }} />
      <div style={{ width:1, height:20, background:`linear-gradient(to bottom, transparent, ${R}55, transparent)` }} />
    </div>
  );
}

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = NAV_LINKS.map(l => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ══ TOP BAR ══ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.55rem 2.5rem" : "0.85rem 2.5rem",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          background: scrolled ? "var(--glass-bg)" : "transparent",
          borderBottom: scrolled ? `1px solid var(--border)` : "none",
          transition: "padding 0.35s, background 0.35s, border 0.35s",
          gap: "1.5rem",
        }}
      >
        {/* ── Logo ── */}
        <a href="#" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"0.5rem", flexShrink:0 }}>
          <LogoMark />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: FONT_HEAD, fontWeight:700, fontSize:"1rem", color:W, letterSpacing:"-0.02em" }}>
              Oncolo <span style={{ color:R }}>Oysa</span>
            </div>
            <div style={{ fontFamily: FONT_BODY, fontSize:"0.5rem", color:WD, letterSpacing:"0.18em", textTransform:"uppercase" }}>
              Web Dev · QA Tester
            </div>
          </div>
        </a>

        {/* ── Separator ── */}
        <div className="nav-desktop"><Separator /></div>

        {/* ── Nav links ── */}
        <div className="nav-desktop" style={{ display:"flex", alignItems:"center", gap:"0.2rem", flex:1, justifyContent:"center" }}>
          {NAV_LINKS.map(({ label, href, Icon }) => {
            const active = activeSection === href.replace("#","");
            return (
              <a key={label} href={href} style={{
                position:"relative",
                display:"inline-flex", alignItems:"center", gap:"0.35rem",
                padding:"0.38rem 0.95rem",
                borderRadius:999,
                fontSize:"0.88rem",
                fontFamily: FONT_HEAD,
                fontWeight: active ? 600 : 400,
                color: active ? W : WD,
                background: active ? `rgba(232,50,60,0.14)` : "transparent",
                textDecoration:"none",
                transition:"color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { if(!active){ e.currentTarget.style.color=W; e.currentTarget.style.background=`rgba(232,50,60,0.08)`; }}}
                onMouseLeave={e => { if(!active){ e.currentTarget.style.color=WD; e.currentTarget.style.background="transparent"; }}}
              >
                <Icon size={13} color={active ? R : "currentColor"} strokeWidth={active ? 2.5 : 1.8} />
                {label}
                {active && (
                  <span style={{
                    position:"absolute", bottom:2, left:"50%", transform:"translateX(-50%)",
                    width:4, height:4, borderRadius:"50%",
                    background:R, boxShadow:`0 0 6px ${R}`,
                  }} />
                )}
              </a>
            );
          })}
        </div>

        {/* ── Separator ── */}
        <div className="nav-desktop"><Separator /></div>

        {/* ── Right cluster ── */}
        <div className="nav-desktop" style={{ display:"flex", alignItems:"center", gap:"0.5rem", flexShrink:0 }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"0.3rem",
            fontSize:"0.72rem", color:W, fontFamily:FONT_BODY,
            background:`rgba(232,50,60,0.12)`, border:`1px solid rgba(232,50,60,0.28)`,
            borderRadius:999, padding:"0.22rem 0.65rem",
          }}>
            <Code2 size={10} color={R} /> Dev
          </span>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:"0.3rem",
            fontSize:"0.72rem", color:W, fontFamily:FONT_BODY,
            background:`rgba(232,50,60,0.12)`, border:`1px solid rgba(232,50,60,0.28)`,
            borderRadius:999, padding:"0.22rem 0.65rem",
          }}>
            <FlaskConical size={10} color={R} /> QA
          </span>
          <button onClick={toggle} aria-label="Toggle theme" style={{
            background:`rgba(232,50,60,0.12)`, border:`1px solid rgba(232,50,60,0.28)`,
            color:W, cursor:"pointer", borderRadius:999, padding:"0.38rem 0.65rem",
            display:"inline-flex", alignItems:"center", justifyContent:"center",
            transition:"background 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background=`rgba(232,50,60,0.22)`; }}
            onMouseLeave={e => { e.currentTarget.style.background=`rgba(232,50,60,0.12)`; }}
          >
            {dark ? <Sun size={15} color={R} /> : <Moon size={15} color={R} />}
          </button>
          <a href="#contact" style={{
            display:"inline-flex", alignItems:"center", gap:"0.35rem",
            background:R, color:W,
            padding:"0.42rem 1.2rem", borderRadius:999,
            fontSize:"0.85rem", fontFamily:FONT_HEAD, fontWeight:600,
            textDecoration:"none", boxShadow:`0 4px 18px rgba(232,50,60,0.45)`,
            transition:"transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=`0 8px 26px rgba(232,50,60,0.65)`; }}
            onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=`0 4px 18px rgba(232,50,60,0.45)`; }}
          >
            <Zap size={13} /> Hire Me
          </a>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button id="nav-menu-toggle" className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ background:`rgba(232,50,60,0.12)`, border:`1px solid rgba(232,50,60,0.35)`,
            color:W, cursor:"pointer", borderRadius:10, padding:"0.4rem",
            display:"flex", alignItems:"center", justifyContent:"center" }}
        >
          {menuOpen ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </motion.nav>

      {/* ══ MOBILE DRAWER ══ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity:0, y:-14, scale:0.97 }}
            animate={{ opacity:1, y:0,   scale:1    }}
            exit={{    opacity:0, y:-10,  scale:0.97 }}
            transition={{ duration:0.24, ease:[0.16,1,0.3,1] }}
            className="nav-mobile-btn"
            style={{
              position:"fixed", top:"3.8rem", left:"0.75rem", right:"0.75rem",
              background:"var(--glass-bg)", backdropFilter:"blur(24px)",
              zIndex:40, borderRadius:18, border:`1px solid var(--border)`,
              boxShadow:"0 20px 60px rgba(0,0,0,0.1)", padding:"1rem",
              flexDirection:"column", gap:"0.15rem",
            }}
          >
            {NAV_LINKS.map(({ label, href, Icon }, i) => (
              <motion.a key={label} href={href}
                initial={{ opacity:0, x:-8 }} animate={{ opacity:1, x:0 }}
                transition={{ delay:i*0.05 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  color:W, textDecoration:"none", fontSize:"1.05rem",
                  fontFamily:FONT_HEAD, fontWeight:600,
                  padding:"0.65rem 0.85rem", borderRadius:10,
                  display:"flex", alignItems:"center", gap:"0.6rem",
                  transition:"background 0.18s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background=`rgba(232,50,60,0.12)`; }}
                onMouseLeave={e => { e.currentTarget.style.background="transparent"; }}
              >
                <Icon size={16} color={R} /> {label}
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              marginTop:"0.6rem", display:"flex", alignItems:"center",
              justifyContent:"center", gap:"0.5rem",
              background:R, color:W, padding:"0.8rem", borderRadius:12,
              fontSize:"0.95rem", fontFamily:FONT_HEAD, fontWeight:700,
              textDecoration:"none", boxShadow:`0 4px 20px rgba(232,50,60,0.4)`,
            }}>
              <Zap size={15}/> Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-btn { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop    { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
