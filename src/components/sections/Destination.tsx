import React from "react";
import SectionHeader from "../../components/layout/DestinationHeader";
import DestinationCard from "../../components/ui/DestinationCard";
import { destinationsData } from "../../data/destinationsData";

const Destinations: React.FC = () => {
  return (
    <section className="relative z-0 py-20">
      {/* Header com background linear */}
      <SectionHeader
        badgeText="Top Destinos"
        title="Destinos mais procurados"
        description="Confira os destinos mais procurados por nossos clientes nos últimos meses, qual será o seu novo destino?"
        ctaText="Conheça mais"
        ctaHref="#explore-more"
      />
      {/* Conteúdo container */}
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="flex max-w-[880px] flex-wrap justify-center gap-x-2 gap-y-1">
            {destinationsData.map((destination, index) => {
              const marginTopClass =
                destination.group === 1 || destination.group === 2
                  ? "mt-10 "
                  : "";

              return (
                <div key={index} className={marginTopClass}>
                  <DestinationCard
                    imageUrl={destination.imageUrl}
                    imageAlt={destination.imageAlt}
                    width={destination.width}
                    height={destination.height}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
