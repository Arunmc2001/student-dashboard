"use client";

import { motion, type Variants } from "framer-motion";
import type { CourseRow } from "@/types/courses";
import { HeroTile } from "@/components/dashboard/tiles/HeroTile";
import { ActivityTile } from "@/components/dashboard/tiles/ActivityTile";
import { CourseTile } from "@/components/dashboard/tiles/CourseTile";

export function DashboardGrid({
  tab,
  name,
  streak,
  courses
}: {
  tab: string;
  name: string;
  streak: number;
  courses: CourseRow[];
}) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 26, mass: 0.7 }
    }
  };

  return (
    <motion.section
      aria-label="Dashboard bento grid"
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-24 md:pb-0"
    >
      {courses.length === 0 ? (
        <div className="mb-4 rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-4 text-sm text-white/75">
          <p className="font-medium text-white/90">Connect Supabase to load courses.</p>
          <p className="mt-1 text-xs text-white/65">
            Add <code className="rounded bg-white/10 px-1.5 py-0.5">SUPABASE_URL</code> and{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5">SUPABASE_ANON_KEY</code> to{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5">.env.local</code>, then refresh.
          </p>
        </div>
      ) : null}
      {tab === "dashboard" ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={item} className="lg:col-span-2 lg:row-span-2">
            <HeroTile name={name} streak={streak} />
          </motion.div>

          {courses.slice(0, 4).map((course) => (
            <motion.div key={course.id} variants={item}>
              <CourseTile course={course} />
            </motion.div>
          ))}

          <motion.div variants={item} className="md:col-span-2 lg:col-span-2">
            <ActivityTile />
          </motion.div>
        </div>
      ) : tab === "courses" ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={item} className="md:col-span-2 lg:col-span-4">
            <div className="grain rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold tracking-tight text-white/90">Courses</h2>
              <p className="mt-1 text-sm text-white/65">Active courses fetched from Supabase.</p>
            </div>
          </motion.div>
          {courses.map((course) => (
            <motion.div key={course.id} variants={item}>
              <CourseTile course={course} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={item} className="md:col-span-2 lg:col-span-4">
            <div className="grain rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold tracking-tight text-white/90">
                {tab === "achievements" ? "Achievements" : "Settings"}
              </h2>
              <p className="mt-1 text-sm text-white/65">
                Prototype navigation is now wired; this section is a placeholder tile.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}

