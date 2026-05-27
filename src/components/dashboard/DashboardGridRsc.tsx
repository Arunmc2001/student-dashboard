import { hasSupabaseEnv, supabaseServer } from "@/lib/supabase/server";
import type { CourseRow } from "@/types/courses";
import { DashboardGrid } from "@/components/dashboard/DashboardGrid";

export async function DashboardGridRsc({ tab }: { tab: string }) {
  if (!hasSupabaseEnv()) {
    return <DashboardGrid tab={tab} name="Arun" streak={12} courses={[]} />;
  }

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    throw new Error(`Supabase error: ${error.message}`);
  }

  const courses = (data ?? []) as CourseRow[];

  return <DashboardGrid tab={tab} name="Arun" streak={12} courses={courses} />;
}

