import { AboutCard } from "@/components/web/about-card";
import Image from "next/image";
import logo from "../../assets/Logo.svg";

import { RankingCard } from "@/components/web/ranking-card";
interface InvitePageProps {
  params: Promise<{
    subscribId: string;
  }>;
}
export default async function InvitePage({ params }: InvitePageProps) {
  const { subscribId } = await params;
  return (
    <main className="flex flex-col justify-center items-center min-h-dvh py-3 px-4">
      <div className="space-y-16">
        <h1>
          <Image src={logo} alt="Imagem do logo" />
        </h1>
        <section className="flex flex-col gap-10 md:flex-row md:gap-28  ">
          <AboutCard subscribId={subscribId} />
          <RankingCard />
        </section>
      </div>
    </main>
  );
}
