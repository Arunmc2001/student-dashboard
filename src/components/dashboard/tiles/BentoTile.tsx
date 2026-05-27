"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function BentoTile({
  children,
  className,
  ariaLabel
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
}) {
  return (
    <motion.article
      aria-label={ariaLabel}
      whileHover={{ scale: 1.015, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "grain group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_90px_rgba(0,0,0,0.45)]",
        "will-change-transform",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200",
          "group-hover:opacity-100",
          "bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-emerald-500/10"
        )}
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition group-hover:ring-white/10" />
      <div className="relative h-full">{children}</div>
    </motion.article>
  );
}

