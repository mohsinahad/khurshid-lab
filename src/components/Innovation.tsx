"use client";

import { Sparkles, Github, ArrowUpRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const REPO_URL = "https://github.com/mohsinahad/liver-cancer-splicing-survival";

export default function Innovation() {
  return (
    <section
      id="ai-research"
      className="relative py-20 bg-primary-dark overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] h-[70%] w-[50%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] h-[70%] w-[50%] rounded-full bg-teal/15 blur-[120px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60 backdrop-blur-sm">
              <Sparkles size={12} className="text-teal" />
              AI-Powered Research
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              At the Frontier of{" "}
              <span className="gradient-text">AI in Academia</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              We treat AI as a genuine research partner — accelerating data
              analysis and hypothesis generation so a wet-lab team can take on
              computational questions directly.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-12 max-w-2xl">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-2.5 py-0.5 text-[11px] font-semibold text-teal-light">
                  <Github size={11} />
                  Public · Open source
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-white/30 transition-colors group-hover:text-white/70"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                Liver-Cancer Splicing &amp; Survival
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                An open-source study linking alternative splicing to protein
                levels and patient survival, built end-to-end with
                Anthropic&apos;s Claude Science on the Researcher Track.
              </p>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
