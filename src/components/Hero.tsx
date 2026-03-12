"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import RNAStrand from "./RNAStrand";

function FloatingCell({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 35%, rgba(99, 102, 241, 0.25), rgba(20, 184, 166, 0.1) 60%, transparent 70%)`,
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      animate={{
        y: [-10, 15, -10],
        x: [-5, 8, -5],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Nucleus */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.35,
          height: size * 0.35,
          top: "30%",
          left: "30%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4), rgba(99, 102, 241, 0.1))",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[60%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[20%] h-[80%] w-[60%] rounded-full bg-teal/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40%] w-[40%] rounded-full bg-accent/10 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* RNA strand animations */}
      <RNAStrand />

      {/* Floating cells */}
      <FloatingCell delay={0} x="10%" y="20%" size={60} />
      <FloatingCell delay={1.5} x="80%" y="15%" size={45} />
      <FloatingCell delay={0.8} x="70%" y="65%" size={55} />
      <FloatingCell delay={2} x="15%" y="70%" size={40} />
      <FloatingCell delay={1} x="50%" y="80%" size={35} />
      <FloatingCell delay={0.5} x="85%" y="45%" size={50} />

      {/* Animated DNA strand across background */}
      <div className="absolute left-[8%] top-[10%] bottom-[10%] w-8 opacity-20 pointer-events-none">
        <svg viewBox="0 0 30 500" className="h-full w-full" fill="none">
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 25 + 12;
            const x1 = Math.round((5 + Math.sin((i / 20) * Math.PI * 3) * 10) * 100) / 100;
            const x2 = Math.round((25 - Math.sin((i / 20) * Math.PI * 3) * 10) * 100) / 100;
            return (
              <g key={i}>
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="white" strokeWidth="0.5" strokeDasharray="1 2" />
                <circle cx={x1} cy={y} r="1.5" fill={i % 2 === 0 ? "#6366f1" : "#14b8a6"} />
                <circle cx={x2} cy={y} r="1.5" fill={i % 2 === 0 ? "#14b8a6" : "#6366f1"} />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="absolute right-[8%] top-[15%] bottom-[5%] w-8 opacity-15 pointer-events-none">
        <svg viewBox="0 0 30 500" className="h-full w-full" fill="none">
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 25 + 12;
            const x1 = Math.round((5 + Math.cos((i / 20) * Math.PI * 3) * 10) * 100) / 100;
            const x2 = Math.round((25 - Math.cos((i / 20) * Math.PI * 3) * 10) * 100) / 100;
            return (
              <g key={i}>
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="white" strokeWidth="0.5" strokeDasharray="1 2" />
                <circle cx={x1} cy={y} r="1.5" fill={i % 2 === 0 ? "#f59e0b" : "#ef4444"} />
                <circle cx={x2} cy={y} r="1.5" fill={i % 2 === 0 ? "#ef4444" : "#f59e0b"} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/60 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          Sanford Research &middot; Sioux Falls, SD
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Khurshid{" "}
          <span className="gradient-text">Lab</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl"
        >
          Investigating dysregulated alternative splicing in cancer &mdash;
          identifying differentially expressed isoforms and the RNA-binding
          proteins controlling them to advance precision oncology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#research"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-teal px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02]"
          >
            Explore Our Research
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-20 flex max-w-lg justify-center gap-12 sm:gap-16"
        >
          {[
            { value: "10+", label: "Publications" },
            { value: "3", label: "Research Areas" },
            { value: "12+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/40 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
