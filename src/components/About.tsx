"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Microscope, Dna, FlaskConical, Brain, Sparkles } from "lucide-react";
import AnimateIn from "./AnimateIn";
import ExpandableText from "./ExpandableText";
import DNAHelix from "./DNAHelix";
import ExpertiseModal from "./ExpertiseModal";

const expertiseAreas = [
  {
    icon: Dna,
    label: "Cancer Genetics",
    color: "from-violet-500 to-purple-600",
    overview:
      "Cancer genetics explores how mutations, chromosomal rearrangements, and epigenetic changes drive tumorigenesis. Understanding the genetic landscape of tumors enables precision medicine approaches and targeted therapies.",
    highlights: [
      {
        title: "Liquid Biopsies Transforming Early Cancer Detection",
        summary:
          "Cell-free DNA (cfDNA) analysis is enabling non-invasive cancer detection through blood tests, with multi-cancer early detection tests showing promise in clinical trials for identifying cancers at treatable stages.",
        source: "Nature Medicine, 2024",
        url: "https://www.nature.com/nm/",
      },
      {
        title: "CRISPR-Based Functional Genomics in Cancer",
        summary:
          "Large-scale CRISPR screens are systematically identifying cancer vulnerabilities and synthetic lethal interactions, revealing new therapeutic targets in previously undruggable cancers.",
        source: "Science, 2024",
        url: "https://www.science.org/",
      },
      {
        title: "Tumor Mutational Burden as Immunotherapy Biomarker",
        summary:
          "TMB-high tumors across cancer types show enhanced response to immune checkpoint inhibitors, though the field is refining cutoffs and integrating TMB with other biomarkers for better patient stratification.",
        source: "Journal of Clinical Oncology, 2024",
        url: "https://ascopubs.org/journal/jco",
      },
    ],
  },
  {
    icon: Microscope,
    label: "Tumor Microenvironment",
    color: "from-blue-500 to-cyan-500",
    overview:
      "The tumor microenvironment (TME) encompasses immune cells, fibroblasts, vasculature, and extracellular matrix surrounding tumor cells. TME interactions profoundly influence cancer progression, metastasis, and therapy response.",
    highlights: [
      {
        title: "Single-Cell Atlases Reveal TME Heterogeneity",
        summary:
          "Single-cell RNA sequencing is mapping the complex cellular ecosystems within tumors, uncovering rare cell populations and cell-cell communication networks that drive therapy resistance.",
        source: "Cell, 2024",
        url: "https://www.cell.com/cell/home",
      },
      {
        title: "Cancer-Associated Fibroblasts as Therapeutic Targets",
        summary:
          "CAFs are emerging as key modulators of tumor immunity and drug resistance. New strategies targeting CAF subtypes show potential for enhancing immunotherapy efficacy across solid tumors.",
        source: "Nature Reviews Cancer, 2024",
        url: "https://www.nature.com/nrc/",
      },
      {
        title: "Metabolic Crosstalk in the Tumor Microenvironment",
        summary:
          "Nutrient competition between tumor and immune cells creates immunosuppressive metabolic niches. Targeting tumor metabolism is being explored to restore anti-tumor immune responses.",
        source: "Cancer Discovery, 2024",
        url: "https://aacrjournals.org/cancerdiscovery",
      },
    ],
  },
  {
    icon: FlaskConical,
    label: "RNA Biology",
    color: "from-teal to-emerald-500",
    overview:
      "RNA biology in cancer encompasses mRNA processing, non-coding RNAs, RNA modifications, and RNA-binding protein dysregulation. These mechanisms are increasingly recognized as drivers of oncogenesis and therapeutic targets.",
    highlights: [
      {
        title: "RNA-Based Therapeutics Beyond mRNA Vaccines",
        summary:
          "Building on mRNA vaccine success, RNA therapeutics including siRNAs, antisense oligonucleotides, and circular RNAs are advancing into oncology clinical trials for targeted cancer treatment.",
        source: "Nature Biotechnology, 2024",
        url: "https://www.nature.com/nbt/",
      },
      {
        title: "Epitranscriptomics: m6A Modification in Cancer",
        summary:
          "N6-methyladenosine (m6A) RNA modification is dysregulated across cancer types, affecting mRNA stability and translation. m6A writers, erasers, and readers are being explored as drug targets.",
        source: "Molecular Cell, 2024",
        url: "https://www.cell.com/molecular-cell/home",
      },
      {
        title: "Long-Read Sequencing Reveals Full-Length Transcriptomes",
        summary:
          "Oxford Nanopore and PacBio technologies are enabling direct detection of RNA isoforms, revealing previously hidden transcript diversity in tumors and opening doors for isoform-specific therapies.",
        source: "Genome Research, 2024",
        url: "https://genome.cshlp.org/",
      },
    ],
  },
  {
    icon: Brain,
    label: "Alternative Splicing",
    color: "from-amber-500 to-orange-500",
    overview:
      "Alternative splicing generates protein diversity from a single gene by selectively including or excluding exons. In cancer, splicing dysregulation produces oncogenic isoforms that promote proliferation, invasion, and drug resistance.",
    highlights: [
      {
        title: "Splice-Switching Oligonucleotides Enter Clinical Trials",
        summary:
          "SSOs that redirect pre-mRNA splicing are showing therapeutic promise in cancer, with several candidates entering Phase I/II trials targeting oncogenic splice variants in solid tumors.",
        source: "Molecular Therapy, 2024",
        url: "https://www.cell.com/molecular-therapy-family/molecular-therapy/home",
      },
      {
        title: "Splicing Factor Mutations Drive Hematologic Malignancies",
        summary:
          "Recurrent mutations in splicing factors SF3B1, SRSF2, and U2AF1 are among the most common alterations in myeloid cancers, creating vulnerabilities that can be therapeutically exploited.",
        source: "Blood, 2024",
        url: "https://ashpublications.org/blood",
      },
      {
        title: "Pan-Cancer Splicing Atlas Maps Tumor-Specific Isoforms",
        summary:
          "Comprehensive analysis of splicing across 33 cancer types has identified thousands of tumor-specific isoforms, many producing neoantigens that could serve as immunotherapy targets.",
        source: "Nature Genetics, 2024",
        url: "https://www.nature.com/ng/",
      },
    ],
  },
];

