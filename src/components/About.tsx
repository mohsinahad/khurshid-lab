import { Microscope, Dna, FlaskConical, Brain } from "lucide-react";

const expertiseAreas = [
  { icon: Dna, label: "Cancer Genetics" },
  { icon: Microscope, label: "Tumor Microenvironment" },
  { icon: FlaskConical, label: "RNA Biology" },
  { icon: Brain, label: "Alternative Splicing" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About the Lab
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Dr. Safiya Khurshid
            </h2>
            <p className="mt-2 text-lg text-text-muted">Principal Investigator</p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-text-muted">
              <p>
                Dr. Khurshid is a cancer biologist specializing in tumor biology,
                drug development, and innovative cancer therapies. She began her
                scientific journey at the University of Hyderabad studying malarial
                parasites under Dr. Arun Kumar Kota.
              </p>
              <p>
                She earned her PhD from CECAD, University of Cologne in Germany
                under Drs. Katja Hoepker and Thomas Benzing, focusing on DNA damage
                signaling and cancer biology. Postdoctoral training with Dr. Gustavo
                Leone and Dr. Dawn Chandler expanded her expertise into RNA biology
                and lab management.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="rounded-2xl bg-surface p-8">
              <h3 className="text-lg font-semibold text-primary">
                Lab Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Alternative splicing is frequently dysregulated in cancer,
                contributing to tumor progression and therapy resistance. Our lab
                aims to identify differentially expressed isoforms and the
                RNA-binding proteins controlling them using long-read sequencing
                technology.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary">
                  Lab Philosophy
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  The Khurshid Lab embraces a &ldquo;bubble gum brain&rdquo;
                  concept &mdash; flexible, adaptable thinking that values
                  curiosity, resilience, and collaboration. We emphasize optimism,
                  hard work, focus, and mentoring the next generation of
                  scientists.
                </p>
              </div>
            </div>

            {/* Expertise badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {expertiseAreas.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-text">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
