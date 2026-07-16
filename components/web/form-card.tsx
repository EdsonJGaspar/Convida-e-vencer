"use client";
import { ArrowRight, Mail, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "./input";
import { ButtomForm } from "./button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { subscribeToEvent } from "@/app/src/http/api";
import { useRouter } from "next/navigation";

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.email("Digite um email valido"),
});
type SubscriptionSchema = z.infer<typeof subscriptionSchema>;
export function FormCard() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>();

  async function SubscribeInvited({ name, email }: SubscriptionSchema) {
    const { subscriberId } = await subscribeToEvent({ name, email });

    router.push(`/invite/${subscriberId}`);
  }

  return (
    <form
      onSubmit={handleSubmit(SubscribeInvited)}
      className="p-8 bg-ft-gray-700 space-y-6 w-full max-w-[441px] rounded-md border border-ft-gray-600"
    >
      <h2 className="text-ft-gray-200 font-semibold font-mono">Inscrição</h2>
      <div className="space-y-3">
        <div>
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField placeholder="Nome completo" {...register("name")} />
          </InputRoot>
          {errors.name && (
            <p className="text-xs md:text-sm text-shadow-ft-dunger">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField placeholder="E-mail" {...register("email")} />
          </InputRoot>
          {errors.email && (
            <p className="text-xs md:text-sm text-shadow-ft-dunger">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <ButtomForm>
        Confirmar <ArrowRight />{" "}
      </ButtomForm>
    </form>
  );
}
