"use client";

import React from "react";

interface CareerOptionBadgeProps {
  number: number;
  career: string;
}

const CareerOptionBadge: React.FC<CareerOptionBadgeProps> = ({
  number,
  career,
}) => {
  return (
    <div className="flex gap-2 justify-center items-center self-stretch py-1.5 pr-4 pl-1.5 my-auto border border-solid border-stone-300 min-h-10 rounded-[40px]">
      <div className="self-stretch px-3 my-auto text-sm font-bold text-white rounded-2xl border border-solid bg-stone-300 border-stone-300 h-[30px] min-h-[30px] w-[30px] flex items-center justify-center">
        {number}
      </div>
      <span className="self-stretch my-auto text-base text-stone-500">
        {career}
      </span>
    </div>
  );
};

export default CareerOptionBadge;
