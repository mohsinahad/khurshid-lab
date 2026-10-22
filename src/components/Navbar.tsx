"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LabLogo from "./LabLogo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Research", href: "#research" },
  { label: "Techniques", href: "#techniques" },
  { label: "AI Research", href: "#ai-research" },
  { label: "Publications", href: "#publications" },
  { label: "Team", href: "#team" },
  { label: "Join Us", href: "#positions" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <LabLogo size={36} />
            <span
              className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              Khurshid Lab
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? "text-accent bg-accent/5"
                        : "text-white bg-white/15"
                      : scrolled
                        ? "text-text-muted hover:text-text hover:bg-surface"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            className={`lg:hidden rounded-lg p-2 transition-colors ${
              scrolled
                ? "text-primary hover:bg-surface"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-text hover:bg-surface transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
