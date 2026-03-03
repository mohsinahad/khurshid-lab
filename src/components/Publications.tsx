"use client";

import Image from "next/image";
import { ExternalLink, BookOpen } from "lucide-react";
import AnimateIn from "./AnimateIn";

interface Publication {
  year: number;
  title: string;
  authors: string;
  journal: string;
  url: string;
  doi: string;
  figure?: string;
}

const publications: Publication[] = [
  {
    year: 2024,
    title:
      "Employing splice-switching oligonucleotides and AAVrh74.U7 snRNA to target insulin receptor splicing and cancer hallmarks in osteosarcoma",
    authors: "Safiya Khurshid, Akila S. Venkataramany, Matias Montes, John F. Kipp, Ryan D. Roberts, Nicolas Wein, Frank Rigo, Pin-Yi Wang, Timothy P. Cripe, Dawn S. Chandler",
    journal: "Molecular Therapy Oncology",
    url: "https://www.cell.com/molecular-therapy-family/oncology/fulltext/S2950-3299(24)00150-4",
    doi: "10.1016/j.omton.2024.200908",
    figure: "/images/research-insulin-receptor.png",
  },
  {
    year: 2024,
    title:
      "Blockade of Interleukin-6 (IL-6) Signaling in Dedifferentiated Liposarcoma (DDLPS) Decreases Mouse Double Minute 2 (MDM2) Oncogenicity via Alternative Splicing",
    authors: "Abeba Zewdu, Danielle Braggio, Gonzalo Lopez, Kara Batte, Safiya Khurshid, Fernanda Costas de Faria, Hemant K. Bid, David Koller, Lucia Casadei, Katherine J. Ladner, David Wang, Valerie Grignol, O. Hans Iwenofu, Dawn Chandler, Denis C. Guttridge, Raphael E. Pollock",
    journal: "bioRxiv",
    url: "https://www.biorxiv.org/content/10.1101/2024.02.21.581397v1",
    doi: "10.1101/2024.02.21.581397",
    figure: "/images/research-il6-mdm2.png",
  },
  {
    year: 2024,
    title:
      "Oncogenic Functions of Alternatively Spliced MDM2-ALT2 Isoform in Retroperitoneal Liposarcoma",
    authors: "Fernanda Costas C. de Faria, Safiya Khurshid, Patricia Sarchet, Sayumi Tahara, Lucia Casadei, Valerie Grignol, Roma Karna, Sydney Rentsch, Nipin Sp, Joal D. Beane, Luciano Mazzoccoli, Matias Montes, Giovanni Nigita, Joe T. Sharick, Jennifer L. Leight, Federica Calore, Dawn S. Chandler, Raphael E. Pollock",
    journal: "Int. J. Mol. Sci.",
    url: "https://www.mdpi.com/1422-0067/25/24/13516",
    doi: "10.3390/ijms252413516",
    figure: "/images/research-mdm2-alt2.png",
  },
  {
    year: 2022,
    title:
      "Splice-switching of the insulin receptor pre-mRNA alleviates tumorigenic hallmarks in rhabdomyosarcoma",
    authors: "Safiya Khurshid, Matias Montes, Daniel F Comiskey Jr, Brianne Shane, Eleftheria Matsa, Francesca Jung, Chelsea Brown, Hemant Kumar Bid, Ruoning Wang, Peter J Houghton, Ryan Roberts, Frank Rigo, Dawn Chandler",
    journal: "NPJ Precis. Oncol.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8752779/",
    doi: "10.1038/s41698-021-00245-5",
    figure: "/images/research-sso-rms.png",
  },
  {
    year: 2020,
    title:
      "SRSF2 Regulation of MDM2 Reveals Splicing as a Therapeutic Vulnerability of the p53 Pathway",
    authors: "Daniel F Comiskey Jr, Matias Montes, Safiya Khurshid, Ravi K Singh, Dawn S Chandler",
    journal: "Mol. Cancer Res.",
    url: "https://aacrjournals.org/mcr/article/18/2/194/270880/SRSF2-Regulation-of-MDM2-Reveals-Splicing-as-a",
    doi: "10.1158/1541-7786.MCR-19-0541",
    figure: "/images/research-srsf2.png",
  },
  {
    year: 2018,
    title:
      "AATF suppresses apoptosis, promotes proliferation and is critical for Kras-driven lung cancer",
    authors: "Daniela Welcker, Manaswita Jain, Safiya Khurshid, Mladen Jokic, Martin Hohne, Anna Schmitt, Peter Frommolt, Carien M Niessen, Judith Spiro, Thorsten Persigehl, Maike Wittersheim, Reinhard Buttner, Maurizio Fanciulli, Bernhard Schermer, Hans Christian Reinhardt, Thomas Benzing, Katja Hopker",
    journal: "Oncogene",
    url: "https://www.nature.com/articles/s41388-017-0054-6",
    doi: "10.1038/s41388-017-0054-6",
    figure: "/images/research-aatf-lung.png",
  },
  {
    year: 2017,
    title: "E2f3 in tumor macrophages promotes lung metastasis",
    authors: "Prashant Trikha, Nidhi Sharma, Clarissa Pena, Andreas Reyes, Thierry Pecot, Safiya Khurshid, Maysoon Rawahneh, Julie Moffitt, Julie A Stephens, Soledad A Fernandez, Michael Ostrowski, Gustavo Leone",
    journal: "Oncogene",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4861698/",
    doi: "10.1038/onc.2015.429",
    figure: "/images/research-e2f3.png",
  },
  {
    year: 2017,
    title:
      "Discovery of Stromal Regulatory Networks that Suppress Ras-Sensitized Epithelial Cell Proliferation",
    authors: "Huayang Liu, James A. Dowdle, Safiya Khurshid, Nicholas J. Sullivan, Nicholas Bertos, Komal Rambani, Markus Mair, Piotr Daniel, Esther Wheeler, Xing Tang, Kyle Toth, Michael Lause, et al., Gustavo Leone",
    journal: "Dev. Cell",
    url: "https://www.cell.com/developmental-cell/fulltext/S1534-5807(17)30350-7",
    doi: "10.1016/j.devcel.2017.04.024",
    figure: "/images/research-stromal.png",
  },
  {
    year: 2012,
    title:
      "AATF/Che-1 acts as a phosphorylation-dependent molecular modulator to repress p53-driven apoptosis",
    authors: "Katja Hopker, Henning Hagmann, Safiya Khurshid, Shuhua Chen, Pia Hasskamp, Tamina Seeger-Nukpezah, Katharina Schilberg, Lukas Heukamp, Tobias Lamkemeyer, Martin L Sos, et al., Thomas Benzing",
    journal: "EMBO J.",
    url: "https://www.embopress.org/doi/full/10.1038/emboj.2012.236",
    doi: "10.1038/emboj.2012.236",
    figure: "/images/research-aatf-p53.png",
  },
  {
    year: 2012,
    title: "Putting the brakes on p53-driven apoptosis",
    authors: "Katja Hopker, Henning Hagmann, Safiya Khurshid, Shuhua Chen, Bernhard Schermer, Thomas Benzing, Hans Christian Reinhardt",
    journal: "Cell Cycle",
    url: "https://www.tandfonline.com/doi/10.4161/cc.21997",
    doi: "10.4161/cc.21997",
  },
];

