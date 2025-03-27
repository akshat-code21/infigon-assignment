"use client";

import React from "react";
import CounselorCard from "../ui/CounselorCard";

const ReportHeader: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-9 px-16 w-full min-h-[72px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
        <h1 className="gap-4 self-start text-3xl font-bold leading-none text-zinc-800">
          Your Career Analysis Report
        </h1>
        <p className="mt-2 text-base text-gray-500 max-md:max-w-full">
          Your Report ensures a complete understanding of your strengths, areas
          for growth, and ideal career fit.
        </p>
      </div>
      <CounselorCard />
    </header>
  );
};

export default ReportHeader;
