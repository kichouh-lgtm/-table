import { redirect } from "next/navigation";
import WeekCalendar from "@/components/WeekCalendar";
import { validatePlan } from "@/actions/plan";
import { getPlanRecipes } from "@/lib/plan";

export default async function Page({ params }: { params: Promise<{ planId: string }> }) {
  const { planId } = await params;
  const recipes = await getPlanRecipes(planId);
  async function validate() {
    "use server";
    await validatePlan(planId);
    redirect(`/semaine/${planId}/courses`);
  }
  return (
    <main className="mx-auto max-w-6xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">Ton calendrier</h1>
      <p className="text-sm text-gray-600">Glisse les recettes pour changer les jours.</p>
      <WeekCalendar planId={planId} initial={recipes} />
      <form action={validate}>
        <button className="rounded bg-emerald-600 px-4 py-2 text-white">Valider le planning → liste de courses</button>
      </form>
    </main>
  );
}
