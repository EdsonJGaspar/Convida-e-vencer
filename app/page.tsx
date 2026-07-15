import { CardDetails } from "@/components/web/card-details";
import { FormCard } from "@/components/web/form-card";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-dvh py-6 md:py-2">
      <div>
        <section>
          <h1 className="text-ft-gray-100">
            <span className="block text-ft-blue ">CodeCraft </span>
            Submmit 2026
          </h1>
        </section>
        <section className="flex gap-8 flex-col md:flex-row justify-stretch">
          <CardDetails />
          <FormCard />
        </section>
      </div>
    </main>
  );
}
