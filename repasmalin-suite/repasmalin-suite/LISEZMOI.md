# Suite RepasMalin
Copie ces fichiers dans ton projet (mêmes chemins), puis :

    npm i -D tsx
    # package.json : ajoute  "prisma": { "seed": "tsx prisma/seed.ts" }
    npx prisma migrate dev --name init
    npx prisma db seed
    npm run dev

## Patch à faire dans src/actions/plan.ts
Ajoute `import { revalidatePath } from "next/cache";` et, à la fin de `replaceInDraft`
et de `saveOrder` : `revalidatePath(`/semaine/${planId}`);`
(sinon la liste ne se rafraîchit pas après un 🔄).

## Parcours
/ -> choix des sources -> /semaine/[id] (🔄) -> /calendrier (drag & drop, valider) -> /courses
