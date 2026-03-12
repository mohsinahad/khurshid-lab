"use client";

import { Newspaper } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface NewsItem {
  date: string;
  category: "Publication" | "Award" | "Lab Update" | "Conference";
  title: string;
  description: string;
  link?: string;
}

const CATEGORY_COLORS: Record<NewsItem["category"], string> = {
  Publication: "bg-accent/10 text-accent",
  Award: "bg-amber-50 text-amber-600",
  "Lab Update": "bg-teal/10 text-teal-600",
  Conference: "bg-violet-50 text-violet-600",
};

const news: NewsItem[] = [
  {
    date: "December 2024",
    category: "Publication",
    title:
      "New paper published in Molecular Therapy Oncology on splice-switching in osteosarcoma",
    description:
      "Our study employing SSOs and AAVrh74.U7 snRNA to target insulin receptor splicing and cancer hallmarks in osteosarcoma is now available online.",
    link: "https://www.cell.com/molecular-therapy-family/oncology/fulltext/S2950-3299(24)00150-4",
  },
  {
    date: "February 2024",
    category: "Publication",
    title:
      "Preprint: IL-6 blockade decreases MDM2 oncogenicity via alternative splicing in liposarcoma",
    description:
      "New collaborative work showing how blocking IL-6 signaling alters MDM2 splicing in dedifferentiated liposarcoma, posted to bioRxiv.",
    link: "https://www.biorxiv.org/content/10.1101/2024.02.21.581397v1",
  },
  {
    date: "Early 2024",
    category: "Lab Update",
    title: "Olivia Petrick joins the Khurshid Lab",
    description:
      "We welcome Olivia Petrick as a Research Associate. Olivia brings expertise in cancer genetics and protein interaction pathways including Hippo signaling.",
  },
  {
    date: "2024",
    category: "Publication",
    title:
      "Oncogenic functions of MDM2-ALT2 isoform in retroperitoneal liposarcoma published",
    description:
      "Collaborative study characterizing the MDM2-ALT2 alternatively spliced isoform and its role in liposarcoma oncogenesis published in Int. J. Mol. Sci.",
    link: "https://www.mdpi.com/1422-0067/25/24/13516",
  },
  {
    date: "2022",
    category: "Publication",
    title:
      "Splice-switching of insulin receptor pre-mRNA published in NPJ Precision Oncology",
    description:
      "Our work demonstrating that redirecting insulin receptor splicing alleviates tumorigenic hallmarks in rhabdomyosarcoma is published.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8752779/",
  },
  {
    date: "Ongoing",
    category: "Lab Update",
    title: "Recruiting trainees for RNA splicing & pediatric cancer projects",
    description:
      "The Khurshid Lab at Sanford Research is actively looking for motivated postdoctoral fellows, graduate students, and undergraduates. See Open Positions below.",
  },
];

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
  return (
    <section id="news" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-teal/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Newspaper size={12} />
              News & Updates
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Latest from the{" "}
              <span className="gradient-text">Lab</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <AnimateIn key={item.title} delay={0.07 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between gap-2">
                  <CategoryBadge category={item.category} />
                  <span className="text-[11px] text-text-light shrink-0">
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-semibold leading-snug text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-xs font-medium text-accent hover:underline"
                  >
                    Read more →
                  </a>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
