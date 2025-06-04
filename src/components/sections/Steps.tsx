import FAMILIA_TURISTA from "../../assets/images/familia-turista.svg";
import StepItem from "../ui/StepItem";

const Steps = () => {
  return (
    <section className="bg-white py-10 font-sans sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        {/* TOPO */}
        <div className="mb-12 flex flex-col md:flex-row md:items-start md:justify-between lg:mb-16">
          {/* Lado esquerdo - Botão + Título */}
          <div className="md:w-2/5 md:pr-4">
            <div className="mb-6">
              <a
                href="#contact"
                className="focus:ring-opacity-75 inline-block rounded-full bg-[#F6C010] px-6 py-3 text-sm font-semibold text-[#282828] shadow-md transition hover:bg-yellow-300 hover:shadow-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              >
                Veja como funciona
              </a>
            </div>
            <h2 className="text-[32px] leading-tight font-medium text-gray-900 sm:text-4xl lg:text-5xl">
              Sua tranquilidade
              <br />
              não tem preço!
            </h2>
          </div>

          {/* Lado direito - Texto */}
          <div className="flex items-start md:w-3/5">
            <p className="mt-12 text-base text-[16px] leading-relaxed text-[#8D8D8D] sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {/* IMAGEM + ETAPAS */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          {/* Imagem à esquerda (60%) */}
          <div className="flex justify-center md:col-span-7 md:justify-start">
            <img
              src={FAMILIA_TURISTA}
              alt="Família feliz de turistas em um aeroporto, a família é um casal com a filha."
              className="h-auto w-full max-w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ maxHeight: "600px" }}
            />
          </div>

          {/* Etapas à direita (40%) */}
          <div className="space-y-6 md:col-span-5">
            <div className="space-y-6">
              <div>
                <StepItem title="Etapa Inicial" />
              </div>
              <hr className="border-t border-gray-300" />
              <div>
                <StepItem title="Processo de Entrevista" />
              </div>
              <hr className="border-t border-gray-300" />
              <div>
                <StepItem title="Entrega de Documentos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
