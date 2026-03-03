"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface TeamMember {
  name: string;
  title: string;
  education: string;
  interests: string;
  email: string;
  photo: string;
}

const team: TeamMember[] = [
  {
    name: "Dr. Safiya Khurshid",
    title: "Principal Investigator",
    education: "PhD",
    interests:
      "Safiya is passionate about cancer biology and wants to figure out how tumor cells as well as the cells in the tumor microenvironment use alternative splicing to increase their tumorigenic potential. Outside of research Safiya enjoys spending time with her family, watching soccer with them (Manchester United fans at heart) and watching her family members (M, A and L) play soccer.",
    email: "safiya.khurshid@sanfordhealth.org",
    photo: "/images/safiya-khurshid-headshot.jpeg",
  },
  {
    name: "Moin Talukder",
    title: "Senior Research Specialist",
    education: "Masters",
    interests:
      "Moin Talukder is a cancer biologist who contributes to cancer research in the Khurshid Lab. He is interested in understanding metastatic progression, with a particular emphasis on RNA biology. Beyond his scientific pursuits, Moin is a vibrant sports lover who enjoys cricket, badminton, and soccer. He balances his active lifestyle with relaxing activities like watching movies.",
    email: "mdmoinuddin.talukder@sanfordhealth.org",
    photo: "/images/moin-talukder-headshot.jpg",
  },
  {
    name: "Naira Rashid",
    title: "Postdoctoral Researcher",
    education: "PhD",
    interests:
      "Naira Rashid is a Postdoctoral Fellow in the Khurshid Lab at Sanford Research. Her research focuses on elucidating the mechanism of alternative splicing in pediatric cancer, with the objective of understanding how aberrant splicing events contribute to increased tumorigenesis.",
    email: "naira@sanfordhealth.org",
    photo: "/images/naira-rashid-lab.png",
  },
  {
    name: "Olivia Petrick",
    title: "Research Associate",
    education: "B.S.",
    interests:
      "Olivia Petrick is a Research Associate in the Khurshid Lab at Sanford Research. She contributes to ongoing projects investigating alternative splicing mechanisms in cancer and supports the lab's experimental and computational workflows.",
    email: "olivia.petrick@sanfordhealth.org",
    photo: "",
  },
];

const INTERVAL = 5000;

export default function Team() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setActive(index);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % team.length, 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + team.length) % team.length, -1);
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % team.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  const member = team[active];

  return (
    <section id="team" className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Our Team
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Meet the{" "}
              <span className="gradient-text">Researchers</span>
            </h2>
          </div>
        </AnimateIn>

        <div
          className="relative mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row"
              >
                {/* Photo */}
                <div className="relative h-72 w-full shrink-0 overflow-hidden bg-surface sm:h-auto sm:w-64">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-contain object-center"
                    />
                  ) : (
                    <div className="flex h-full min-h-[18rem] w-full items-center justify-center text-6xl font-bold text-accent/20">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {member.title}
                    </p>
                    <p className="mt-0.5 text-xs text-text-light">
                      {member.education}
                    </p>
                  </div>

                  <div className="mt-5 h-px w-full bg-border" />

                  <p className="mt-5 flex-1 text-sm text-text-muted leading-relaxed">
                    {member.interests}
                  </p>

                  <a
                    href={`mailto:${member.email}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-xs font-medium text-text-muted transition-all hover:bg-accent/5 hover:text-accent hover:border-accent/20"
                  >
                    <Mail size={14} />
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-accent/5 hover:border-accent/20 hover:text-accent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-md transition-all hover:bg-accent/5 hover:border-accent/20 hover:text-accent"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots + progress */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? 1 : -1)}
                className="relative h-2 rounded-full bg-border transition-all overflow-hidden"
                style={{ width: i === active ? 32 : 8 }}
              >
                {i === active && (
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                    key={`progress-${active}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
