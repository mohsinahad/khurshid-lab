"use client";

import { motion } from "framer-motion";

interface DNAHelixProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function DNAHelix({
  className = "",
  color = "currentColor",
  opacity = 0.15,
}: DNAHelixProps) {
  const pairs = 12;
  const height = 400;
  const spacing = height / pairs;

  return (
    <svg
      viewBox={`0 0 120 ${height}`}
      className={className}
      fill="none"
      style={{ opacity }}
    >
      {Array.from({ length: pairs }).map((_, i) => {
        const y = i * spacing + spacing / 2;
        const phase = (i / pairs) * Math.PI * 2;
        const x1 = Math.round((30 + Math.sin(phase) * 25) * 100) / 100;
        const x2 = Math.round((90 - Math.sin(phase) * 25) * 100) / 100;

        return (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            {/* Base pair connector */}
            <motion.line
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke={color}
              strokeWidth="1"
              strokeDasharray="2 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
            />
            {/* Left nucleotide */}
            <motion.circle
              cx={x1}
              cy={y}
              r="3"
              fill={i % 2 === 0 ? "#6366f1" : "#14b8a6"}
              animate={{
                cx: [x1, Math.round((x1 + Math.cos(phase) * 2) * 100) / 100, x1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
            {/* Right nucleotide */}
            <motion.circle
              cx={x2}
              cy={y}
              r="3"
              fill={i % 2 === 0 ? "#14b8a6" : "#6366f1"}
              animate={{
                cx: [x2, Math.round((x2 - Math.cos(phase) * 2) * 100) / 100, x2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          </motion.g>
        );
      })}
      {/* Backbone strands */}
      <motion.path
        d={Array.from({ length: pairs })
          .map((_, i) => {
            const y = i * spacing + spacing / 2;
            const x = Math.round((30 + Math.sin((i / pairs) * Math.PI * 2) * 25) * 100) / 100;
            return `${i === 0 ? "M" : "S"} ${x},${y} ${x},${y}`;
          })
          .join(" ")}
        stroke={color}
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d={Array.from({ length: pairs })
          .map((_, i) => {
            const y = i * spacing + spacing / 2;
            const x = Math.round((90 - Math.sin((i / pairs) * Math.PI * 2) * 25) * 100) / 100;
            return `${i === 0 ? "M" : "S"} ${x},${y} ${x},${y}`;
          })
          .join(" ")}
        stroke={color}
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
      />
    </svg>
  );
}
