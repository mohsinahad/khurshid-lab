"use client";

import { Newspaper, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
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

export const news: NewsItem[] = [
  {
    date: "October 2026",
    category: "Award",
    title:
      "Dr. Khurshid featured in AACR Pediatric Cancer Working Group spotlight",
    description:
      "The AACR Pediatric Cancer Working Group profiled Dr. Safiya Khurshid in its Across the Map researcher spotlight, highlighting the lab's work on how metabolic stress in the tumor microenvironment reshapes alternative splicing in pediatric cancer.",
    link: "https://www.aacr.org/professionals/membership/scientific-working-groups/pediatric-cancer-working-group/aacr-pcwg-across-the-map-working-groups-aacr/acrossthemap-safiyakhurshid/",
    image: "/images/safiya-khurshid-headshot.jpeg",
  },
  {
    date: "September 2026",
    category: "Conference",
    title: "Dr. Khurshid speaks on Biomed Computation and AI panel at USD",
    description:
      "Dr. Safiya Khurshid was a panelist on Biomed Computation and AI at the 2nd Annual SDBCC Symposium at the University of South Dakota, sharing how a wet-lab scientist can run computational studies directly with AI.",
    image: "/images/safiya-khurshid-headshot.jpeg",
  },
  {
    date: "July 2026",
    category: "Lab Update",
    title: "Liver-cancer splicing study built with Claude Science",
    description:
      "Dr. Khurshid released an open-source study linking alternative splicing to protein levels and patient survival in liver cancer, built with Anthropic's Claude Science on the Researcher Track.",
    link: "https://github.com/mohsinahad/liver-cancer-splicing-survival",
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
  {
    date: "January 2026",
    category: "Lab Update",
    title: "Olivia Petrik joins the Khurshid Lab",
    description:
      "We welcome Olivia Petrik as a Research Associate. Olivia brings expertise in cancer genetics, protein interactions, and Hippo signaling.",
    image: "/images/olivia.png",
  },
];

const GRID_COUNT = 3;

function CategoryBadge({ category }: { category: NewsItem["category"] }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${CATEGORY_COLORS[category]}`}
    >
      {category}
    </span>
  );
}

function FeaturedCard({ item }: { item: NewsItem }) {
  return (
    <article className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-md sm:flex-row sm:items-center sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-teal" />
      {item.image && (
        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-surface">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-full bg-gradient-to-r from-accent to-teal px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
            Latest
          </span>
          <CategoryBadge category={item.category} />
          <span className="text-xs text-text-light">{item.date}</span>
        </div>
        <h3 className="mt-3 text-xl font-bold leading-snug text-primary sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Read more
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-2">
        <CategoryBadge category={item.category} />
        <span className="text-[11px] text-text-light">{item.date}</span>
      </div>
      <h3 className="mt-3 text-sm font-semibold leading-snug text-primary">
        {item.title}
      </h3>
      <p className="mt-2 text-xs text-text-muted leading-relaxed line-clamp-4">
        {item.description}
      </p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex self-start items-center gap-1 pt-3 text-xs font-medium text-accent hover:underline"
        >
          Read more
          <ArrowUpRight size={12} />
        </a>
      )}
    </article>
  );
}

export default function News() {
  const [showAll, setShowAll] = useState(false);

  if (news.length === 0) return null;

  const [latest, ...rest] = news;
  const visible = showAll ? rest : rest.slice(0, GRID_COUNT);
  const hiddenCount = rest.length - GRID_COUNT;

  return (
    <section id="news" className="relative py-20 bg-surface overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
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

        <AnimateIn className="mt-10" delay={0.1}>
          <FeaturedCard item={latest} />
        </AnimateIn>

        {rest.length > 0 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <AnimateIn
                key={`${item.date}-${item.title}`}
                delay={0.05 * (i % GRID_COUNT)}
              >
                <NewsCard item={item} />
              </AnimateIn>
            ))}
          </div>
        )}

        {hiddenCount > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-text-muted transition hover:border-accent hover:text-accent"
            >
              {showAll ? "Show less" : `Show all news (${hiddenCount} more)`}
              <ChevronDown
                size={14}
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
