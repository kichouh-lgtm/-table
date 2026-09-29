// Recettes d EXEMPLE (écrites pour les tests, pas issues des sites sources).
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type I = [string, number | null, string | null];
const R = (source: string, title: string, prepMin: number, cookMin: number, servings: number, ing: I[], steps: string[]) => ({
  source, title, prepMin, cookMin, servings,
  ingredients: ing.map(([name, quantity, unit]) => ({ name, quantity, unit })), steps,
});

const data = [
  R("KOOKMUTJES", "Poulet rôti aux carottes", 15, 60, 4, [["poulet", 1, null], ["carottes", 600, "g"], ["oignon", 2, null], ["huile d olive", 2, "cs"], ["sel", null, null]],
    ["Préchauffer le four à 200 °C.", "Disposer légumes et poulet dans un plat, huiler et saler.", "Enfourner 1 h en arrosant à mi-cuisson."]),
  R("KOOKMUTJES", "Spaghetti bolognaise", 15, 40, 4, [["spaghetti", 400, "g"], ["boeuf haché", 400, "g"], ["oignon", 1, null], ["tomates concassées", 400, "g"], ["ail", 2, null]],
    ["Faire revenir oignon et ail.", "Ajouter la viande puis les tomates, mijoter 30 min.", "Cuire les pâtes et servir."]),
  R("KOOKMUTJES", "Stoemp aux saucisses", 20, 30, 4, [["pommes de terre", 1, "kg"], ["carottes", 400, "g"], ["poireau", 2, null], ["saucisses", 4, null], ["beurre", 50, "g"], ["lait", 10, "cl"]],
    ["Cuire les légumes à l eau.", "Écraser avec beurre et lait.", "Poêler les saucisses et servir."]),
  R("KOOKMUTJES", "Gratin de chicons au jambon", 20, 35, 4, [["endives", 8, null], ["jambon", 8, "tranches"], ["beurre", 40, "g"], ["farine", 40, "g"], ["lait", 50, "cl"], ["fromage râpé", 150, "g"]],
    ["Cuire les endives à la vapeur.", "Les rouler dans le jambon.", "Napper de béchamel, fromage, gratiner 25 min à 200 °C."]),
  R("KOOKMUTJES", "Saumon et riz", 10, 20, 4, [["pavés de saumon", 4, null], ["riz", 300, "g"], ["citron", 1, null], ["huile d olive", 1, "cs"]],
    ["Cuire le riz.", "Poêler le saumon 4 min par face.", "Servir avec le citron."]),
  R("KOOKMUTJES", "Omelette aux champignons", 10, 10, 2, [["oeufs", 6, null], ["champignons", 250, "g"], ["beurre", 20, "g"], ["persil", null, null]],
    ["Faire sauter les champignons.", "Verser les œufs battus.", "Plier et servir avec persil."]),
  R("KOOKMUTJES", "Soupe de courgettes", 10, 25, 4, [["courgettes", 800, "g"], ["pommes de terre", 200, "g"], ["oignon", 1, null], ["bouillon de légumes", 75, "cl"], ["crème", 10, "cl"]],
    ["Faire revenir l oignon.", "Ajouter légumes et bouillon, cuire 20 min.", "Mixer avec la crème."]),
  R("COOKOMIX", "Risotto aux champignons (Thermomix)", 10, 25, 4, [["riz rond", 300, "g"], ["champignons", 250, "g"], ["oignon", 1, null], ["bouillon de légumes", 90, "cl"], ["parmesan", 60, "g"], ["beurre", 30, "g"]],
    ["Hacher l oignon 5 s/vit 5.", "Rissoler beurre 3 min/120 °C, ajouter riz et champignons.", "Bouillon, 16 min/100 °C/sens inverse/vit 1, parmesan."]),
  R("COOKOMIX", "Velouté de carottes (Thermomix)", 10, 25, 4, [["carottes", 700, "g"], ["pommes de terre", 200, "g"], ["oignon", 1, null], ["bouillon de légumes", 75, "cl"], ["crème", 10, "cl"]],
    ["Hacher oignon 5 s/vit 5.", "Ajouter le reste, cuire 25 min/100 °C/vit 1.", "Mixer 1 min progressif vit 5 à 10."]),
  R("COOKOMIX", "Sauce bolognaise (Thermomix)", 10, 35, 4, [["boeuf haché", 400, "g"], ["oignon", 1, null], ["carottes", 1, null], ["tomates concassées", 400, "g"], ["spaghetti", 400, "g"]],
    ["Hacher légumes 5 s/vit 5.", "Ajouter viande, 5 min/120 °C, puis tomates.", "Cuire 30 min/100 °C, servir sur les pâtes."]),
  R("COOKOMIX", "Pain de viande (Thermomix)", 15, 45, 4, [["boeuf haché", 500, "g"], ["oignon", 1, null], ["chapelure", 50, "g"], ["oeufs", 1, null], ["ail", 1, null]],
    ["Hacher oignon et ail.", "Ajouter viande, œuf, chapelure, pétrir 30 s.", "Cuire au four 45 min à 180 °C."]),
  R("COOKOMIX", "Purée express (Thermomix)", 10, 25, 4, [["pommes de terre", 1, "kg"], ["lait", 20, "cl"], ["beurre", 50, "g"], ["sel", null, null]],
    ["Cuire les pommes de terre au Varoma.", "Mettre dans le bol avec lait et beurre.", "Mixer 20 s/sens inverse/vit 3."]),
  R("COOKOMIX", "Quiche lorraine (Thermomix)", 15, 40, 6, [["farine", 250, "g"], ["beurre", 125, "g"], ["lardons", 200, "g"], ["oeufs", 3, null], ["crème", 20, "cl"], ["lait", 10, "cl"]],
    ["Pâte : farine, beurre, eau, 30 s/vit 6.", "Garnir de lardons.", "Mixer œufs, crème et lait, verser, cuire 40 min à 180 °C."]),
  R("COOKOMIX", "Riz cantonais (Thermomix)", 10, 20, 4, [["riz", 300, "g"], ["oeufs", 3, null], ["jambon", 4, "tranches"], ["petits pois surgelés", 150, "g"], ["huile", 1, "cs"]],
    ["Cuire le riz au panier.", "Faire les œufs brouillés dans le bol.", "Mélanger avec jambon et petits pois."]),
];

async function main() {
  await prisma.recipe.deleteMany();
  for (const r of data) await prisma.recipe.create({ data: r });
  console.log(`${data.length} recettes insérées`);
}
main().finally(() => prisma.$disconnect());
