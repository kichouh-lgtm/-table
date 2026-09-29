import { redirect } from "next/navigation";
import { createDraft } from "@/actions/plan";
import { nextMonday } from "@/lib/plan";
import type { SourceId } from "@/lib/types";

async function start(fd: FormData) {
  "use server";
  const sources = fd.getAll("sources") as SourceId[];
  if (!sources.length) return;
  const plan = await createDraft(nextMonday(), sources);
  redirect(`/semaine/${plan.id}`);
}

export default function Home() {
  return (
    <main className="mx-auto max-w-md space-y-6 p-8">
      <h1 className="text-3xl font-bold">🍽️ RepasMalin</h1>
      <form action={start} className="space-y-4">
        <p className="font-medium">Sources de recettes</p>
        <label className="flex items-center gap-2"><input type="checkbox" name="sources" value="KOOKMUTJES" defaultChecked /> Kookmutjes (classique)</label>
        <label className="flex items-center gap-2"><input type="checkbox" name="sources" value="COOKOMIX" defaultChecked /> Cookomix (Thermomix)</label>
        <button className="rounded bg-emerald-600 px-4 py-2 text-white">Générer ma semaine</button>
      </form>
    </main>
  );
}
