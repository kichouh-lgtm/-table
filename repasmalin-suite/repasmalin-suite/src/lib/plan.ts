import { prisma } from "./db";
import type { Recipe } from "./types";

export async function getPlanRecipes(planId: string): Promise<Recipe[]> {
  const plan = await prisma.weekPlan.findUniqueOrThrow({
    where: { id: planId },
    include: { slots: { orderBy: { day: "asc" } } },
  });
  const recipes = await prisma.recipe.findMany({ where: { id: { in: plan.slots.map((s) => s.recipeId) } } });
  return plan.slots.map((s) => recipes.find((r) => r.id === s.recipeId)!) as unknown as Recipe[];
}

export function nextMonday(from = new Date()) {
  const d = new Date(from);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + ((8 - d.getDay()) % 7 || 7));
  return d;
}
