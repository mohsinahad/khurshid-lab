import LabLogo from "./LabLogo";

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark py-16 overflow-hidden">
      {/* Gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <LabLogo size={32} />
              <span className="text-lg font-semibold text-white">
                Khurshid Lab
              </span>
            </div>
            <p className="mt-3 text-sm text-white/30">
              Cancer Research &middot; RNA Biology &middot; Alternative Splicing
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-sm text-white/30">
              Sanford Research, Sioux Falls, SD
            </p>
            <p className="mt-2 text-xs text-white/20">
              &copy; {new Date().getFullYear()} Khurshid Lab. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
