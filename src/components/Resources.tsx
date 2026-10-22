"use client";

import {
  FileText,
  Code2,
  Database,
  ArrowUpRight,
  Mail,
  type LucideIcon,
} from "lucide-react";
import AnimateIn from "./AnimateIn";

type Category = "Protocol" | "Code" | "Dataset";

interface Resource {
  icon: LucideIcon;
  category: Category;
  title: string;
  description: string;
  href: string;
  linkText: string;
  external: boolean;
}

const CATEGORY_COLORS: Record<Category, string> = {
  Protocol: "bg-accent/10 text-accent",
  Code: "bg-teal/10 text-teal-600",
  Dataset: "bg-violet-50 text-violet-600",
};

const resources: Resource[] = [
  {
    icon: FileText,
    category: "Protocol",
    title: "SSO design workflow for splice modulation",
    description:
      "Step-by-step protocol for designing splice-switching oligonucleotides against a target exon, from sequence selection to validation.",
    href: "#", // TODO: link protocols.io entry when published
    linkText: "Coming soon",
    external: false,
  },
  {
    icon: Code2,
    category: "Code",
    title: "Splicing-analysis pipeline",
    description:
      "Bioinformatics pipeline for detecting and quantifying alternative splicing events from short- and long-read RNA-seq.",
    href: "#", // TODO: link GitHub repository when public
    linkText: "Coming soon",
    external: false,
  },
  {
    icon: Database,
    category: "Dataset",
    title: "Pediatric cancer splicing datasets",
    description:
      "Processed splicing and RNA-binding-protein datasets from pediatric tumor analyses, for reuse by the community.",
    href: "#", // TODO: link GEO / SRA accession when deposited
    linkText: "Coming soon",
    external: false,
  },
];

export default function Resources() {
  return (
    <section id="resources" className="relative py-16 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <FileText size={12} />
              Protocols & Resources
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Tools We{" "}
              <span className="gradient-text">Share</span>
            </h2>
            <p className="mt-6 text-base text-text-muted leading-relaxed">
              We are preparing protocols, analysis code, and datasets for open
              use. Links will go live as each is published — in the meantime,
              reach out and we are happy to share directly.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {resources.map((res, i) => (
            <AnimateIn key={res.title} delay={0.15 * i} className="flex">
              <a
                href={res.href}
                target={res.external ? "_blank" : undefined}
                rel={res.external ? "noopener noreferrer" : undefined}
                className={`group card-hover relative flex w-full flex-col rounded-3xl border border-border bg-white p-8 shadow-sm ${
                  res.external ? "" : "pointer-events-none"
                }`}
                aria-disabled={res.external ? undefined : true}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-teal text-white shadow-lg">
                    <res.icon size={20} />
                  </div>
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[res.category]}`}
                  >
                    {res.category}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold text-primary leading-snug">
                  {res.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {res.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-text-light">
                  {res.linkText}
                  {res.external && <ArrowUpRight size={11} />}
                </span>
              </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-text-muted">
              Need a protocol or dataset now? We&apos;re glad to share ahead of
              publication.
            </p>
            <a
              href="mailto:safiya.khurshid@sanfordhealth.org"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-teal px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Mail size={14} />
              Request a resource
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
