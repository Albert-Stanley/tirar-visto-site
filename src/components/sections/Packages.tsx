import React from "react";
import Card from "../../components/layout/Card";
import TabButton from "../../components/ui/TabButton";
import passaporte from "../../assets/images/passport.svg";
import passaporteMaisVisto from "../../assets/images/passport-visto.svg";
import consultoria from "../../assets/images/consultoria.svg";
import setaDireita from "../../assets/icons/seta-direita-carrosel.svg";
import setaEsquerda from "../../assets/icons/seta-esquerda.svg";

interface PackageItem {
  id: string;
  image: string;
  title: string;
  tabs: {
    label: string;
    content: {
      type: string;
      time: string;
    };
  }[];
  price: string;
}

const packagesData: PackageItem[] = [
  {
    id: "1",
    image: passaporte,
    title: "Passaporte",
    tabs: [
      {
        label: "Basic",
        content: {
          type: "Atendimento",
          time: "On-line",
        },
      },
      {
        label: "Premium",
        content: {
          type: "Tempo",
          time: "45 dias",
        },
      },
    ],
    price: "R$ 890,00",
  },
  {
    id: "2",
    image: passaporteMaisVisto,
    title: "Passaporte + Visto",
    tabs: [
      {
        label: "Basic",
        content: {
          type: "Atendimento",
          time: "On-line + Presencial",
        },
      },
      {
        label: "Premium",
        content: {
          type: "Tempo",
          time: "25 dias",
        },
      },
    ],
    price: "R$ 1.290,00",
  },
  {
    id: "3",
    image: consultoria,
    title: "Consultoria Completa",
    tabs: [
      {
        label: "Basic",
        content: {
          type: "Atendimento",
          time: "Presencial Completo",
        },
      },
      {
        label: "Premium",
        content: {
          type: "Duration",
          time: "10 dias",
        },
      },
    ],
    price: "R$ 1.890,00",
  },
];

const Packages: React.FC = () => {
  const [activeTabs, setActiveTabs] = React.useState<{ [key: string]: string }>(
    packagesData.reduce((acc, pkg) => ({ ...acc, [pkg.id]: "Basic" }), {}),
  );

  const handleTabClick = (packageId: string, tabLabel: string) => {
    setActiveTabs((prev) => ({
      ...prev,
      [packageId]: tabLabel,
    }));
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-[#F6C010] px-5 py-2 text-sm font-semibold text-[#282828]">
              Pacotes
            </span>
            <h2 className="text-3xl font-semibold text-[#1B2543] sm:text-4xl md:text-5xl">
              Confira nossos pacotes
            </h2>
          </div>
          <div className="hidden space-x-3 md:flex">
            <img
              src={setaEsquerda}
              alt="voltar"
              className="h-10 w-10 cursor-pointer transition hover:scale-110"
            />
            <img
              src={setaDireita}
              alt="avançar"
              className="h-10 w-10 cursor-pointer transition hover:scale-110"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {packagesData.map((pkg) => (
            <Card
              key={pkg.id}
              className="flex flex-col overflow-hidden rounded-2xl shadow-md"
            >
              <div className="flex h-64 w-full items-center justify-center bg-gray-50">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="mb-3 flex space-x-2">
                  {pkg.tabs.map((tab) => (
                    <TabButton
                      key={tab.label}
                      isActive={activeTabs[pkg.id] === tab.label}
                      onClick={() => handleTabClick(pkg.id, tab.label)}
                    >
                      {tab.label}
                    </TabButton>
                  ))}
                </div>

                <h3 className="mb-2 text-xl font-bold text-[#1B2543]">
                  {pkg.title}
                </h3>

                {pkg.tabs.map((tab) =>
                  activeTabs[pkg.id] === tab.label ? (
                    <p key={tab.label} className="mb-4 text-sm text-gray-700">
                      <strong>{tab.content.type}:</strong> {tab.content.time}
                    </p>
                  ) : null,
                )}

                <div className="mt-auto flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">A partir de</p>
                    <p className="text-2xl font-bold text-[#1B2543]">
                      {pkg.price}
                    </p>
                  </div>
                  <a
                    className="inline-block rounded-full bg-[#1B2543] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#1B2543]/80"
                    href="#"
                  >
                    Contratar
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
