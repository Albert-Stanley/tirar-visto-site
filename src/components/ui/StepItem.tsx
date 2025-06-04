import { useState } from "react";

interface StepItemProps {
  title: string;
}

const StepItem = ({ title }: StepItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  const handleToggle = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-start rounded-lg bg-white p-4">
      <h3 className="mb-2 text-[34px] font-semibold text-[#232323]">{title}</h3>

      {showDescription && (
        <p className="mb-4 text-base text-[#8D8D8D]">{description}</p>
      )}

      <button
        onClick={handleToggle}
        className="text-sm font-semibold text-[#232323] hover:underline"
      >
        {showDescription ? "- Fechar" : "+ Leia mais"}
      </button>
    </div>
  );
};

export default StepItem;
