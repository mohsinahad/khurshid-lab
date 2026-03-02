export default function Footer() {
  return (
    <footer className="bg-primary-dark py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">Khurshid Lab</p>
            <p className="mt-1 text-sm text-white/50">
              Cancer Research &middot; RNA Biology &middot; Alternative Splicing
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-white/50">
              Sanford Research, Sioux Falls, SD
            </p>
            <p className="mt-1 text-sm text-white/40">
              &copy; {new Date().getFullYear()} Khurshid Lab. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
