"use client";

import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <article className="flex-1 px-3 py-5 rounded-xl bg-stone-300 bg-opacity-20 min-w-[300px] max-md:min-w-[auto]">
      <h3 className="mb-3.5 text-base font-bold text-neutral-800">{title}</h3>
      <p className="text-base font-light text-gray-500">{description}</p>
    </article>
  );
};

export default InfoCard;
