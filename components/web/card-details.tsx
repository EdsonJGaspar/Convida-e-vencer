export function CardDetails() {
  return (
    <div className="bg-ft-gray-600 text-ft-gray-300 p-8 space-y-8 rounded-md flex-1">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-ft-gray-200 font-semibold text-lg md:text-xl font-mono">
          Sobre o evento
        </h1>
        <span className="font-medium text-xs md:text-sm uppercase text-ft-purple">
          Ao vivo
        </span>
      </div>
      <p className="text-justify">
        Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar
        soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas
        tendências mais recentes em desenvolvimento de software, arquitetura de
        sistemas e tecnologias emergentes, com palestras, workshops e
        hackathons.
        <br />
        <br />
        <span>Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito </span>
      </p>
    </div>
  );
}
