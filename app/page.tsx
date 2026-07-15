import { CardDetails } from "@/components/web/card-details";
import { FormCard } from "@/components/web/form-card";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-dvh py-4 px-4 md:px-2">
      <div className="space-y-16">
        <h1 className="text-ft-gray-100 text-2xl md:text-4xl lg:text-5xl flex flex-col gap-1 md:gap-3">
          <span className="block text-ft-blue ">CodeCraft </span>
          Submmit 2026
        </h1>

        <section className="flex gap-8 flex-col md:flex-row justify-stretch">
          <CardDetails />
          <FormCard />
        </section>
      </div>
    </main>
  );
}
