"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Book,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Globe,
  GraduationCap,
  Layers,
  Library,
  Rocket,
  Sparkles
} from "lucide-react";
import type { CourseRow } from "@/types/courses";
import { cn } from "@/lib/cn";
import { BentoTile } from "@/components/dashboard/tiles/BentoTile";

const ICONS = {
  Atom,
  Book,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Globe,
  GraduationCap,
  Layers,
  Library,
  Rocket,
  Sparkles
} as const;

function CourseIcon({ name }: { name: string | null }) {
  const Icon = (name && (ICONS as Record<string, any>)[name]) || GraduationCap;
  return <Icon className="h-5 w-5 text-white/85" />;
}

export function CourseTile({ course }: { course: CourseRow }) {
  const progress = Math.max(0, Math.min(100, Math.round(course.progress ?? 0)));

  return (
    <BentoTile ariaLabel={`Course: ${course.title}`} className="min-h-40">
      <section className="relative p-6">
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -inset-6 opacity-[0.35] blur-2xl",
            "bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.18),transparent_60%)]"
          )}
        />

        <header className="relative flex items-start justify-between gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <CourseIcon name={course.icon_name} />
          </div>
          <div className="text-xs text-white/55">{progress}%</div>
        </header>

        <h3 className="relative mt-4 line-clamp-2 text-sm font-semibold leading-snug text-white/90">
          {course.title}
        </h3>

        <div className="relative mt-4">
          <div className="h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10" />
          <motion.div
            aria-hidden="true"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-indigo-400/70 via-sky-400/60 to-emerald-400/60"
            style={{ willChange: "width" }}
          />
        </div>

        <p className="relative mt-3 text-xs text-white/55">Continue where you left off.</p>
      </section>
    </BentoTile>
  );
}

