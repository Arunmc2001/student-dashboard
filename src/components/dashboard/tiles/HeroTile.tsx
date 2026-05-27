"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { BentoTile } from "@/components/dashboard/tiles/BentoTile";

export function HeroTile({ name, streak }: { name: string; streak: number }) {
  return (
    <BentoTile ariaLabel="Welcome hero tile" className="h-full min-h-56">
      <section className="flex h-full flex-col justify-between p-6">
        <header>
          <p className="text-xs font-medium tracking-wide text-white/60">Student Dashboard</p>
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight">
            Welcome back, <span className="text-white">{name}</span>
          </h2>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/65">
            Your learning system is synced. Keep the streak alive with one focused session today.
          </p>
        </header>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 text-xs font-medium text-white/70">
              <Flame className="h-4 w-4 text-orange-300/90" />
              Daily streak
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-3xl font-semibold tracking-tight">{streak}</span>
              <span className="pb-1 text-sm text-white/55">days</span>
            </div>
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="mt-3 h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10"
            >
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-orange-400/70 via-rose-400/60 to-indigo-400/60" />
            </motion.div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-xs font-medium text-white/70">Today</div>
            <div className="mt-2 text-sm text-white/70">
              <span className="font-medium text-white/90">1</span> course in progress
            </div>
            <div className="mt-1 text-sm text-white/70">
              <span className="font-medium text-white/90">20</span> min target
            </div>
            <div className="mt-3 rounded-xl bg-white/5 px-3 py-2 text-[11px] text-white/60 ring-1 ring-white/10">
              Tip: complete a small unit to keep momentum.
            </div>
          </div>
        </div>
      </section>
    </BentoTile>
  );
}

