"use client";

import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import AnimateIn from "./AnimateIn";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Sanford Research", "2301 East 60th St N", "Sioux Falls, SD 57104"],
    href: "https://maps.google.com/?q=2301+East+60th+St+N+Sioux+Falls+SD+57104",
    linkText: "Open in Maps",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["Safiya.khurshid", "@sanfordhealth.org"],
    href: "mailto:Safiya.khurshid@sanfordhealth.org",
    linkText: "Send Email",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["605-312-6401"],
    href: "tel:605-312-6401",
    linkText: "Call Now",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Contact
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Get In{" "}
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-text-muted">
              Interested in our research or potential collaboration? We&apos;d love
              to hear from you.
            </p>
          </div>
        </AnimateIn>

        <div className="mx-auto mt-20 max-w-3xl grid gap-6 sm:grid-cols-3">
          {contactCards.map((card, i) => (
            <AnimateIn key={card.title} delay={0.15 * i}>
              <a
                href={card.href}
                target={card.icon === MapPin ? "_blank" : undefined}
                rel={card.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group card-hover flex flex-col items-center rounded-3xl border border-border bg-surface p-8 sm:p-10 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-teal text-white shadow-lg">
                  <card.icon size={22} />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-primary">
                  {card.title}
                </h3>
                <div className="mt-3 space-y-0.5">
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-text-muted">
                      {line}
                    </p>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  {card.linkText} <ArrowUpRight size={11} />
                </span>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
