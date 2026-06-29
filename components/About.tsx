"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Smartphone, Bug, Zap, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const R  = "#E8323C";
const W  = "var(--white)";
const WD = "var(--white-70)";
const FONT_HEAD = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const timeline = [
  {
    year: "Now",
    role: "Freelance Software Developer / QA Tester",
    company: "Self-employed · Remote",
    desc: "Building responsive web apps with React & Next.js. Developing backend APIs and databases with PHP & SQL. Performing full QA cycles on web and mobile applications.",
    Icon: Briefcase,
  },
  {
    year: "2024",
    role: "Diploma Graduate",
    company: "General Wingate Polytechnic College",
    desc: "Completed Diploma in Web Development and Database Administration — gaining hands-on skills in full-stack development, SQL database management, and software QA.",
    Icon: GraduationCap,
  },
];

const values = [
  { label: "Quality First",  desc: "Every app tested thoroughly before delivery.",     Icon: CheckCircle2 },
  { label: "Responsive",     desc: "Pixel-perfect on mobile, tablet and desktop.",      Icon: Smartphone   },
  { label: "Bug-free Code",  desc: "Clear bug reports and improvement suggestions.",    Icon: Bug          },
  { label: "Performance",    desc: "Fast, smooth UI/UX and optimised queries.",         Icon: Zap          },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} style={{ padding:"8rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0, opacity: "var(--section-bg-opacity)" as any }}>
        <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200" alt="" fill style={{ objectFit: "cover", filter: "grayscale(100%)" }} sizes="100vw" />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="about-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem", alignItems:"start" }}>

          {/* LEFT */}
          <motion.div
            initial={{ opacity:0, x:-60, scale:0.95 }}
            animate={inView ? { opacity:1, x:0, scale:1 } : {}}
            transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}
          >
            <motion.span initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.1 }}
              style={{ fontSize:"0.68rem", color:R, letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:FONT_HEAD, fontWeight:600 }}>
              About Me
            </motion.span>

            <motion.h2 initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.15, duration:0.7 }}
              style={{ fontFamily:FONT_HEAD, fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:W, letterSpacing:"-0.03em", marginTop:"0.75rem", marginBottom:"1.5rem", lineHeight:1.1 }}>
              Code. Test. <span style={{ color:R }}>Deliver.</span>
            </motion.h2>

            <motion.p initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.2, duration:0.7 }}
              style={{ color:WD, lineHeight:1.8, marginBottom:"1.25rem", fontSize:"0.95rem", fontFamily:FONT_BODY }}>
              I&apos;m <strong style={{ color:W, fontFamily:FONT_HEAD }}>Oncolo Oysa</strong> — a Web Developer and QA Tester with a Diploma in Web Development and Database Administration from General Wingate Polytechnic College.
            </motion.p>

            <motion.p initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.3, duration:0.7 }}
              style={{ color:WD, lineHeight:1.8, marginBottom:"2.5rem", fontSize:"0.95rem", fontFamily:FONT_BODY }}>
              I specialize in building responsive web applications using HTML5, CSS3, JavaScript, React, and Next.js, with backend support through PHP and SQL. Equally passionate about quality assurance — ensuring every product works reliably.
            </motion.p>

            {values.map(({ label, desc, Icon }, i) => (
              <motion.div key={label}
                initial={{ opacity:0, x:-24 }} animate={inView?{opacity:1,x:0}:{}}
                transition={{ delay:0.35 + i*0.09, duration:0.6, ease:[0.16,1,0.3,1] }}
                style={{ display:"flex", gap:"0.85rem", marginBottom:"0.75rem", padding:"0.85rem 1.2rem",
                  background:"var(--surface)", border:"1px solid var(--border)", borderRadius:12, alignItems:"flex-start" }}>
                <div style={{ flexShrink:0, width:32, height:32, borderRadius:8, background:`rgba(232,50,60,0.12)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Icon size={15} color={R}/>
                </div>
                <div>
                  <div style={{ fontFamily:FONT_HEAD, fontWeight:600, color:W, fontSize:"0.875rem", marginBottom:"0.15rem" }}>{label}</div>
                  <div style={{ fontSize:"0.78rem", color:WD, fontFamily:FONT_BODY }}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity:0, x:60, scale:0.95 }}
            animate={inView ? { opacity:1, x:0, scale:1 } : {}}
            transition={{ delay:0.15, duration:0.8, ease:[0.16,1,0.3,1] }}
          >
            <motion.p initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.3 }}
              style={{ fontSize:"0.68rem", color:WD, letterSpacing:"0.14em", textTransform:"uppercase", fontFamily:FONT_HEAD, marginBottom:"2rem", fontWeight:600 }}>
              Career &amp; Education
            </motion.p>

            {timeline.map(({ year, role, company, desc, Icon }, i) => (
              <motion.div key={year}
                initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}}
                transition={{ delay:0.4 + i*0.14, duration:0.7 }}
                style={{ display:"flex", gap:"1.25rem", marginBottom:"2.5rem", position:"relative" }}>
                {i < timeline.length - 1 && (
                  <div style={{ position:"absolute", left:"1.6rem", top:"2.8rem", bottom:"-2.5rem", width:1, background:`rgba(232,50,60,0.2)` }} />
                )}
                <div style={{ flexShrink:0, width:34, height:34, borderRadius:"50%",
                  background: i===0 ? R : `rgba(232,50,60,0.15)`, border:`2px solid ${R}`,
                  boxShadow: i===0 ? `0 0 14px rgba(232,50,60,0.5)` : "none",
                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <Icon size={15} color={i===0?W:R}/>
                </div>
                <div>
                  <div style={{ fontSize:"0.65rem", color:R, fontFamily:FONT_HEAD, fontWeight:700, letterSpacing:"0.06em", marginBottom:"0.2rem" }}>{year}</div>
                  <div style={{ fontFamily:FONT_HEAD, fontWeight:600, color:W, fontSize:"0.95rem", marginBottom:"0.1rem" }}>{role}</div>
                  <div style={{ fontSize:"0.78rem", color:R, marginBottom:"0.4rem", fontFamily:FONT_BODY }}>{company}</div>
                  <div style={{ fontSize:"0.83rem", color:WD, lineHeight:1.65, fontFamily:FONT_BODY }}>{desc}</div>
                </div>
              </motion.div>
            ))}

            <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.75 }}
              style={{ padding:"1.5rem", background:`rgba(232,50,60,0.06)`, border:`1px solid rgba(232,50,60,0.2)`, borderRadius:16 }}>
              <div style={{ display:"flex", gap:"0.85rem", alignItems:"flex-start" }}>
                <div style={{ flexShrink:0, width:40, height:40, borderRadius:10, background:`rgba(232,50,60,0.15)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <GraduationCap size={20} color={R}/>
                </div>
                <div>
                  <div style={{ fontFamily:FONT_HEAD, fontWeight:700, color:W, fontSize:"1rem", marginBottom:"0.25rem" }}>
                    Diploma in Web Development<br/>&amp; Database Administration
                  </div>
                  <div style={{ fontSize:"0.8rem", color:R, marginBottom:"0.25rem", fontFamily:FONT_BODY }}>General Wingate Polytechnic College</div>
                  <div style={{ fontSize:"0.72rem", color:WD, fontFamily:FONT_BODY }}>Frontend · Backend · Database · QA</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
