import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { DashboardGridRsc } from "@/components/dashboard/DashboardGridRsc";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type PageProps = {
  searchParams: Promise<{
    tab?: string;
  }>;
};

export default async function DashboardPage({
  searchParams,
}: PageProps) {

  const params = await searchParams;
  const tab = (params?.tab ?? "dashboard").toLowerCase();

  return (
    <DashboardShell>
      <Suspense fallback={null}>
        <DashboardGridRsc tab={tab} />
      </Suspense>
    </DashboardShell>
  );
}
