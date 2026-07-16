"use client";

import { Copy, Link, MousePointerClick } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "./input";
import { ButtomForm } from "./button";
import { CardStatistic } from "./card-statistic";
interface AboutCardProps {
  subscribId: string;
}
export function AboutCard({ subscribId }: AboutCardProps) {
  const api = `http://localhost:3333/invites/${subscribId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(api);
  };

  return (
    <aside className="space-y-10">
      <div className="space-y-1.5">
        <h2 className="font-semibold text-ft-gray-100 font-mono text-2xl md:text-3xl lg:text-4xl">
          Inscrição confirmada!
        </h2>
        <p>Para entrar no evento, acesse o link enviado para seu e-mail.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <h4 className="font-semibold text-lg md:text-xl text-ft-gray-200 font-mono">
            Indique e Ganhe
          </h4>
          <p>
            Convide mais pessoas para o evento e concorra a prêmios exclusivos!
            É só compartilhar o link abaixo e acompanhar as inscrições:
          </p>
        </div>
        <InputRoot>
          <InputIcon>
            <Link />
          </InputIcon>
          <InputField readOnly defaultValue={api} />
          <ButtomForm className="w-fit p-2" onClick={copyLink}>
            <Copy />
          </ButtomForm>
        </InputRoot>
        <div className="grid gap-5 md:grid-cols-3">
          <CardStatistic />
          <CardStatistic />
          <CardStatistic />
        </div>
      </div>
    </aside>
  );
}
