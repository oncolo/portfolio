"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

const RED = "#E8323C";
const W  = "var(--white)";
const WD = "var(--white-70)";
const FONT_HEAD = "'Space Grotesk', sans-serif";
const FONT_BODY = "'Inter', sans-serif";

const TelegramIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <path d="M21.93 3.24L2.35 10.9c-1.3.52-1.29 1.26-.24 1.58l4.98 1.56 11.53-7.28c.54-.33 1.04-.15.63.21L8.39 16.4l-.37 5.17c.54 0 .78-.25 1.08-.54l2.59-2.52 5.08 3.76c.94.52 1.61.25 1.84-.87l3.33-15.7c.34-1.36-.52-1.97-1.05-1.66z" fill="#E8323C"/>
  </svg>
);

const contactInfo = [
  { label: "Phone",    value: "+251 960 277 455",    href: "tel:+251960277455",          Icon: () => <Phone size={18} color={RED} /> },
  { label: "Email",    value: "oysaoncolo3@gmail.com", href: "mailto:oysaoncolo3@gmail.com", Icon: () => <Mail size={18} color={RED} /> },
  { label: "Telegram", value: "@oncolo1226",           href: "https://t.me/oncolo1226",    Icon: TelegramIcon },
];

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const [sent, setSent]   = useState(false);
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "0.875rem 1.25rem",
    color: "var(--white)",
    fontSize: "0.95rem",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "8rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Section Background Image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0, opacity: "var(--section-bg-opacity)" as any }}>
        <Image
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200"
          alt=""
          fill
          style={{ objectFit: "cover", filter: "grayscale(100%)" }}
          sizes="100vw"
        />
      </div>

      {/* bg glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 800, height: 600, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${RED}08 0%, transparent 70%)`,
        pointerEvents: "none", zIndex: 0
      }} />

      <div ref={ref} style={{ maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span style={{ fontSize: "0.7rem", color: RED, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
            Contact
          </span>
          <h2 style={{
            fontFamily: "'Syne', 'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
            color: "var(--white)", letterSpacing: "-0.04em",
            marginTop: "0.75rem", lineHeight: 1.05,
          }}>
            Got a project?<br />
            <span style={{ color: RED }}>Let&apos;s build it.</span>
          </h2>
          <p style={{ color: "#4A4A6A", marginTop: "1.25rem", lineHeight: 1.7, fontSize: "0.95rem" }}>
            Available for freelance work and full-time roles. I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Contact info pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
        >
          {contactInfo.map(info => (
            <a
              key={info.label}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: "0.65rem",
                padding: "0.75rem 1.5rem",
                background: "rgba(232,50,60,0.07)",
                border: "1px solid rgba(232,50,60,0.2)",
                borderRadius: 14,
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background     = "rgba(232,50,60,0.12)";
                e.currentTarget.style.borderColor    = "rgba(232,50,60,0.4)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background     = "rgba(232,50,60,0.07)";
                e.currentTarget.style.borderColor    = "rgba(232,50,60,0.2)";
              }}
            >
              <info.Icon />
              <div>
                <div style={{ fontSize: "0.6rem", color: "#4A4A6A", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {info.label}
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--white)", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                  {info.value}
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form or success */}
        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: "center", padding: "4rem 2rem",
              background: `rgba(232,50,60,0.07)`,
              border: `1px solid rgba(232,50,60,0.22)`,
              borderRadius: 20,
            }}
          >
            <CheckCircle size={48} color={RED} style={{ margin: "0 auto 1rem" }} />
            <h3 style={{ fontFamily: "'Syne', sans-serif", color: W, fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Message Sent!
            </h3>
            <p style={{ color: WD }}>I&apos;ll reach back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Name + Email row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-row">
              {[
                { key: "name",  label: "Your name",    type: "text",  placeholder: "Abebe Girma" },
                { key: "email", label: "Email address", type: "email", placeholder: "abebe@example.com" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: "0.72rem", color: "#4A4A6A", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "'Space Grotesk', sans-serif" }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={inputStyle}
                    onFocus={e  => { e.target.style.borderColor = `rgba(232,50,60,0.5)`; }}
                    onBlur={e   => { e.target.style.borderColor = "var(--border)"; }}
                    suppressHydrationWarning
                  />
                </div>
              ))}
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.72rem", color: "#4A4A6A", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "0.5rem", fontFamily: "'Space Grotesk', sans-serif" }}>
                Message
              </label>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e  => { e.target.style.borderColor = `rgba(232,50,60,0.5)`; }}
                onBlur={e   => { e.target.style.borderColor = "var(--border)"; }}
              />
            </div>

            {error && (
              <p style={{ color: "#E8323C", fontSize: "0.85rem", fontFamily: FONT_BODY, textAlign: "center" }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              suppressHydrationWarning
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                background: loading ? "rgba(232,50,60,0.6)" : RED, color: "#fff",
                padding: "1rem 2rem", borderRadius: 999,
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem",
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                boxShadow: `0 0 40px ${RED}44`, marginTop: "0.25rem",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { if(!loading){ e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 40px ${RED}66`; }}}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 0 40px ${RED}44`; }}
            >
              <Send size={16} /> {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </div>

      <style>{`
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
