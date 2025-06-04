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
      className="w-[280px]"
      style={{ height: `${height}px` }}
    />
  );
};

export default DestinationCard;
