import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-4xl flex-col justify-center px-6">
      <section className="grain rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.55)]">
        <h1 className="text-balance text-3xl font-semibold tracking-tight">Student Dashboard Prototype</h1>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-white/70">
          Dark-mode Bento dashboard with Supabase server fetching and Framer Motion interactions.
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 transition hover:bg-white/15"
          >
            Open dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}

