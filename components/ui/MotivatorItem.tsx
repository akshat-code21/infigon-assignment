"use client";
import React from "react";

interface MotivatorItemProps {
  number: number;
  text: string;
  color: string;
  className?: string;
}

const MotivatorItem: React.FC<MotivatorItemProps> = ({
  number,
  text,
  color,
  className = "",
}) => {
  return (
    <div
      className={`flex overflow-hidden flex-wrap gap-3 items-center px-3 py-2.5 w-full border border-[${color}] border-solid rounded-[54px] max-md:max-w-full ${className}`}
    >
      <div
        className={`self-stretch px-4 my-auto text-white whitespace-nowrap bg-[${color}] rounded-3xl h-[42px] min-h-[42px] w-[42px] flex items-center justify-center`}
      >
        {number}
      </div>
      <div className="flex-1 shrink self-stretch my-auto text-center basis-[30px] text-neutral-800 max-md:max-w-full">
        {text}
      </div>
    </div>
  );
};

export default MotivatorItem;
