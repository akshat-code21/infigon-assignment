"use client";
import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <article className="h-36 flex flex-col flex-1 shrink justify-center px-3 py-5 rounded-xl basis-0 bg-[#F4F4F4] bg-opacity-20 min-w-60">
      <h3 className="font-bold text-neutral-800">{title}</h3>
      <p className="mt-3.5 font-light leading-5 text-gray-500">{description}</p>
    </article>
  );
};

export default InfoCard;
