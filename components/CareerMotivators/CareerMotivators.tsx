"use client";

import React from "react";
import Introduction from "@/components/InterestExplorer/Introduction";
import RiasecDescription from "@/components/RIASEC/RiasecDescription";

function CareerMotivators() {
  return (
    <section className="flex flex-col flex-1 gap-5">
      <header className="mb-5">
        <h1 className="text-3xl font-bold leading-10 text-zinc-800 max-sm:text-2xl">
          <span>Understanding</span>{" "}
          <span className="text-[#FF9706]">Career Motivators</span>
        </h1>
      </header>
      <div className="flex flex-col gap-4">
        <Introduction />
        <RiasecDescription />
      </div>
    </section>
  );
}

export default CareerMotivators;
