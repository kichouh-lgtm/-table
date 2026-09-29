import Link from "next/link";
import ShoppingListView from "@/components/ShoppingList";
import { buildShoppingList } from "@/lib/shopping";
import { getPlanRecipes } from "@/lib/plan";

export default async function Page({ params }: { params: Promise<{ planId: string }> }) {
  const { planId } = await params;
  const recipes = await getPlanRecipes(planId);
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">🛒 Liste de courses</h1>
      <ShoppingListView list={buildShoppingList(recipes)} />
      <ul className="text-sm underline">
        {recipes.map((r) => <li key={r.id}><Link href={`/recettes/${r.id}`}>{r.title}</Link></li>)}
      </ul>
    </main>
  );
}
