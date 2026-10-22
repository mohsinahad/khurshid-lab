"use client";

import { Dna, FlaskConical, Microscope, type LucideIcon } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface TechniqueCluster {
  icon: LucideIcon;
  title: string;
  gradient: string;
  blurb: string;
  items: string[];
}

const clusters: TechniqueCluster[] = [
  {
    icon: Dna,
    title: "Sequencing & Transcriptomics",
    gradient: "from-violet-500 to-purple-600",
    blurb:
      "Resolving the transcriptome at isoform-level detail to see how splicing is rewired in tumors.",
    items: [
      "Short-read RNA sequencing (Illumina)",
      "Long-read RNA sequencing",
      "Splicing-aware bioinformatics & isoform quantification",
      "RNA-binding protein expression profiling",
    ],
  },
  {
    icon: FlaskConical,
    title: "RNA & Splicing Biology",
    gradient: "from-accent to-blue-600",
    blurb:
      "Reading and rewriting pre-mRNA splicing to turn oncogenic isoforms back toward normal.",
    items: [
      "Splice-Switching Oligonucleotide (SSO) design",
      "AAVrh74.U7 snRNA splice-modulation delivery",
      "RNA-binding protein binding-site mapping",
      "RT-PCR & minigene splicing assays",
    ],
  },
  {
    icon: Microscope,
    title: "Cell & Disease Models",
    gradient: "from-teal to-emerald-500",
    blurb:
      "Recreating tumor-microenvironmental stress to study the splicing programs it drives.",
    items: [
      "Cancer cell culture (sarcoma & pediatric tumor lines)",
      "Metabolic-starvation & hypoxia stress models",
      "Patient tumor sequencing data",
    ],
  },
];

export default function Techniques() {
  return (
    <section id="techniques" className="relative py-16 bg-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <FlaskConical size={12} />
              Techniques & Equipment
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Methods at the{" "}
              <span className="gradient-text">Bench</span>
            </h2>
            <p className="mt-6 text-base text-text-muted leading-relaxed">
              Our questions span from patient-data analysis to the wet bench. We
              pair isoform-resolution sequencing with RNA-targeting chemistry and
              tumor-stress models to identify dysregulated splicing and act on it.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
          {clusters.map((cluster, i) => (
            <AnimateIn key={cluster.title} delay={0.15 * i} className="flex">
              <div className="group card-hover relative flex flex-col rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cluster.gradient} text-white shadow-lg`}
                >
                  <cluster.icon size={20} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-primary leading-snug">
                  {cluster.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {cluster.blurb}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {cluster.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-text-muted"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${cluster.gradient}`}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
