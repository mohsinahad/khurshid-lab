"use client";

import { Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface NewsItem {
  date: string;
  category: "Publication" | "Award" | "Lab Update" | "Conference";
  title: string;
  description: string;
  link?: string;
  image?: string;
}

const CATEGORY_COLORS: Record<NewsItem["category"], string> = {
  Publication: "bg-accent/10 text-accent",
  Award: "bg-amber-50 text-amber-600",
  "Lab Update": "bg-teal/10 text-teal-600",
  Conference: "bg-violet-50 text-violet-600",
};

const news: NewsItem[] = [
  {
    date: "January 2026",
    category: "Lab Update",
    title: "Olivia Petrick joins the Khurshid Lab",
    description:
      "We welcome Olivia Petrick as a Research Associate. Olivia brings expertise in cancer genetics, protein interactions, and Hippo signaling.",
    image: "/images/olivia.png",
  },
  {
    date: "March 2026",
    category: "Conference",
    title: "Dr. Khurshid presents at COG Liver Tumor Committee Biology Meeting",
    description:
      "Dr. Safiya Khurshid presented her research at the Children's Oncology Group (COG) Liver Tumor Committee monthly biology meeting, sharing the lab's work on alternative splicing in pediatric cancers.",
    image: "/images/safiya-khurshid-headshot.jpeg",
  },
  {
    date: "March 2026",
    category: "Award",
    title: "Moin Talukder accepted into graduate school",
    description:
      "Congratulations to Moin on his graduate school acceptance! His contributions to RNA biology and cancer research have been invaluable to the lab.",
    image: "/images/moin-talukder-headshot.jpg",
  },
];

const INTERVAL = 10000;

function CategoryBadge({ category }: { category: NewsItem["category"] }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[category]}`}
    >
      {category}
    </span>
  );
}

export default function News() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setActive(index);
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % news.length, 1);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + news.length) % news.length, -1);
  }, [active, goTo]);

  useEffect(() => {
    if (paused || news.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % news.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused]);

  if (news.length === 0) return null;

  const item = news[active];

  return (
    <section id="news" className="relative py-16 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-2xl px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Newspaper size={12} />
              News & Updates
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Latest from the <span className="gradient-text">Lab</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Full list for crawlers and assistive tech — visually hidden, carousel below shows one at a time */}
        <ul className="sr-only">
          {news.map((n) => (
            <li key={`${n.date}-${n.title}`}>
              <span>{n.category}</span> &mdash; <span>{n.date}</span>
              <h3>{n.title}</h3>
              <p>{n.description}</p>
              {n.link && <a href={n.link}>Read more</a>}
            </li>
          ))}
        </ul>

        <div
          className="relative mt-10 overflow-hidden"
          aria-hidden="true"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5 rounded-2xl border border-border bg-white p-5 shadow-sm"
            >
              {item.image && (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <CategoryBadge category={item.category} />
                  <span className="text-[11px] text-text-light">{item.date}</span>
                </div>
                <h3 className="mt-1.5 text-sm font-semibold leading-snug text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-text-muted leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs font-medium text-accent hover:underline"
                  >
                    Read more →
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {news.length > 1 && (
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {news.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > active ? 1 : -1)}
                    className="relative h-1.5 rounded-full bg-border overflow-hidden transition-all"
                    style={{ width: i === active ? 24 : 6 }}
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
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-accent hover:text-accent"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={next}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-accent hover:text-accent"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
