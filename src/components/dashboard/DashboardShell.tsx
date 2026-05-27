import { Sidebar } from "@/components/dashboard/Sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-dvh">
      <div className="mx-auto flex max-w-7xl gap-4 px-4 py-6 md:px-6">
        <Sidebar />
        <section className="min-w-0 flex-1">{children}</section>
      </div>
    </main>
  );
}

