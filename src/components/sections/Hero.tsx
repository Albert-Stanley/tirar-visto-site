import React from "react";
import { ArrowRight } from "lucide-react";
import Header from "../layout/Header";
import brunaVideo from "../../assets/images/bruna-video.png";
import heroRodaGigante from "../../assets/images/hero-roda-gigante.svg";
import setaDireita from "../../assets/icons/seta-direita.svg";

// Componente para os itens de estatística
const StatItem: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div className="text-center font-normal md:text-left">
    <p className="text-2xl font-medium text-[#232323] sm:text-3xl md:text-4xl">
      {value}
    </p>
    <p className="mt-1 text-xs whitespace-nowrap text-[#8D8D8D] sm:text-sm md:text-base">
      {label}
    </p>
  </div>
);

interface HeroProps {
  activeSection: string;
}

const Hero: React.FC<HeroProps> = ({ activeSection }) => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        {/* items-stretch para colunas de mesma altura */}
        <div className="grid min-h-screen grid-cols-1 items-center gap-2 md:grid-cols-2">
          {/* Coluna da Esquerda: Conteúdo */}
          <div className="flex flex-col py-10 md:py-4 lg:py-10">
            <Header activeSection={activeSection} />

            {/* Conteúdo principal da coluna esquerda */}
            <div className="mt-10 flex flex-grow flex-col gap-6">
              {/* Título principal */}
              <h1 className="text-[32px] leading-[1.2] font-medium text-black sm:text-[40px] md:text-[48px] lg:text-[50px]">
                Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
              </h1>

              {/* Divisor horizontal */}
              <hr className="mt-2 mb-4 border-gray-200" />

              {/* Botão e Card Bruna */}
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-5 md:items-start">
                {/* Texto */}
                <div className="flex flex-col justify-start md:col-span-3">
                  <p className="mb-4 text-base text-[16px] leading-tight font-normal text-[#8D8D8D]">
                    Com uma equipe altamente treinada, nós temos todos os
                    procedimentos para que seu processo seja o mais tranquilo e
                    rápido. Uma consultoria completa para você e sua família não
                    ter nenhuma preocupação na sua viagem.
                  </p>
                  <a
                    href="#services"
                    className="group mt-4 flex w-fit items-center justify-center gap-2 rounded-full bg-[#1B2543] px-4 py-3 text-sm font-semibold whitespace-nowrap text-white shadow-md transition-all hover:bg-blue-900 hover:shadow-lg"
                  >
                    Saiba mais
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1.5"
                    />
                  </a>
                </div>

                {/* Card da Bruna */}
                <div className="relative mt-10 w-full md:col-span-2">
                  <div className="flex flex-col items-start gap-3 text-left transition-transform hover:scale-105">
                    {/* Imagem */}
                    <div className="w-full">
                      <img
                        src={brunaVideo}
                        alt="Bruna, especialista em vistos"
                        className="h-auto w-full rounded-md object-cover"
                      />
                    </div>

                    {/* Textos abaixo da imagem */}
                    <div className="mt-2 w-full">
                      <p className="font-semibold text-[#232323]">
                        Conheça a Bruna
                      </p>
                      <div className="group mt-1 flex items-center justify-between text-sm text-[#545454] transition hover:text-[#0D1530]">
                        <a href="#about" className="text-sm">
                          Ver vídeo
                        </a>
                        <img
                          src={setaDireita}
                          alt="Seta para a direita"
                          className="h-6 w-6 transition-transform group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Números de impacto */}
              <div className="mt-auto pt-8 lg:mt-12">
                <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:gap-x-6 md:gap-y-8 md:divide-x md:divide-gray-200">
                  <StatItem value="509" label="Vistos Tirados" />
                  <StatItem value="602" label="Passaportes Tirados" />
                  <StatItem value="634" label="Famílias Felizes" />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Imagem com Overlay */}
          <div className="relative mx-auto mt-4 w-[90%] max-w-[280px] sm:max-w-[320px] md:h-[800px] md:max-w-[700px]">
            <img
              src={heroRodaGigante}
              alt="Roda gigante ao entardecer com iluminação, simbolizando a realização de sonhos de viagem"
              className="h-auto w-full rounded-2xl object-cover md:h-full"
            />

            {/* Conteúdo sobreposto na imagem */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">
              {/* Botão "Tirar meu visto agora!" no topo direito */}
              <div className="flex justify-end">
                <a
                  href="#contact"
                  className="rounded-4xl bg-[#F6C010] px-4 py-2 text-xs font-semibold text-[#282828] shadow-md transition hover:bg-yellow-300 hover:shadow-lg sm:px-5 sm:py-3 sm:text-sm"
                >
                  Tirar meu visto agora!
                </a>
              </div>

              {/* Texto sobreposto na parte inferior */}
              <div className="mt-auto text-left">
                <h3
                  className="text-2xl font-semibold text-white drop-shadow-lg sm:text-3xl md:text-4xl"
                  style={{ textShadow: "0px 2px 6px rgba(0, 0, 0, 0.7)" }}
                >
                  Realize o seu sonho com a ajuda da Tirar Visto!
                </h3>
                <p
                  className="mt-2 max-w-md text-sm font-normal text-white drop-shadow-md sm:mt-3 sm:text-base"
                  style={{ textShadow: "0px 1px 4px rgba(0, 0, 0, 0.7)" }}
                >
                  Com um serviço profissional, você não terá dor de cabeça
                  durante o processo do visto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
