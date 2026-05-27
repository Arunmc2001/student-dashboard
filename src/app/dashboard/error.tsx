"use client";

export default function DashboardError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-6">
      <section className="grain rounded-3xl border border-red-500/20 bg-red-500/[0.06] p-8">
        <h1 className="text-xl font-semibold">Dashboard failed to load</h1>
        <p className="mt-2 text-sm text-white/70">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 transition hover:bg-white/15"
        >
          Try again
        </button>
      </section>
    </main>
  );
}

