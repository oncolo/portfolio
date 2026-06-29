"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Smartphone } from "lucide-react";
import Image from "next/image";

const FONT_HEAD = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";
const W = "var(--white)";
const WD = "var(--white-70)";

const projects = [
  {
    number: "01",
    title: "Zayno App",
    logo: "/logo/photo_2025-12-19_01-40-35.jpg",
    description:
      "Web and mobile application built as both Developer and QA Tester. Responsible for frontend development with React/Next.js, backend API integration, and full functional testing coverage including bug reporting and UI/UX review.",
    tags: ["React.js", "Next.js", "PHP", "SQL", "QA Testing"],
    year: "2024",
    role: "Developer / Tester",
    Icon: Rocket,
  },
  {
    number: "02",
    title: "Adyamat App",
    logo: "/logo/photo_2026-03-16_03-02-56.jpg",
    description:
      "Web and mobile application developed and tested end-to-end. Built responsive UI with HTML5/CSS3/JavaScript, managed database systems using SQL, and performed thorough mobile & web app testing with detailed bug documentation.",
    tags: ["HTML5", "CSS3", "JavaScript", "MySQL", "Mobile Testing"],
    year: "2024",
    role: "Developer / Tester",
    Icon: Smartphone,
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 24, padding: "2.75rem",
        position: "relative", overflow: "hidden",
        cursor: "default", minHeight: 340,
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
        transition: "border-color 0.3s, background-color 0.3s",
      }}
      whileHover={{ y: -5, borderColor: "rgba(232,50,60,0.35)" }}
    >
      {/* Glow blob */}
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 280, height: 280, borderRadius: "50%",
        background: `radial-gradient(circle, ${project.color}18 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Corner logo */}
      <div style={{
        position: "absolute", top: "1.75rem", right: "1.75rem",
        width: 52, height: 52, borderRadius: 12,
        overflow: "hidden", position: "absolute",
        border: "1px solid rgba(232,50,60,0.22)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
      }}>
        <Image src={project.logo} alt={project.title} fill style={{ objectFit: "cover" }} />
      </div>

      <div>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
          <span style={{ fontSize: "0.68rem", color: WD, fontFamily: FONT_HEAD, letterSpacing: "0.12em" }}>
            {project.number}
          </span>
          <span style={{
            fontSize: "0.65rem", color: "#E8323C",
            background: "rgba(232,50,60,0.1)", border: "1px solid rgba(232,50,60,0.25)",
            borderRadius: 999, padding: "0.2rem 0.65rem",
            fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.06em",
          }}>
            {project.role}
          </span>
        </div>

        <h3 style={{
          fontFamily: FONT_HEAD,
          fontSize: "2rem", fontWeight: 700,
          color: "var(--white)", letterSpacing: "-0.03em", marginBottom: "1rem",
          lineHeight: 1.1,
        }}>
          {project.title}
        </h3>
        <p style={{ color: WD, lineHeight: 1.75, fontSize: "0.9rem", maxWidth: 520, fontFamily: FONT_BODY }}>
          {project.description}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: "0.68rem", color: "#E8323C",
              background: "rgba(232,50,60,0.1)",
              border: "1px solid rgba(232,50,60,0.25)",
              borderRadius: 999, padding: "0.22rem 0.7rem",
              fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.04em",
            }}>
              {tag}
            </span>
          ))}
        </div>
        <span style={{ fontSize: "0.72rem", color: WD, fontFamily: FONT_BODY }}>
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="work" style={{ padding: "8rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Section Background Image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0, opacity: "var(--section-bg-opacity)" as any }}>
        <Image
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1200"
          alt=""
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          sizes="100vw"
        />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: "4rem" }}
      >
        <span style={{ fontSize: "0.68rem", color: "#E8323C",
          letterSpacing: "0.16em", textTransform: "uppercase",
          fontFamily: FONT_HEAD, fontWeight: 600,
        }}>
          Projects
        </span>
        <h2 style={{
          fontFamily: FONT_HEAD,
          fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700,
          color: "var(--white)", letterSpacing: "-0.03em",
          marginTop: "0.75rem", lineHeight: 1.05,
        }}>
          Apps I Built &amp;{" "}
          <span style={{ color: "#E8323C" }}>Tested</span>
        </h2>
        <p style={{ color: WD, marginTop: "1rem", maxWidth: 540, lineHeight: 1.7, fontSize: "0.95rem", fontFamily: FONT_BODY }}>
          Real-world web and mobile applications developed and quality-tested from the ground up.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", gap: "1.5rem" }}>
        {projects.map((p, i) => <ProjectCard key={p.number} project={p} index={i} />)}
      </div>

      {/* Experience highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{
          marginTop: "3rem",
          padding: "2rem 2.5rem",
          background: "rgba(232,50,60,0.05)",
          border: "1px solid rgba(232,50,60,0.18)",
          borderRadius: 20,
          display: "flex", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap",
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <span style={{ fontSize: "0.65rem", color: "#E8323C", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
            Experience
          </span>
          <h3 style={{ fontFamily: FONT_HEAD, fontWeight: 700, color: "var(--white)", fontSize: "1.25rem", marginTop: "0.3rem" }}>
            Freelance Software Developer / QA Tester
          </h3>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
          {[
            "Develop responsive web applications using React and Next.js",
            "Build backend APIs and database systems using PHP and SQL",
            "Perform functional testing for mobile and web applications",
            "Report bugs with clear documentation and improvement suggestions",
            "Ensure user-friendly UI/UX and smooth application performance",
          ].map(item => (
            <li key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.875rem", color: WD, lineHeight: 1.6, fontFamily: FONT_BODY }}>
              <span style={{ color: "#E8323C", flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      </div>
    </section>
  );
}
