"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = "premrna" | "splicing" | "mrna";

const STAGE_DURATIONS: Record<Stage, number> = {
  premrna: 3000,
  splicing: 2500,
  mrna: 3000,
};

const STAGE_LABELS: Record<Stage, string> = {
  premrna: "pre-mRNA",
  splicing: "Splicing in Progress",
  mrna: "Mature mRNA",
};

const STAGE_DESCS: Record<Stage, string> = {
  premrna:
    "Newly transcribed pre-mRNA contains both exons (coding sequences) and introns (non-coding sequences).",
  splicing:
    "The spliceosome assembles at splice sites, forming a lariat structure to excise each intron.",
  mrna: "Introns removed. Exons ligated — mature mRNA is ready for nuclear export and translation.",
};

const NEXT: Record<Stage, Stage> = {
  premrna: "splicing",
  splicing: "mrna",
  mrna: "premrna",
};

type Block =
  | { kind: "exon"; id: string; label: string; color: string }
  | { kind: "intron"; id: string; label: string };

const ALL: Block[] = [
  { kind: "exon", id: "e1", label: "Exon 1", color: "#6366f1" },
  { kind: "intron", id: "i1", label: "Intron 1" },
  { kind: "exon", id: "e2", label: "Exon 2", color: "#14b8a6" },
  { kind: "intron", id: "i2", label: "Intron 2" },
  { kind: "exon", id: "e3", label: "Exon 3", color: "#f59e0b" },
];

const STAGES: Stage[] = ["premrna", "splicing", "mrna"];

export default function SplicingDiagram() {
  const [stage, setStage] = useState<Stage>("premrna");

  useEffect(() => {
    const timer = setTimeout(
      () => setStage((s) => NEXT[s]),
      STAGE_DURATIONS[stage]
    );
    return () => clearTimeout(timer);
  }, [stage]);

  const visible =
    stage === "mrna" ? ALL.filter((b) => b.kind === "exon") : ALL;

  return (
    <div className="rounded-2xl border border-border bg-white px-6 py-5 shadow-sm">
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-4">
        {STAGES.map((s) => (
          <div
            key={s}
            className="h-1 flex-1 rounded-full transition-colors duration-500"
            style={{ backgroundColor: s === stage ? "#6366f1" : "#e2e8f0" }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={stage}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.25 }}
            className="text-sm font-semibold text-accent"
          >
            {STAGE_LABELS[stage]}
          </motion.span>
        </AnimatePresence>
        {stage === "splicing" && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="text-[11px] text-text-light"
          >
            Spliceosome active
          </motion.span>
        )}
      </div>

      {/* Block visualization */}
      <div className="flex items-center justify-center gap-1.5 min-h-[52px] overflow-visible py-5">
        <span className="shrink-0 font-mono text-xs text-text-light">5′</span>
        <div className="h-px w-3 shrink-0 bg-slate-300" />

        <AnimatePresence mode="popLayout">
          {visible.map((block) =>
            block.kind === "exon" ? (
              <motion.div
                key={block.id}
                layout
                layoutId={block.id}
                className="flex h-11 w-[68px] shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: block.color }}
                transition={{
                  layout: { type: "spring", damping: 22, stiffness: 200 },
                }}
              >
                {block.label}
              </motion.div>
            ) : (
              <motion.div
                key={block.id}
                layout
                className="flex h-9 w-[76px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-slate-300 bg-slate-50 text-[10px] font-medium text-slate-400"
                initial={{ opacity: 0, y: -16 }}
                animate={{
                  opacity: 1,
                  y: stage === "splicing" ? -14 : 0,
                }}
                exit={{ opacity: 0, y: -48, scale: 0.75 }}
                transition={{ duration: 0.5 }}
              >
                {block.label}
              </motion.div>
            )
          )}
        </AnimatePresence>

        <div className="h-px w-3 shrink-0 bg-slate-300" />
        <span className="shrink-0 font-mono text-xs text-text-light">3′</span>
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={stage}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="mt-1 text-center text-xs text-text-muted leading-relaxed"
        >
          {STAGE_DESCS[stage]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
