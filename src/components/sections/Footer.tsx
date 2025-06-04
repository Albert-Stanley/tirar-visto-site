import ArrowUp from "../../assets/icons/arrow-up.svg";

const FooterSection = () => {
  return (
    <footer className="bg-white px-6 py-20 text-gray-800 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Topo: Chamada para ação e inscrição de novidades */}
        <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Bloco de dúvida e botão */}
          <div className="space-y-5">
            <h2 className="text-4xl leading-snug font-medium text-gray-900 md:text-[42px]">
              Está com alguma <br className="hidden sm:block" /> dúvida?
            </h2>
            <p className="max-w-sm text-sm text-gray-500">
              Entre em contato através do nosso canal direto ao cliente através
              do botão abaixo
            </p>
            <button className="rounded-full bg-[#1B2543] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-300 hover:bg-blue-900">
              Central de Atendimento
            </button>
          </div>

          {/* Bloco: Receba novidades */}
          <div className="flex flex-col items-start justify-center md:items-end">
            <div className="group flex cursor-pointer items-center gap-2">
              <h3 className="text-4xl font-normal text-[#232323] group-hover:underline">
                Receba novidades
              </h3>
              <img
                src={ArrowUp}
                alt="Arrow icon"
                className="h-15 w-15 transition-transform duration-200 group-hover:translate-x-1"
              />
            </div>
            <hr className="mt-2 w-full border-gray-300 md:w-[400px]" />
          </div>
        </div>

        {/* Parte inferior: Redes sociais e colunas agrupadas */}
        <div className="mb-16 flex flex-col gap-10 md:flex-row">
          {/* Redes sociais */}
          <div className="w-full md:w-1/2">
            <h4 className="mb-4 text-base font-semibold text-gray-900">
              Siga em nossa redes:
            </h4>
            <div className="flex flex-wrap gap-3">
              {["Instagram", "X", "Facebook", "Youtube"].map((social) => (
                <button
                  key={social}
                  className="rounded-full border border-black px-4 py-1.5 text-sm text-black transition hover:bg-gray-100"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Agrupamento das 3 colunas */}
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 md:w-1/2">
            {/* Coluna: Empresa */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-900">
                Empresa
              </h4>
              <ul className="space-y-2 text-sm">
                {["Home", "Quem somos", "Serviços", "Contato"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna: Novidades */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-900">
                Novidades
              </h4>
              <ul className="space-y-2 text-sm">
                {["Passaporte", "Visto", "Entrevista", "Polícia Federal"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Coluna: Suporte */}
            <div>
              <h4 className="mb-4 text-base font-semibold text-gray-900">
                Suporte
              </h4>
              <ul className="space-y-2 text-sm">
                {["FAQ", "Contato", "Dúvidas Frequentes"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 transition-colors duration-200 hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé: direitos autorais */}
        <hr className="mb-6 border-gray-200" />
        <div className="text-center">
          <p className="text-xs text-gray-500">
            © 2025 Tirar Visto - Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
