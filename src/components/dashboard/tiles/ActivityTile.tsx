"use client";

import { BentoTile } from "@/components/dashboard/tiles/BentoTile";

function barHeights() {
  // Deterministic "mock" activity bars (no layout shift; only opacity/transform elsewhere)
  return [2, 4, 3, 6, 5, 8, 7, 10, 6, 9, 11, 8, 7, 12, 10, 9, 14, 11, 12, 15];
}

export function ActivityTile() {
  const bars = barHeights();

  return (
    <BentoTile ariaLabel="Activity tile" className="min-h-44">
      <section className="p-6">
        <header className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-tight text-white/90">Activity</h3>
          <span className="text-xs text-white/55">Last 20 days</span>
        </header>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <div className="grid grid-cols-20 items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="w-full rounded-sm bg-gradient-to-t from-emerald-400/20 via-sky-400/20 to-indigo-400/25 ring-1 ring-white/5"
                style={{ height: `${h * 6}px` }}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-3 text-xs text-white/55">
            Consistency beats intensity. Small daily progress compounds.
          </p>
        </div>
      </section>
    </BentoTile>
  );
}

