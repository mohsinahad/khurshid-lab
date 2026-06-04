"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ExpandableTextProps {
  preview: React.ReactNode;
  full: React.ReactNode;
  buttonClass?: string;
}

export default function ExpandableText({
  preview,
  full,
  buttonClass = "text-accent",
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {preview}
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
        aria-hidden={!expanded}
      >
        {full}
      </motion.div>
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80 ${buttonClass}`}
      >
        {expanded ? "Show less" : "Read more"}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>
    </div>
  );
}
