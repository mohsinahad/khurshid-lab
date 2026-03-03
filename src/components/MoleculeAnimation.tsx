"use client";

import { motion } from "framer-motion";

interface MoleculeAnimationProps {
  className?: string;
}

export default function MoleculeAnimation({ className = "" }: MoleculeAnimationProps) {
  const nodes = [
    { x: 60, y: 40, r: 6, color: "#6366f1", label: "A" },
    { x: 30, y: 80, r: 5, color: "#14b8a6", label: "U" },
    { x: 90, y: 80, r: 5, color: "#f59e0b", label: "G" },
    { x: 45, y: 130, r: 5, color: "#ef4444", label: "C" },
    { x: 75, y: 130, r: 5, color: "#6366f1", label: "A" },
    { x: 60, y: 170, r: 4, color: "#14b8a6", label: "U" },
    { x: 20, y: 50, r: 3, color: "#94a3b8", label: "" },
    { x: 100, y: 50, r: 3, color: "#94a3b8", label: "" },
    { x: 15, y: 120, r: 3, color: "#94a3b8", label: "" },
    { x: 105, y: 120, r: 3, color: "#94a3b8", label: "" },
  ];

  const bonds: [number, number][] = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5],
    [0, 6], [0, 7], [1, 8], [2, 9],
  ];

  return (
    <svg viewBox="0 0 120 200" className={className} fill="none">
      {/* Bonds */}
      {bonds.map(([a, b], i) => (
        <motion.line
          key={`bond-${i}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#94a3b8"
          strokeWidth="1"
          strokeOpacity={0.3}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        />
      ))}
      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.g key={`node-${i}`}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
            fillOpacity={0.8}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 200 }}
            animate={{
              cy: [node.y, node.y - 2, node.y + 2, node.y],
            }}
            // @ts-expect-error framer-motion transition override
            transition={{
              cy: {
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              delay: 0.3 + i * 0.05,
              type: "spring",
              stiffness: 200,
            }}
          />
          {node.label && (
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="5"
              fontWeight="bold"
              fill="white"
            >
              {node.label}
            </text>
          )}
        </motion.g>
      ))}
    </svg>
  );
}
