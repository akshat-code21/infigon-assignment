"use client";

import React from "react";

interface TestItemProps {
  icon: string;
  testNumber: string;
  testName: string;
  isActive?: boolean;
  textColor: string;
  border: string;
  onClick?: () => void;
}

const TestItem: React.FC<TestItemProps> = ({
  icon,
  testNumber,
  testName,
  isActive = false,
  textColor,
  border,
  onClick,
}) => {
  return (
    <button
      className={`cursor-pointer flex gap-2.5 items-center px-5 py-4 w-full text-base bg-white rounded-lg text-left transition-all duration-300 ease-in-out ${
        isActive
          ? `border-r-4 ${border} min-h-20 shadow-[0px_6px_12px_rgba(0,0,0,0.1)] opacity-100`
          : "opacity-80 hover:opacity-100"
      }`}
      onClick={onClick}
    >
      <img
        src={icon}
        alt={`${testName} icon`}
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[38px]"
      />
      <div className="self-stretch my-auto">
        <p className="leading-7 text-zinc-500">{testNumber}</p>
        <p className={`font-bold ${textColor}`}>{testName}</p>
      </div>
    </button>
  );
};

export default TestItem;
