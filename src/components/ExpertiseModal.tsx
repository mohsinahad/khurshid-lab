"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, type LucideIcon } from "lucide-react";

interface ExpertiseItem {
  icon: LucideIcon;
  label: string;
  color: string;
  highlights: {
    title: string;
    summary: string;
    source: string;
    url: string;
  }[];
  overview: string;
}

interface ExpertiseModalProps {
  item: ExpertiseItem | null;
  onClose: () => void;
}

export default function ExpertiseModal({ item, onClose }: ExpertiseModalProps) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-primary-dark/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[10%] bottom-[10%] z-50 mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border bg-white shadow-2xl sm:inset-x-auto"
          >
            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${item.color} px-8 py-6 text-white`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.label}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
                      <Sparkles size={11} />
                      Current Research Highlights
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-xl p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-8 py-6" style={{ maxHeight: "calc(80vh - 120px)" }}>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.overview}
              </p>

              <div className="mt-6 space-y-4">
                {item.highlights.map((highlight, i) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="group rounded-2xl border border-border p-5 transition-colors hover:border-accent/20 hover:bg-surface/50"
                  >
                    <h4 className="text-sm font-semibold text-text leading-snug group-hover:text-accent transition-colors">
                      {highlight.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-text-muted">
                      {highlight.summary}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] text-text-light italic">
                        {highlight.source}
                      </span>
                      <a
                        href={highlight.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-medium text-accent hover:underline"
                      >
                        Read more <ExternalLink size={10} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
