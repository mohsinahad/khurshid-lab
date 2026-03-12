"use client";

import { Users, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface Position {
  title: string;
  type: string;
  badge: string;
  badgeColor: string;
  summary: string;
  details: string[];
  qualifications: string[];
}

const positions: Position[] = [
  {
    title: "Postdoctoral Fellow",
    type: "Full-time · Sanford Research",
    badge: "Open",
    badgeColor: "bg-green-50 text-green-700",
    summary:
      "Join our team to lead independent projects investigating alternative splicing mechanisms in pediatric cancer using cutting-edge sequencing and molecular biology approaches.",
    details: [
      "Design and execute experiments investigating RNA splicing in pediatric cancer models",
      "Analyze short- and long-read RNA-seq datasets using bioinformatics pipelines",
      "Develop and test splice-switching oligonucleotides (SSOs) as potential therapeutics",
      "Mentor graduate and undergraduate students",
      "Present work at national and international conferences",
    ],
    qualifications: [
      "PhD in cancer biology, molecular biology, RNA biology, or related field",
      "Experience with RNA sequencing and/or bioinformatics analysis",
      "Strong publication record",
      "Excellent written and verbal communication skills",
    ],
  },
  {
    title: "Graduate Student",
    type: "PhD Program · SDSU / USD",
    badge: "Open",
    badgeColor: "bg-green-50 text-green-700",
    summary:
      "Pursue your PhD studying RNA splicing dysregulation in cancer. Students join through the SDSU or USD graduate programs and work on projects at the intersection of molecular biology and precision oncology.",
    details: [
      "Investigate alternative splicing events in pediatric sarcomas and other cancers",
      "Develop expertise in molecular cloning, cell culture, and in vivo models",
      "Apply bioinformatics tools to patient sequencing datasets",
      "Collaborate with clinicians and other research groups at Sanford Research",
    ],
    qualifications: [
      "Bachelor's or Master's degree in biology, biochemistry, or related field",
      "Enrolled in or eligible for SDSU or USD graduate programs",
      "Strong academic record and research motivation",
      "Prior laboratory experience preferred",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    type: "Part-time · Flexible hours",
    badge: "Open",
    badgeColor: "bg-green-50 text-green-700",
    summary:
      "Gain hands-on research experience in a cancer biology lab. Undergraduates contribute to active projects and learn foundational molecular biology techniques in a supportive environment.",
    details: [
      "Assist with cell culture maintenance and molecular biology experiments",
      "Learn techniques including PCR, western blot, and cloning",
      "Participate in lab meetings and journal clubs",
      "Opportunity to develop an independent research question over time",
    ],
    qualifications: [
      "Enrolled undergraduate student in biology, chemistry, or related field",
      "Completed introductory biology/chemistry coursework",
      "Available for at least 10 hours per week",
      "Eagerness to learn and contribute to a team environment",
    ],
  },
];

function PositionCard({ position, index }: { position: Position; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimateIn delay={0.1 * index}>
      <div className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-surface/50 transition-colors"
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${position.badgeColor}`}
              >
                {position.badge}
              </span>
              <span className="text-xs text-text-light">{position.type}</span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-primary">
              {position.title}
            </h3>
            <p className="mt-1 text-sm text-text-muted leading-relaxed">
              {position.summary}
            </p>
          </div>
          <div className="shrink-0 mt-1 text-text-light">
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 grid sm:grid-cols-2 gap-6 border-t border-border pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {position.details.map((d) => (
                      <li
                        key={d}
                        className="flex gap-2 text-xs text-text-muted leading-relaxed"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Qualifications
                  </p>
                  <ul className="space-y-2">
                    {position.qualifications.map((q) => (
                      <li
                        key={q}
                        className="flex gap-2 text-xs text-text-muted leading-relaxed"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

export default function Positions() {
  return (
    <section id="positions" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Users size={12} />
              Join the Lab
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Open{" "}
              <span className="gradient-text">Positions</span>
            </h2>
            <p className="mt-5 text-base text-text-muted leading-relaxed max-w-xl mx-auto">
              We are always looking for passionate scientists to join our team.
              If you are interested in RNA biology, cancer research, and making
              a difference in pediatric oncology — we want to hear from you.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 space-y-4">
          {positions.map((pos, i) => (
            <PositionCard key={pos.title} position={pos} index={i} />
          ))}
        </div>

        <AnimateIn delay={0.4}>
          <div className="mt-10 rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-text-muted">
              Don&apos;t see a role that fits? We welcome speculative
              applications from motivated candidates.
            </p>
            <a
              href="mailto:safiya.khurshid@sanfordhealth.org"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-teal px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <Mail size={14} />
              Get In Touch
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
