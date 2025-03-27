"use client";

import React from "react";
import CareerOptionBadge from "../ui/CareerOptionsBadge";

interface CareerOption {
  id: number;
  name: string;
}

const CareerOptionsSection: React.FC = () => {
  const careerOptions: CareerOption[] = [
    { id: 1, name: "Engineer" },
    { id: 2, name: "Doctor" },
    { id: 3, name: "Teacher" },
  ];

  return (
    <section className="flex flex-wrap gap-5 justify-center px-16 py-5 mt-6 w-full border-t border-b border-stone-300 min-h-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-2.5 items-center my-auto min-w-60 max-md:max-w-full">
        <p className="self-stretch my-auto text-lg text-neutral-400">
          Your <span className="font-bold text-[rgba(0,71,171,1)]">TOP 3</span>{" "}
          Career Options
        </p>
        <div className="flex gap-2.5 items-center self-stretch my-auto leading-tight whitespace-nowrap min-w-60">
          {careerOptions.map((option) => (
            <CareerOptionBadge
              key={option.id}
              number={option.id}
              career={option.name}
            />
          ))}
        </div>
      </div>
      <div className="shrink-0 w-0 h-10 border border-solid border-stone-300" />
      <div className="flex gap-2.5 items-center h-full font-bold min-w-60">
        <p className="self-stretch my-auto text-lg text-zinc-800">
          Choose them right here!
        </p>
        <button className="overflow-hidden gap-0.5 self-stretch px-3.5 py-3.5 my-auto text-sm leading-snug text-center text-white bg-blue-800 rounded-md shadow-sm min-h-[45px]">
          Your Career Options
        </button>
      </div>
    </section>
  );
};

export default CareerOptionsSection;
