import React from "react";
import bgLinear from "../../assets/images/destinos/background/bg-linear.jpg";

interface SectionHeaderProps {
  badgeText?: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  description,
  ctaText,
  ctaHref,
}) => {
  return (
    <div
      className="relative z-10 w-full py-20 text-center"
      style={{
        backgroundImage: `url(${bgLinear})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Conteúdo centralizado */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {badgeText && (
          <span className="mb-3 inline-block cursor-pointer rounded-full bg-[#F6C010] px-6 py-3 text-sm font-semibold text-[#282828] shadow-md hover:bg-[#F6C010]/80">
            {badgeText}
          </span>
        )}
        <h2 className="text-3xl font-medium text-[#232323] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-normal mx-auto mt-4 max-w-2xl text-[#8D8D8D] sm:text-lg">
            {description}
          </p>
        )}
        {ctaText && ctaHref && (
          <div className="mt-6">
            <a
              href={ctaHref}
              className="mt-4 inline-block rounded-full bg-[#1B2543] px-6 py-4 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#1B2543]/80 md:text-base lg:px-8 lg:py-5 lg:text-lg"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
