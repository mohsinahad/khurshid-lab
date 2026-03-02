import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Decorative DNA-like pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
        <svg viewBox="0 0 200 800" className="h-full w-full" fill="none">
          <path
            d="M100 0 Q150 100 100 200 Q50 300 100 400 Q150 500 100 600 Q50 700 100 800"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M80 0 Q130 100 80 200 Q30 300 80 400 Q130 500 80 600 Q30 700 80 800"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M120 0 Q170 100 120 200 Q70 300 120 400 Q170 500 120 600 Q70 700 120 800"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
          Sanford Research &middot; Sioux Falls, SD
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Khurshid Lab
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Investigating dysregulated alternative splicing in cancer &mdash;
          identifying differentially expressed isoforms and the RNA-binding
          proteins controlling them to advance precision oncology.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#research"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-lg transition hover:bg-white/90 hover:shadow-xl"
          >
            Our Research
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
