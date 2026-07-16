import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { ComponentProps } from "react";

type InputRootProps = ComponentProps<"div">;
export function InputRoot({ className, children, ...props }: InputRootProps) {
  return (
    <div
      className={cn(
        `bg-ft-gray-800 flex gap-2 items-center border border-ft-gray-600 focus-within:border-ft-gray-100 py-2 px-3 rounded-md group`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type InputIconProps = ComponentProps<"span">;

export function InputIcon({ children, className, ...props }: InputIconProps) {
  return (
    <span
      className={cn(
        `group-[&:not(:has(input:placeholder-shown))]:text-ft-gray-100 group-hover:text-ft-gray-100`,
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

type InputFieldProps = ComponentProps<"input">;
export function InputField({
  className,
  placeholder = "Alguma informação",
  ...props
}: InputFieldProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className=" outline-0 placeholder-ft-gray-400 w-full text-ft-gray-200 "
      {...props}
    />
  );
}
