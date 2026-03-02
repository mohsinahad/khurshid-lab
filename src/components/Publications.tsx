import { ExternalLink } from "lucide-react";

interface Publication {
  year: number;
  title: string;
  authors: string;
  journal: string;
  url: string;
}

const publications: Publication[] = [
  {
    year: 2024,
    title:
      "Employing splice-switching oligonucleotides and AAVrh74.U7 snRNA to target insulin receptor splicing and cancer hallmarks in osteosarcoma",
    authors: "Safiya Khurshid, Akila S. Venkataramany et al.",
    journal: "Molecular Therapy Oncology",
    url: "https://www.cell.com/molecular-therapy-family/oncology/fulltext/S2950-3299(24)00150-4",
  },
  {
    year: 2024,
    title:
      "Blockade of Interleukin-6 (IL-6) Signaling in Dedifferentiated Liposarcoma (DDLPS) Decreases Mouse Double Minute 2 (MDM2) Oncogenicity via Alternative Splicing",
    authors: "Khurshid Lab",
    journal: "bioRxiv",
    url: "https://www.biorxiv.org/content/10.1101/2024.02.21.581397v1",
  },
  {
    year: 2024,
    title:
      "Oncogenic Functions of Alternatively Spliced MDM2-ALT2 Isoform in Retroperitoneal Liposarcoma",
    authors: "Fernanda Costas C. de Faria et al.",
    journal: "International Journal of Molecular Sciences",
    url: "https://www.mdpi.com/1422-0067/25/24/13516",
  },
  {
    year: 2022,
    title:
      "Splice-switching of the insulin receptor pre-mRNA alleviates tumorigenic hallmarks in rhabdomyosarcoma",
    authors: "Safiya Khurshid, Matias Montes et al.",
    journal: "NPJ Precision Oncology",
    url: "#",
  },
  {
    year: 2020,
    title:
      "SRSF2 Regulation of MDM2 Reveals Splicing as a Therapeutic Vulnerability of the p53 Pathway",
    authors: "Daniel F. Comiskey Jr et al.",
    journal: "Molecular Cancer Research",
    url: "#",
  },
  {
    year: 2018,
    title:
      "AATF suppresses apoptosis, promotes proliferation and is critical for Kras-driven lung cancer",
    authors: "Daniela Welcker et al.",
    journal: "Oncogene",
    url: "#",
  },
  {
    year: 2017,
    title: "E2f3 in tumor macrophages promotes lung metastasis",
    authors: "Prashant Trikha et al.",
    journal: "Oncogene",
    url: "#",
  },
  {
    year: 2017,
    title:
      "Discovery of Stromal Regulatory Networks that Suppress Ras-Sensitized Epithelial Cell Proliferation",
    authors: "Huayang Liu, James A. Dowdle et al.",
    journal: "Developmental Cell",
    url: "#",
  },
  {
    year: 2012,
    title:
      "AATF/Che-1 acts as a phosphorylation-dependent molecular modulator to repress p53-driven apoptosis",
    authors: "Katja Hopker et al.",
    journal: "The EMBO Journal",
    url: "#",
  },
  {
    year: 2012,
    title: "Putting the brakes on p53-driven apoptosis",
    authors: "Katja Hopker et al.",
    journal: "Cell Cycle",
    url: "#",
  },
];

const years = [...new Set(publications.map((p) => p.year))].sort(
  (a, b) => b - a
);

export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Publications
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Selected Publications
          </h2>
        </div>

        <div className="mt-16 space-y-12">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-primary">{year}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-6 space-y-4">
                {publications
                  .filter((p) => p.year === year)
                  .map((pub) => (
                    <div
                      key={pub.title}
                      className="group rounded-xl border border-border bg-white p-6 transition-all hover:shadow-sm hover:border-accent/30"
                    >
                      <h3 className="text-base font-semibold leading-relaxed text-text group-hover:text-primary">
                        {pub.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-muted">
                        {pub.authors}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm font-medium italic text-accent">
                          {pub.journal}
                        </span>
                        {pub.url !== "#" && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-text-muted hover:text-accent transition-colors"
                          >
                            View Paper <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
