import React from "react";

interface DestinationCardProps {
  imageUrl: string;
  imageAlt: string;
  width: number;
  height: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  imageUrl,
  imageAlt,
  width,
  height,
}) => {
  return (
    <img
      src={imageUrl}
      alt={imageAlt}
      width={width}
      height={height}
      className="mt-1 w-[280px] cursor-pointer rounded-lg object-cover p-1 transition-transform duration-300 hover:scale-105"
      style={{ height: `${height}px` }}
    />
  );
};

export default DestinationCard;
