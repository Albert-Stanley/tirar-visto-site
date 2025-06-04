import telefone from "../../assets/icons/telefone-icon.svg";
import relogio from "../../assets/icons/relogio-icon.svg";

const Banner: React.FC = () => {
  return (
    <section className="mt-6 bg-[#F7F7F7] px-4 py-6 text-[#232323]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-6">
        {/* Primeira linha */}
        <div className="flex flex-col md:flex-row">
          {/* Texto à esquerda ocupa mais espaço */}
          <div className="flex w-full items-center justify-start md:w-[70%] md:pr-8">
            <p className="text-[28px] leading-tight font-medium uppercase sm:text-[36px] lg:text-[44px] xl:text-[52px]">
              Consultoria completa para
              <br />
              tirar seu visto
            </p>
          </div>
          {/* Ícone à direita */}
          <div className="flex w-full items-center justify-center md:w-[30%]">
            <img
              src={telefone}
              alt="Ícone Telefone"
              className="h-28 w-28 lg:h-36 lg:w-36"
            />
          </div>
        </div>

        {/* Segunda linha */}
        <div className="flex flex-col md:flex-row">
          {/* Ícone à esquerda */}
          <div className="flex w-full items-center justify-center md:w-[30%]">
            <img
              src={relogio}
              alt="Ícone Relógio"
              className="h-28 w-28 lg:h-36 lg:w-36"
            />
          </div>
          {/* Texto à direita */}
          <div className="flex w-full items-center justify-end text-right md:w-[70%] md:pl-8">
            <p className="text-[28px] leading-tight font-medium uppercase italic sm:text-[36px] lg:text-[44px] xl:text-[52px]">
              você está em boas mãos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
