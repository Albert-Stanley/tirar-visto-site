import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
