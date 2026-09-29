import Link from "next/link";
import WeekSelection from "@/components/WeekSelection";
import { getPlanRecipes } from "@/lib/plan";

export default async function Page({ params }: { params: Promise<{ planId: string }> }) {
  const { planId } = await params;
  const recipes = await getPlanRecipes(planId);
  return (
    <main className="mx-auto max-w-2xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">Ta sélection de la semaine</h1>
      <p className="text-sm text-gray-600">Choisis 1 à 3 recettes à remplacer, ou valide la sélection.</p>
      <WeekSelection planId={planId} recipes={recipes} />
      <Link href={`/semaine/${planId}/calendrier`} className="inline-block rounded bg-gray-900 px-4 py-2 text-white">
        Valider et organiser →
      </Link>
    </main>
  );
}
