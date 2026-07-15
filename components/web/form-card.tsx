import { ArrowRight, Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "./input";
import { ButtomForm } from "./button";

export function FormCard() {
  return (
    <form className="p-8 bg-ft-gray-600 space-y-6 w-full max-w-[440px] rounded-md">
      <h2 className="text-ft-gray-200 font-semibold font-mono">Inscrição</h2>
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField placeholder="Nome completo" />
        </InputRoot>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField placeholder="E-mail" />
        </InputRoot>
      </div>
      <ButtomForm>
        Confirmar <ArrowRight />{" "}
      </ButtomForm>
    </form>
  );
}
