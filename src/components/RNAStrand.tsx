"use client";

import { motion } from "framer-motion";

const BASE_COLOR: Record<string, string> = {
  A: "#6366f1",
  U: "#14b8a6",
  G: "#f59e0b",
  C: "#a78bfa",
};

const SEQ1 = ["A","U","G","C","A","G","U","C","G","A","U","G","C","U","A","G","C","A","U","G","C","G","U","A","C","U","G","A","U","C","A","U"];
const SEQ2 = ["G","C","U","A","G","C","A","U","G","C","U","A","G","U","C","A","G","C","U","A","G","C","A","U","G","C","U","A","G","C","U","G"];

const SPACING = 30;
const NODE_R = 8;

function StrandTrack({
  sequence,
  duration,
  yCenter = 35,
  amplitude = 12,
}: {
  sequence: string[];
  duration: number;
  yCenter?: number;
  amplitude?: number;
}) {
  const count = sequence.length;
  const totalWidth = count * SPACING;
  const doubled = [...sequence, ...sequence];
  const round2 = (n: number) => Math.round(n * 100) / 100;

  return (
    <motion.div
      className="absolute top-0 left-0 h-full"
      style={{ width: totalWidth * 2 }}
      animate={{ x: [0, -totalWidth] }}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      <svg width={totalWidth * 2} height={70} fill="none">
        {doubled.map((base, i) => {
          const x = i * SPACING + SPACING / 2;
          const cy = round2(yCenter + Math.sin((i / count) * Math.PI * 4) * amplitude);
          const prevX = (i - 1) * SPACING + SPACING / 2;
          const prevCy = round2(
            yCenter + Math.sin(((i - 1) / count) * Math.PI * 4) * amplitude
          );

          return (
            <g key={i}>
              {i > 0 && i !== count && (
                <line
                  x1={prevX}
                  y1={prevCy}
                  x2={x}
                  y2={cy}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                />
              )}
              <circle
                cx={x}
                cy={cy}
                r={NODE_R}
                fill={BASE_COLOR[base] ?? "#6366f1"}
                opacity="0.75"
              />
              <text
                x={x}
                y={cy + 4}
                textAnchor="middle"
                fill="white"
                fontSize="8"
                fontWeight="700"
                fontFamily="monospace"
              >
                {base}
              </text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}

export default function RNAStrand() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[70px] overflow-hidden pointer-events-none opacity-[0.18]">
        <StrandTrack sequence={SEQ1} duration={28} />
      </div>
      <div className="absolute bottom-16 left-0 right-0 h-[70px] overflow-hidden pointer-events-none opacity-[0.14]">
        <StrandTrack sequence={SEQ2} duration={22} yCenter={35} amplitude={10} />
      </div>
    </>
  );
}
