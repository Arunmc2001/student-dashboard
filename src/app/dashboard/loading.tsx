export default function DashboardLoading() {
  return (
    <main className="min-h-dvh">
      <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6 md:px-6">
        <aside className="hidden w-56 shrink-0 md:block">
          <div className="h-[calc(100dvh-3rem)] rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="h-10 rounded-xl bg-white/5" />
            <div className="mt-4 space-y-2">
              <div className="h-9 rounded-xl bg-white/5" />
              <div className="h-9 rounded-xl bg-white/5" />
              <div className="h-9 rounded-xl bg-white/5" />
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="grain lg:col-span-2 lg:row-span-2">
              <div className="h-56 animate-pulse rounded-3xl border border-white/10 bg-white/[0.04]" />
            </div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="grain">
                <div className="h-40 animate-pulse rounded-3xl border border-white/10 bg-white/[0.04]" />
              </div>
            ))}
            <div className="grain md:col-span-2 lg:col-span-2">
              <div className="h-44 animate-pulse rounded-3xl border border-white/10 bg-white/[0.04]" />
            </div>
          </div>
          <p className="mt-4 text-xs text-white/40">Loading dashboard…</p>
        </section>
      </div>
    </main>
  );
}

