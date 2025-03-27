"use client";
import React from "react";

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col flex-1 shrink justify-center px-3 py-5 rounded-xl basis-0 bg-[#CACACA] bg-opacity-[20%] min-w-60">
      <h3 className="font-bold leading-tight text-neutral-800">{title}</h3>
      <p className="mt-3.5 font-light leading-5 text-gray-500">{description}</p>
    </article>
  );
};

export default BenefitCard;
