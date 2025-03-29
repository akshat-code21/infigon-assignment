import React from "react";

const ResultsHeader: React.FC = ({
}) => {
  return (
    <header className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl font-bold max-sm:text-2xl">
          <span className="text-zinc-800">Your</span>
          <span className="pl-2 text-[#DE5AFF]">Result</span>
        </h1>
        <div className="w-px bg-stone-300 h-[31px]" aria-hidden="true" />
      </div>
    </header>
  );
};

export default ResultsHeader;