const years = [...new Set(publications.map((p) => p.year))].sort(
  (a, b) => b - a
);

export default function Publications() {
  return (
    <section id="publications" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <BookOpen size={12} />
              Publications
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Selected{" "}
              <span className="gradient-text">Publications</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="mt-16">
          {years.map((year, yi) => (
            <AnimateIn key={year} delay={0.05 * yi}>
              <div className={yi > 0 ? "mt-8" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg font-bold gradient-text">{year}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>

                <div className="divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
                  {publications
                    .filter((p) => p.year === year)
                    .map((pub) => (
                      <div
                        key={pub.title}
                        className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-surface/50"
                      >
                        {pub.figure && (
                          <div className="relative hidden sm:block h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-surface mt-0.5">
                            <Image
                              src={pub.figure}
                              alt=""
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium leading-snug text-text group-hover:text-accent transition-colors">
                            {pub.title}
                          </h3>
                          <p className="mt-1 text-xs text-text-light leading-relaxed">
                            {pub.authors}
                          </p>
                          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="text-xs font-medium italic text-accent/70">
                              {pub.journal}
                            </span>
                            <span className="text-[11px] text-text-light">
                              DOI: {pub.doi}
                            </span>
                          </div>
                        </div>
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 mt-1 flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-text-muted hover:text-accent hover:bg-accent/5 transition-all"
                        >
                          View <ExternalLink size={10} />
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
