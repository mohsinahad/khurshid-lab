"use client";

import Image from "next/image";
import { BarChart3, FlaskConical, Atom } from "lucide-react";
import AnimateIn from "./AnimateIn";
import MoleculeAnimation from "./MoleculeAnimation";
import SplicingDiagram from "./SplicingDiagram";

const researchAreas = [
  {
    icon: BarChart3,
    number: "01",
    title: "Analyze Patient Data to Map the Splicing Landscape in Pediatric Cancer",
    description:
      "By leveraging publicly available short- and long-read sequencing data from pediatric cancer patient samples, we apply advanced bioinformatics tools to identify alternative splicing events and RNA-binding protein expression changes. This analysis reveals differentially spliced genes in tumors, which we further investigate in the lab to develop as potential therapeutic targets.",
    gradient: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/10",
    image: "/images/sequencing-pediatric-cancer.jpg",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Alternative Splicing Under Metabolic Starvation & Splice-Switching Oligonucleotides",
    description:
      "Tumor microenvironmental factors such as metabolic starvation and hypoxia can alter gene splicing, producing isoforms that may enhance tumorigenesis. Our objective is to identify these specific isoforms and design Splice Switching Oligonucleotides (SSOs) to target the pre-mRNA, aiming to restore normal splicing patterns and mitigate tumorigenic properties.",
    gradient: "from-accent to-blue-600",
    glow: "shadow-accent/10",
    image: "/images/splicing-tumor-cells.jpg",
  },
  {
    icon: Atom,
    number: "03",
    title: "Investigate the Role of RNA-Binding Proteins in Metabolic Starvation",
    description:
      "Metabolic starvation modifies the expression, phosphorylation, and localization of RNA-binding proteins, that influences alternative splicing and regulates multiple aspects of tumorigenesis. Our goal is to analyze and understand these RBP dynamics and map their binding patterns on pre-mRNA in both control and metabolically starved tumor environments.",
    gradient: "from-teal to-emerald-500",
    glow: "shadow-teal/10",
    image: "/images/rna-binding.jpg",
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative molecule */}
      <div className="absolute left-4 top-32 w-20 pointer-events-none opacity-40">
        <MoleculeAnimation />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — left aligned */}
        <AnimateIn>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Research Focus
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Decoding Cancer Through{" "}
              <span className="gradient-text">RNA Biology</span>
            </h2>
            <p className="mt-6 text-base text-text-muted leading-relaxed">
              Cancer doesn&apos;t just alter gene expression; it rewires alternative
              splicing of RNA. Tumor microenvironmental stress such as metabolic
              starvation drives alternative splicing changes that fuel tumor growth,
              metastasis, and therapy resistance. Our lab deciphers how these stresses
              reshape splicing programs by identifying the isoforms that emerge and the
              RNA-binding proteins that control them, uncovering new mechanisms and
              therapeutic targets in aggressive cancers.
            </p>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              By leveraging cutting-edge short read and long-read sequencing in
              metabolically stressed cells and patient samples, we aim to map splicing
              regulation with unprecedented precision, opening new avenues for targeted
              therapies and transforming cancer treatment.
            </p>
          </div>
        </AnimateIn>

        {/* Interactive splicing diagram */}
        <AnimateIn delay={0.2}>
          <div className="mt-12 mb-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent/60">
              Interactive — Alternative Splicing
            </p>
            <SplicingDiagram />
          </div>
        </AnimateIn>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 items-stretch">
          {researchAreas.map((area, i) => (
            <AnimateIn key={area.title} delay={0.15 * i} className="flex">
              <div
                className={`group card-hover relative flex flex-col rounded-3xl border border-border bg-white overflow-hidden shadow-xl ${area.glow}`}
              >
                {/* Research figure */}
                <div className="relative h-48 w-full overflow-hidden bg-white">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                <div className="flex flex-col flex-1 p-8 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-surface-alt select-none">
                      {area.number}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white shadow-lg`}
                    >
                      <area.icon size={18} />
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-primary leading-snug">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {area.description}
                  </p>

                  <div
                    className={`mt-6 h-0.5 w-12 rounded-full bg-gradient-to-r ${area.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
