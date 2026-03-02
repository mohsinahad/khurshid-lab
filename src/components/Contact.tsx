import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-text-muted">
            Interested in our research or potential collaboration? We&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin size={24} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-primary">
                Location
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Sanford Research
                <br />
                2301 East 60th St N
                <br />
                Sioux Falls, SD 57104
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail size={24} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-primary">
                Email
              </h3>
              <a
                href="mailto:Safiya.khurshid@sanfordhealth.org"
                className="mt-2 text-sm text-text-muted hover:text-accent transition-colors break-all"
              >
                Safiya.khurshid
                <br />
                @sanfordhealth.org
              </a>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-border bg-surface p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Phone size={24} />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-primary">
                Phone
              </h3>
              <a
                href="tel:605-312-6401"
                className="mt-2 text-sm text-text-muted hover:text-accent transition-colors"
              >
                605-312-6401
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
