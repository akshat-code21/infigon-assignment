"use client";
import * as React from "react";
import BulletPoint from "./BulletPoint";

interface SkillItemProps {
  number: string;
  title: string;
  score: string;
  color: "orange" | "fuchsia" | "emerald" | "sky" | "amber";
  indicatorColor: "red" | "green";
  description: string;
  strategies: string[];
}

const SkillItem: React.FC<SkillItemProps> = ({
  number,
  title,
  score,
  color,
  indicatorColor,
  description,
  strategies,
}) => {
  const colorClasses = {
    orange: {
      text: "text-orange-400",
      border: "border-orange-400",
      bg: "bg-orange-400",
    },
    fuchsia: {
      text: "text-fuchsia-400",
      border: "border-fuchsia-400",
      bg: "bg-fuchsia-400",
    },
    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-400",
      bg: "bg-emerald-400",
    },
    sky: {
      text: "text-sky-400",
      border: "border-sky-400",
      bg: "bg-sky-400",
    },
    amber: {
      text: "text-[#B9797A]",
      border: "border-[#B9797A]",
      bg: "bg-[#B9797A]",
    },
  };

  const indicatorClasses = {
    red: "bg-red-500",
    green: "bg-green-500",
  };

  const {
    text: textColor,
    border: borderColor,
    bg: bgColor,
  } = colorClasses[color];

  return (
    <article className="flex flex-col gap-1.5 items-start w-full">
      <header className="flex gap-3 items-center px-3 py-2.5 w-full bg-white h-[62px]">
        <div
          className={`gap-2 px-3 py-2 text-sm font-bold leading-5 ${textColor} rounded-2xl ${borderColor} border-[1.667px] h-[35px] w-[35px] flex items-center justify-center`}
        >
          {number}
        </div>
        <h2 className={`flex-1 text-base font-bold leading-5 ${textColor}`}>
          {title}
        </h2>
        <div
          className={`flex gap-2.5 justify-center items-center py-2.5 pr-1.5 pl-4 h-10 ${bgColor} rounded-3xl`}
        >
          <div className="text-base font-bold leading-5 text-white">
            {score}
          </div>
          <div
            className={`flex flex-col gap-2 justify-center items-center px-2.5 py-2 ${indicatorClasses[indicatorColor]} rounded-2xl border border-white h-[30px] w-[30px]`}
          />
        </div>
      </header>

      <div
        className={`flex flex-col gap-5 items-start px-3 py-6 w-full rounded-2xl border ${borderColor}`}
      >
        <p className="flex-1 gap-2.5 px-3 py-0 w-full text-base leading-5 text-stone-500 break-words">
          {description}
        </p>
        <div className="flex gap-3.5 items-start px-3 py-0 w-full bg-white rounded-xl">
          <div className="flex flex-col flex-1 gap-5 items-start w-full">
            <h3 className="w-full text-base font-bold leading-5 text-neutral-800">
              Strategies
            </h3>
            <div className="w-full">
              {strategies.map((strategy, index) => (
                <BulletPoint key={index} text={strategy} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillItem;
