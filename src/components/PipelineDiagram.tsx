"use client";

import {
  Database,
  Scissors,
  HeartPulse,
  GitCompare,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface Stage {
  icon: LucideIcon;
  label: string;
  metric: string;
  detail: string;
  gradient: string;
}

const stages: Stage[] = [
  {
    icon: Database,
    label: "Public proteogenomics",
    metric: "2 cohorts",
    detail: "TCGA-LIHC (splicing, protein & survival) + CHCC-HBV deep proteome",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Scissors,
    label: "Splicing quantification",
    metric: "23,909 events",
    detail: "Dual-method — SUPPA2 + LeafCutter — for independent confirmation",
    gradient: "from-accent to-blue-600",
  },
  {
    icon: HeartPulse,
    label: "Survival modeling",
    metric: "382 hits",
    detail: "Cox proportional hazards, stage/age-adjusted, FDR < 0.05",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: GitCompare,
    label: "Cross-method concordance",
    metric: "90 genes",
    detail: "Reproducible across pipelines (hypergeometric p = 1.9×10⁻¹³)",
    gradient: "from-teal to-emerald-500",
  },
  {
    icon: ShieldCheck,
    label: "Protein validation",
    metric: "18 genes",
    detail: "Confirmed at protein level in the independent CHCC-HBV proteome",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Target,
    label: "Isoform switch only",
    metric: "8 genes",
    detail: "Prognostic with no change in total expression — e.g. FN1, CEACAM1",
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function PipelineDiagram() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stages.map((stage, i) => (
        <motion.li
          key={stage.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${stage.gradient} text-white shadow-lg`}
            >
              <stage.icon size={16} />
            </div>
            <span className="text-xs font-semibold tabular-nums text-white/25">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-3 text-lg font-bold text-white">{stage.metric}</p>
          <p className="mt-0.5 text-xs font-semibold text-white/70">
            {stage.label}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-white/45">
            {stage.detail}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
