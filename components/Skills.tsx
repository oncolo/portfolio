"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Monitor, Server, Database, TestTube2,
  GitBranch, Code, Terminal, Globe,
  Languages, Palette, Layout, Atom,
  Layers, FileCode, Smartphone, Bug,
  Eye, Brush, Laptop
} from "lucide-react";

const R  = "#E8323C";
const W  = "var(--white)";
const WD = "var(--white-70)";
const FONT_HEAD = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const skillGroups = [
  {
    label: "Frontend",
    Icon: Monitor,
    items: [
      { name: "HTML5 / CSS3",       level: 92, Icon: Code },
      { name: "JavaScript (ES6+)",  level: 88, Icon: FileCode },
      { name: "React.js",           level: 85, Icon: Atom },
      { name: "Next.js",            level: 80, Icon: Layers },
    ],
  },
  {
    label: "Backend & Database",
    Icon: Server,
    items: [
      { name: "PHP",                level: 78, Icon: FileCode },
      { name: "SQL / MySQL",        level: 82, Icon: Database },
      { name: "PostgreSQL",         level: 74, Icon: Server },
    ],
  },
  {
    label: "Testing & QA",
    Icon: TestTube2,
    items: [
      { name: "Web App Testing",    level: 88, Icon: Globe },
      { name: "Mobile App Testing", level: 85, Icon: Smartphone },
      { name: "Bug Reporting",      level: 90, Icon: Bug },
      { name: "UI / UX Review",     level: 82, Icon: Eye },
    ],
  },
  {
    label: "Design & Creative",
    Icon: Palette,
    items: [
      { name: "Graphic Design",     level: 80, Icon: Brush },
      { name: "UI / UX Design",     level: 85, Icon: Layout },
      { name: "Figma / Photoshop",  level: 82, Icon: Laptop },
    ],
  },
];

const tools = [
  { name: "Git & GitHub",      Icon: GitBranch  },
  { name: "VS Code",           Icon: Code       },
  { name: "Postman",           Icon: Globe      },
  { name: "Browser DevTools",  Icon: Monitor    },
  { name: "MySQL Workbench",   Icon: Database   },
  { name: "Terminal",          Icon: Terminal   },
];

const languages = [
  { name: "Amharic",  note: "Native",       Icon: Languages },
  { name: "English",  note: "Professional", Icon: Globe     },
];

/* ── Skill bar ── */
function SkillBar({ name, level, delay, Icon }: { name: string; level: number; delay: number; Icon?: React.ComponentType<any> }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: "1.2rem" }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"0.4rem", alignItems: "center" }}>
        <span style={{ fontSize:"0.875rem", color:W, fontFamily:FONT_BODY, display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {Icon && <Icon size={14} color={R} />}
          {name}
        </span>
        <span style={{ fontSize:"0.72rem",  color:WD, fontFamily:FONT_BODY }}>{level}%</span>
      </div>
      <div style={{ height:3, background:"var(--border)", borderRadius:2, overflow:"hidden" }}>
        <motion.div
          initial={{ width:0 }}
          animate={inView ? { width:`${level}%` } : {}}
          transition={{ duration:1.1, delay, ease:[0.16,1,0.3,1] }}
          style={{
            height:"100%", borderRadius:2,
            background: level >= 85
              ? `linear-gradient(90deg, ${R}, rgba(232,50,60,0.6))`
              : `linear-gradient(90deg, rgba(232,50,60,0.8), rgba(232,50,60,0.4))`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" style={{ padding: "8rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Section Background Image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0, opacity: "var(--section-bg-opacity)" as any }}>
        <Image
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200"
          alt=""
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          sizes="100vw"
        />
      </div>

      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── Header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity:0, y:40 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.7 }}
          style={{ marginBottom:"4rem" }}
        >
          <span style={{ fontSize:"0.68rem", color:R, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:FONT_HEAD }}>
            Technical Skills
          </span>
          <h2 style={{ fontFamily:FONT_HEAD, fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:700, color:W, letterSpacing:"-0.03em", marginTop:"0.6rem" }}>
            Stack &amp; <span style={{ color:R }}>Expertise</span>
          </h2>
        </motion.div>

        {/* ── Skill groups ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:"3rem" }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity:0, y:50, scale:0.95 }}
              animate={inView ? { opacity:1, y:0, scale:1 } : {}}
              transition={{ duration:0.7, delay:gi*0.15, ease:[0.16,1,0.3,1] }}
            >
              {/* Group pill */}
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"0.45rem",
                fontFamily:FONT_HEAD, fontSize:"0.72rem", fontWeight:600,
                color:R, letterSpacing:"0.1em", textTransform:"uppercase",
                background:`rgba(232,50,60,0.1)`, border:`1px solid rgba(232,50,60,0.22)`,
                borderRadius:999, padding:"0.28rem 0.85rem", marginBottom:"1.75rem",
              }}>
                <group.Icon size={12} strokeWidth={2} /> {group.label}
              </div>

              {group.items.map((item, i) => (
                <SkillBar key={item.name} name={item.name} level={item.level} delay={gi*0.12 + i*0.08} Icon={item.Icon} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* ── Tools ── */}
        <motion.div
          initial={{ opacity:0 }}
          animate={inView ? { opacity:1 } : {}}
          transition={{ delay:0.8 }}
          style={{ marginTop:"5rem", paddingTop:"3rem", borderTop:`1px solid var(--border)` }}
        >
          <p style={{ fontSize:"0.68rem", color:WD, letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"1.25rem", fontFamily:FONT_HEAD }}>
            Tools &amp; Environment
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
            {tools.map(({ name, Icon }) => (
              <span key={name}
                style={{
                  display:"inline-flex", alignItems:"center", gap:"0.4rem",
                  fontSize:"0.8rem", color:WD,
                   background:"var(--surface)",
                  border:"1px solid var(--border)",
                  borderRadius:8, padding:"0.35rem 0.9rem",
                  fontFamily:FONT_BODY, cursor:"default",
                  transition:"color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color=W; e.currentTarget.style.borderColor=`rgba(232,50,60,0.35)`; }}
                onMouseLeave={e => { e.currentTarget.style.color=WD; e.currentTarget.style.borderColor="var(--border)"; }}
              >
                <Icon size={12} color={R} /> {name}
              </span>
            ))}
          </div>

          {/* ── Languages ── */}
          <div style={{ marginTop:"2rem", display:"flex", gap:"0.75rem", flexWrap:"wrap" }}>
            {languages.map(({ name, note, Icon }) => (
              <div key={name} style={{
                display:"inline-flex", alignItems:"center", gap:"0.55rem",
                padding:"0.6rem 1.2rem",
                background:`rgba(232,50,60,0.07)`,
                border:`1px solid rgba(232,50,60,0.2)`,
                borderRadius:12,
              }}>
                <Icon size={16} color={R} strokeWidth={2} />
                <div>
                  <div style={{ fontSize:"0.82rem", fontWeight:600, color:W, fontFamily:FONT_HEAD }}>{name}</div>
                  <div style={{ fontSize:"0.65rem", color:WD, fontFamily:FONT_BODY }}>{note}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
