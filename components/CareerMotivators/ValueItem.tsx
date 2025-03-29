"use client";
import * as React from "react";
import BulletPoint from "../EmotionalIntelligence/BulletPoint";

interface ValueItemProps {
  number: string;
  title: string;
  score: string;
  color: "teal" | "amber" | "cyan" | "yellow" | "purple" | "blue" | "indigo" | "fuchsia" | "rose" | "orange";
  indicatorColor: "red" | "yellow" | "green";
  description: string;
  pros: string[];
  cons: string[];
}

const ValueItem: React.FC<ValueItemProps> = ({
  number,
  title,
  score,
  color,
  indicatorColor,
  description,
  pros,
  cons,
}) => {
  const colorClasses = {
    teal: {
      text: "text-[#1999A1]",
      border: "border-[#1999A1]",
      bg: "bg-[#1999A1]",
    },
    amber: {
      text: "text-[#A15A19]",
      border: "border-[#A15A19]",
      bg: "bg-[#A15A19]",
    },
    cyan: {
      text: "text-[#55DCDC]",
      border: "border-[#55DCDC]",
      bg: "bg-[#55DCDC]",
    },
    yellow: {
      text: "text-[#F6C61A]",
      border: "border-[#F6C61A]",
      bg: "bg-[#F6C61A]",
    },
    purple: {
      text: "text-[#9140F8]",
      border: "border-[#9140F8]",
      bg: "bg-[#9140F8]",
    },
    blue: {
      text: "text-[#00A3FF]",
      border: "border-[#00A3FF]",
      bg: "bg-[#00A3FF]",
    },
    indigo: {
      text: "text-[#194CA1]",
      border: "border-[#194CA1]",
      bg: "bg-[#194CA1]",
    },
    fuchsia: {
      text: "text-[#EE82FF]",
      border: "border-[#EE82FF]",
      bg: "bg-[#EE82FF]",
    },
    rose: {
      text: "text-[#B97979]",
      border: "border-[#B97979]",
      bg: "bg-[#B97979]",
    },
    orange: {
      text: "text-[#FA9B56]",
      border: "border-[#FA9B56]",
      bg: "bg-[#FA9B56]",
    },
  };

  const indicatorClasses = {
    red: "bg-red-500",
    yellow: "bg-yellow-400",
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
        <p className="flex-1 gap-2.5 px-3 py-0 w-full text-base leading-5 text-stone-500">
          {description}
        </p>
        <div className="flex gap-3.5 items-start px-3 py-0 w-full bg-white rounded-xl">
          <div className="flex flex-col flex-1 gap-5 items-start w-full">
            <h3 className="w-full text-base font-bold leading-5 text-neutral-800">
              Pros
            </h3>
            <div className="w-full">
              {pros.map((pro, index) => (
                <BulletPoint key={`pro-${index}`} text={pro} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 items-start px-3 py-0 w-full bg-white rounded-xl">
          <div className="flex flex-col flex-1 gap-5 items-start w-full">
            <h3 className="w-full text-base font-bold leading-5 text-neutral-800">
              Cons
            </h3>
            <div className="w-full">
              {cons.map((con, index) => (
                <BulletPoint key={`con-${index}`} text={con} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ValueItem;