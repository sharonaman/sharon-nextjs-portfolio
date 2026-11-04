"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetTilt() { x.set(0); y.set(0); }

  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <span className="eyebrow-line" /> CLOUD INFRASTRUCTURE · AUTOMATION · DELIVERY
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
          Sharon<br /><span>Aman.</span>
        </motion.h1>
        <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
          DevOps Engineer <span className="role-divider">/</span> Cloud &amp; Automation
        </motion.p>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          {profile.summary}
        </motion.p>
        <motion.div className="hero-buttons" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.68 }}>
          <a className="button button-primary" href="#projects">Explore projects <ArrowDown size={15} /></a>
          <a className="button button-outline" href="/documents/Sharonaman_Cloud_DevOps.pdf" target="_blank" rel="noreferrer">
            Download CV <Download size={15} />
          </a>
        </motion.div>
        <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
          <span><i className="status-dot" /> {profile.availability}</span>
          <span><MapPin size={13} /> {profile.location}</span>
        </motion.div>
      </div>

      <div className="hero-visual" onMouseMove={handleMove} onMouseLeave={resetTilt}>
        <div className="hero-glow" />
        <motion.div className="portrait-card" style={{ rotateX, rotateY, transformPerspective: 1100 }}>
          <Image src="/images/sharon-aman-ai-portrait.png" alt="Professional AI-generated portrait of Sharon Aman" fill priority sizes="(max-width: 800px) 80vw, 390px" className="portrait-image" />
          <div className="portrait-shade" />
          <div className="portrait-caption"><span>SHARON AMAN</span><small>DEVOPS ENGINEER</small></div>
        </motion.div>
        <motion.div className="float-chip chip-cloud" animate={{ y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <span className="chip-icon"><Sparkles size={15} /></span><span><b>Azure · AWS</b><small>Cloud platforms</small></span>
        </motion.div>
        <motion.div className="float-chip chip-pipeline" animate={{ y: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
          <span className="chip-icon">⌘</span><span><b>CI/CD · IaC</b><small>Automation &amp; delivery</small></span>
        </motion.div>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      </div>
    </section>
  );
}
