"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, LayoutDashboard, Settings, Trophy } from "lucide-react";
import { cn } from "@/lib/cn";

type NavItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const NAV: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/dashboard?tab=dashboard" },
  { id: "courses", label: "Courses", icon: BookOpen, href: "/dashboard?tab=courses" },
  { id: "achievements", label: "Achievements", icon: Trophy, href: "/dashboard?tab=achievements" },
  { id: "settings", label: "Settings", icon: Settings, href: "/dashboard?tab=settings" }
];

export function Sidebar() {
  const searchParams = useSearchParams();
  const active = (searchParams.get("tab") ?? "dashboard").toLowerCase();

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const sync = () => setCollapsed(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const activeIndex = useMemo(() => NAV.findIndex((n) => n.id === active), [active]);

  return (
    <>
      {/* Desktop / Tablet sidebar */}
      <aside className="hidden shrink-0 md:block">
        <nav
          aria-label="Primary"
          className={cn(
            "grain relative h-[calc(100dvh-3rem)] rounded-2xl border border-white/10 bg-white/[0.03] p-3",
            "transition-[width] duration-300",
            collapsed ? "w-16" : "w-56"
          )}
        >
          <div className="flex items-center justify-between gap-2 px-2 py-1">
            <div className={cn("text-sm font-semibold tracking-tight text-white/90", collapsed && "sr-only")}>
              LearnOS
            </div>
            <button
              type="button"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={() => setCollapsed((v) => !v)}
              className={cn(
                "hidden rounded-xl bg-white/0 px-2 py-2 text-xs text-white/70 ring-1 ring-white/10 transition hover:bg-white/10",
                "lg:inline-flex"
              )}
            >
              {collapsed ? "»" : "«"}
            </button>
          </div>

          <div className="mt-3 space-y-1">
            {NAV.map((item, idx) => {
              const Icon = item.icon;
              const isActive = item.id === active;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm",
                    "transition-[color] duration-200",
                    isActive ? "text-white" : "text-white/70 hover:text-white/90"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                      className={cn(
                        "absolute inset-0 rounded-xl",
                        "bg-gradient-to-r from-indigo-500/20 via-sky-500/15 to-emerald-500/15",
                        "ring-1 ring-white/10"
                      )}
                    />
                  ) : null}

                  <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className={cn("relative", collapsed && "sr-only")}>{item.label}</span>

                  {idx === activeIndex ? (
                    <span className="sr-only" aria-live="polite">
                      Current page: {item.label}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Mobile bottom nav */}
      <nav
        aria-label="Primary mobile"
        className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      >
        <div className="mx-auto max-w-7xl px-4 pb-4">
          <div className="grain flex items-center justify-around rounded-2xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur">
            {NAV.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === active;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "relative flex h-11 w-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px]",
                    isActive ? "text-white" : "text-white/65"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill-mobile"
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                      className="absolute inset-0 rounded-xl bg-white/10 ring-1 ring-white/10"
                    />
                  ) : null}
                  <Icon className="relative h-4 w-4" />
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

