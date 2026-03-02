import { BarChart3, FlaskConical, Atom } from "lucide-react";

const researchAreas = [
  {
    icon: BarChart3,
    title: "Pediatric Cancer Splicing Landscape",
    description:
      "Using bioinformatics tools on patient sequencing data to identify alternative splicing events and RNA-binding protein expression changes in tumors. Our computational approaches enable comprehensive mapping of the splicing landscape in pediatric cancers.",
  },
  {
    icon: FlaskConical,
    title: "Metabolic Starvation & Splice-Switching Oligonucleotides",
    description:
      "Studying how tumor microenvironmental factors alter splicing patterns and designing splice-switching oligonucleotides (SSOs) to restore normal splicing and reduce tumorigenic properties. This translational approach bridges basic RNA biology with therapeutic development.",
  },
  {
    icon: Atom,
    title: "RNA-Binding Protein Dynamics",
    description:
      "Analyzing how metabolic starvation modifies RNA-binding protein expression, phosphorylation, and localization to influence alternative splicing and tumorigenesis. Understanding these dynamics reveals new targets for cancer intervention.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Research Focus
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Decoding Cancer Through RNA Biology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
            Our research bridges computational biology and experimental
            approaches to understand how alternative splicing drives cancer
            progression and identify new therapeutic strategies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl bg-white p-8 shadow-sm border border-border transition-all hover:shadow-md hover:border-accent/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <area.icon size={28} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
