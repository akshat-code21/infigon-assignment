"use client";
import * as React from "react";
import RiasecCircle from "./RiasecCircle";

function ThemesOfRiasec() {
  return (
    <section className="py-5 w-full text-lg font-bold leading-none max-md:max-w-full">
      <h2 className="gap-4 self-stretch w-full text-blue-800 max-md:max-w-full">
        Themes of RIASEC
      </h2>
      <div className="flex flex-col justify-center items-center mt-4 w-full text-zinc-800 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[390px]">
          <p>Realistic</p>
          <RiasecCircle />
          <p className="mt-2.5">Social</p>
        </div>
      </div>
    </section>
  );
}

export default ThemesOfRiasec;
