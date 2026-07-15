import { MousePointerClick } from "lucide-react";

export function CardStatistic() {
  return (
    <div className="relative p-6 bg-ft-gray-700 flex items-center justify-center flex-col rounded-lg">
      <h2 className="text-ft-gray-200 font-semibold text-lg md:text-xl font-mono">
        972
      </h2>
      <p>Acesso ao link</p>
      <span className="absolute top-3 left-3">
        <MousePointerClick />
      </span>
    </div>
  );
}
