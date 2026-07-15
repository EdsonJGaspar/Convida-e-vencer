import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ButtomFormProps = ComponentProps<"button">;

export function ButtomForm({ children, className, ...props }: ButtomFormProps) {
  return (
    <button
      className={cn(
        `px-5 py-3 bg-ft-gray-500 text-ft-blue w-full text-left rounded-xl font-serif font-semibold tracking-wide cursor-pointer flex justify-between hover:text-ft-gray-900 hover:bg-ft-blue transition-colors duration-300`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
