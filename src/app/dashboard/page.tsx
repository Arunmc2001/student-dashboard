import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { DashboardGridRsc } from "@/components/dashboard/DashboardGridRsc";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function DashboardPage({
  searchParams
}: {
  searchParams?: { tab?: string };
}) {
  const tab = (searchParams?.tab ?? "dashboard").toLowerCase();
  return (
    <DashboardShell>
      <Suspense fallback={null}>
        <DashboardGridRsc tab={tab} />
      </Suspense>
    </DashboardShell>
  );
}

