"use client";
import React from "react";

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col justify-center px-3 py-4 md:py-5 rounded-xl bg-[#F4F4F4] bg-opacity-[20%] h-full">
      <h3 className="font-bold leading-tight text-neutral-800">{title}</h3>
      <p className="mt-2 md:mt-3.5 font-light leading-5 text-gray-500">{description}</p>
    </article>
  );
};

export default BenefitCard;
