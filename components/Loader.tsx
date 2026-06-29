"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.random() * 15 + 8;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.min(n, 100));
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#08080f",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}
        >
          {/* Soft red glow */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(232,50,60,0.08) 0%, transparent 70%)",
          }} />

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: 88, height: 88, borderRadius: "50%",
              overflow: "hidden", position: "relative",
              border: "2px solid rgba(232,50,60,0.35)",
              boxShadow: "0 0 0 6px rgba(232,50,60,0.06), 0 20px 60px rgba(0,0,0,0.5)",
              marginBottom: "1.25rem",
            }}
          >
            <Image
              src="/u/photo_2026-04-25_09-15-43.jpg"
              alt="Oncolo Oysa"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700, fontSize: "1.1rem",
              color: "#fff", letterSpacing: "-0.02em",
            }}>
              Oncolo <span style={{ color: "#E8323C" }}>Oysa</span>
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.58rem", color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.2em", textTransform: "uppercase",
              marginTop: "0.25rem",
            }}>
              Web Dev · QA Tester
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ width: 160 }}
          >
            <div style={{
              height: 1.5, background: "rgba(255,255,255,0.07)",
              borderRadius: 2, overflow: "hidden",
            }}>
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #E8323C, rgba(232,50,60,0.5))",
                  boxShadow: "0 0 8px rgba(232,50,60,0.6)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
