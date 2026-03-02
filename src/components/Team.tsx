import { Mail } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  education: string;
  interests: string;
  personal: string;
  email: string;
  initials: string;
}

const team: TeamMember[] = [
  {
    name: "Dr. Safiya Khurshid",
    title: "Principal Investigator",
    education: "PhD",
    interests:
      "Cancer biology, alternative splicing mechanisms in tumor cells and tumor microenvironment",
    personal:
      "Family-oriented, Manchester United fan, enjoys watching soccer",
    email: "safiya.khurshid@sanfordhealth.org",
    initials: "SK",
  },
  {
    name: "Moin Talukder",
    title: "Senior Research Specialist",
    education: "Masters",
    interests: "Cancer biology, metastatic progression, RNA biology",
    personal:
      "Cricket, badminton, and soccer enthusiast; enjoys movies",
    email: "mdmoinuddin.talukder@sanfordhealth.org",
    initials: "MT",
  },
  {
    name: "Naira Rashid",
    title: "Postdoctoral Researcher",
    education: "PhD",
    interests:
      "Alternative splicing mechanisms in pediatric cancer and tumorigenesis",
    personal: "",
    email: "naira@sanfordhealth.org",
    initials: "NR",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Meet the Researchers
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl bg-white border border-border p-8 text-center transition-all hover:shadow-md hover:border-accent/30"
            >
              {/* Avatar */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-2xl font-bold text-white shadow-lg">
                {member.initials}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-primary">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {member.title}
              </p>
              <p className="mt-1 text-xs text-text-muted">{member.education}</p>

              <div className="mt-5 space-y-3 text-left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Research Interests
                  </p>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    {member.interests}
                  </p>
                </div>
                {member.personal && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                      Personal
                    </p>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">
                      {member.personal}
                    </p>
                  </div>
                )}
              </div>

              <a
                href={`mailto:${member.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs font-medium text-text-muted transition hover:bg-accent/10 hover:text-accent"
              >
                <Mail size={14} />
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
