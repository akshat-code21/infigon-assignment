"use client";

import React from "react";
import BulletPoint from "./BulletPoint";

interface SkillCardProps {
  number: string;
  title: string;
  score: string;
  description: string;
  strategies: string[];
  isActive: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({
  number,
  title,
  score,
  description,
  strategies,
  isActive,
}) => {
  const borderColor = isActive ? "border-sky-500" : "border-stone-400";
  const textColor = isActive ? "text-sky-500" : "text-stone-400";
  const bgColor = isActive ? "bg-sky-500" : "bg-stone-400";

  return (
    <section className="flex flex-col gap-1.5 items-start w-full">
      <header className="flex gap-3 items-center px-3 py-2.5 w-full bg-white h-[62px]">
        <div
          className={`gap-2 px-3 py-2 text-sm font-bold leading-5 rounded-2xl border-[1.667px] ${borderColor} h-[35px] w-[35px] ${textColor} flex items-center justify-center`}
        >
          {number}
        </div>
        <h2 className={`flex-1 text-base font-bold leading-5 ${textColor}`}>
          {title}
        </h2>
        <div
          className={`flex gap-2.5 justify-center items-center py-2.5 pr-1.5 pl-4 h-10 rounded-3xl ${bgColor}`}
        >
          <div className="text-base font-bold leading-5 text-white">
            {score}
          </div>
          <div className="flex flex-col gap-2 justify-center items-center px-2.5 py-2 bg-red-500 rounded-2xl border border-white h-[30px] w-[30px]" />
        </div>
      </header>

      <article
        className={`flex flex-col gap-5 items-start px-3 py-6 w-full rounded-2xl border ${borderColor}`}
      >
        <p className="flex-1 gap-2.5 px-3 py-0 w-full text-base leading-5 text-stone-500">
          {description}
        </p>

        <div className="flex gap-3.5 items-start px-3 py-0 w-full bg-white rounded-xl">
          <div className="flex flex-col flex-1 gap-5 items-start">
            <h3 className="w-full text-base font-bold leading-5 text-neutral-800">
              Strategies
            </h3>

            {strategies.map((strategy, index) => (
              <BulletPoint key={index} text={strategy} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default SkillCard;