export default function About() {
  const [activeExpertise, setActiveExpertise] = useState<typeof expertiseAreas[number] | null>(null);

  const handleClose = useCallback(() => setActiveExpertise(null), []);

  return (
    <section id="about" className="relative py-16 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-[100px]" />

      {/* Decorative DNA helix */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 pointer-events-none">
        <DNAHelix color="#6366f1" opacity={0.08} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top: PI intro + photo */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          {/* PI info — 3 cols */}
          <div className="lg:col-span-3">
            <AnimateIn>
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                <span className="h-1 w-1 rounded-full bg-accent" />
                About the Lab
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="mt-6 flex items-center gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/safiya-khurshid-headshot.jpeg"
                    alt="Dr. Safiya Khurshid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                    Dr. Safiya{" "}
                    <span className="gradient-text">Khurshid</span>
                  </h2>
                  <p className="mt-2 text-lg text-text-muted">Principal Investigator</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="mt-8 text-base leading-relaxed text-text-muted">
                <ExpandableText
                  preview={
                    <p>
                      Safiya Khurshid is a trained cancer biologist dedicated to advancing
                      the understanding of tumor biology to drive drug development and
                      innovative cancer therapies. Her research journey began at the
                      University of Hyderabad, where she worked on the biology of malarial
                      parasites under the guidance of Dr. Arun Kumar Kota.
                    </p>
                  }
                  full={
                    <div className="mt-5 space-y-5">
                      <p>
                        Under the mentorship of Drs. Katja Hoepker and Thomas Benzing, Safiya
                        delved into the intricacies of DNA damage signaling and cancer biology,
                        honing her expertise in foundational cancer research. She then pursued
                        postdoctoral training with Dr. Gustavo Leone, a prominent leader in
                        cancer biology. During this time, Safiya expanded her horizons into RNA
                        biology and transitioned to working with Dr. Dawn Chandler. Under the
                        mentorship of both postdoctoral advisors, Safiya not only developed her
                        ability to conduct rigorous and impactful science but also gained
                        invaluable insights into the art and discipline of scientific inquiry,
                        critical analysis, grant writing, and lab management.
                      </p>
                      <p>
                        Safiya&apos;s expertise spans cancer genetics, tumor microenvironment, RNA
                        biology, and alternative splicing, equipping her with a versatile
                        technical skill set and a profound understanding of cancer&apos;s
                        complexities. Her lab leverages this knowledge to unravel the intricacies
                        of tumor biology and develop novel therapeutic strategies, aiming to make
                        a transformative impact in the fight against cancer.
                      </p>
                    </div>
                  }
                />
              </div>
            </AnimateIn>
          </div>

          {/* Lab photo — 2 cols */}
          <div className="lg:col-span-2">
            <AnimateIn delay={0.15} direction="right">
              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/khurshid-lab-team.png"
                  alt="Khurshid Lab Team"
                  width={700}
                  height={467}
                  className="w-full object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Expertise — single row */}
        <AnimateIn delay={0.3}>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {expertiseAreas.map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                onClick={() => setActiveExpertise(expertiseAreas.find((e) => e.label === label) ?? null)}
                className="group card-hover flex items-center gap-3 rounded-2xl border border-border bg-white p-4 text-left cursor-pointer"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-sm`}
                >
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-medium text-text block truncate">{label}</span>
                  <motion.span
                    className="flex items-center gap-1 text-[10px] text-accent/60 mt-0.5"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles size={9} /> AI-Generated Insights
                  </motion.span>
                </div>
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Expertise Modal */}
        <ExpertiseModal item={activeExpertise} onClose={handleClose} />

        {/* What Drives Us — unified narrative */}
        <AnimateIn delay={0.2}>
          <div className="mt-12 rounded-3xl border border-border bg-white overflow-hidden shadow-sm">
            <div className="h-1.5 animated-border" />

            <div className="p-8 sm:p-10 lg:p-12">
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Microscope size={16} />
                </span>
                What Drives Us
              </h3>

              <div className="mt-6 text-base leading-relaxed text-text-muted">
                <ExpandableText
                  preview={
                    <p>
                      Alternative splicing is frequently dysregulated in cancer,
                      contributing to tumor progression and therapy resistance. Our goal
                      is to identify the isoforms that are differentially expressed in
                      tumors and elucidate the RNA-binding proteins responsible for
                      mediating these changes. Using long-read sequencing technology, we
                      aim to precisely characterize these isoforms in stressed cells and
                      patient samples, paving the way for targeted therapies and adding a
                      new dimension to cancer treatment strategies.
                    </p>
                  }
                  full={
                    <div className="mt-5 space-y-5">
                      <p>
                        We believe in optimism, relentless hard work, and unwavering focus.
                        We are committed to making meaningful progress and driving innovation
                        to reshape the future of cancer research and eventually improve
                        patient care. Equally vital to our mission is educating the next
                        generation of scientists &mdash; fostering curiosity and equipping
                        them with the tools to solve the challenges of tomorrow.
                      </p>
                      <div className="flex items-start gap-5">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl shadow-sm">
                          <Image
                            src="/images/bubble-gum-brain.png"
                            alt="Bubble Gum Brain"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p>
                          At the Khurshid Lab, we embrace a growth mindset, one that values
                          curiosity, resilience, and initiative. We believe that meaningful
                          science blends substance with creativity and is strengthened when
                          we lead with kindness and collaboration. Our philosophy is inspired
                          by the idea of having a &ldquo;bubble gum brain&rdquo;: a flexible,
                          adaptable mind that can stretch, adjust, rethink, and innovate,
                          rather than remaining fixed and rigid. This spirit guides our
                          research, our teamwork, and the way we mentor the next generation
                          of scientists.
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
