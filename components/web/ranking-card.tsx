import Image from "next/image";
import gold from "../../app/assets/gold.svg";

export function RankingCard() {
  return (
    <aside className="w-full max-w-[440px] space-y-5">
      <h2 className="text-ft-gray-200 font-mono text-xl md:text-2xl">
        Ranking de informações
      </h2>
      <div>
        <div className="space-y-2 bg-ft-gray-700 px-6 py-5 rounded-md border border-ft-gray-600 relative">
          <p>
            <span className="text-ft-gray-100 tracking-widest">1º</span> André
            Souza
          </p>
          <h2 className="text-ft-gray-200 font-semibold text-lg md:text-xl font-mono">
            1.129
          </h2>
          <Image src={gold} alt="image" className="absolute top-0 right-8" />
        </div>
      </div>
    </aside>
  );
}
