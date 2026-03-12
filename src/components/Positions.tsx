"use client";

import { Users, Mail } from "lucide-react";
import AnimateIn from "./AnimateIn";

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

        <AnimateIn delay={0.15}>
          <div className="mt-12 rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
            <p className="text-sm text-text-muted">
              There are no open positions at this time. We welcome speculative
              applications from motivated candidates at any stage.
            </p>
            <a
              href="mailto:safiya.khurshid@sanfordhealth.org"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-teal px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
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
