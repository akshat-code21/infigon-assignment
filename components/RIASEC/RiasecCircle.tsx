"use client";
import React from "react";
import RiasecLetter from "./RiasecLetter";

const RiasecCircle: React.FC = () => {
  return (
    <div className="flex relative flex-col items-center self-stretch px-9 py-3 mt-2.5 w-full text-2xl leading-none text-center text-white aspect-square max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/d77810b2bbc4b0feb66a51a4a2249317cbc87ee8?placeholderIfAbsent=true"
        alt="RIASEC personality wheel"
        className="object-contain absolute inset-0 size-full"
      />
      <div className="relative">
        <RiasecLetter letter="R" />
      </div>
      <div className="flex relative gap-5 justify-between self-stretch mt-16 whitespace-nowrap max-md:mt-10 max-md:mr-1.5">
        <RiasecLetter letter="C" />
        <RiasecLetter letter="I" />
      </div>
      <p className="relative mt-10 text-base leading-6 text-zinc-500">
        <span className="font-bold text-black">Click</span> on the coloured
        <br />
        arcs to know about the
        <br />
        RIASEC personalities.
      </p>
      <div className="flex relative gap-5 justify-between self-stretch mt-11 whitespace-nowrap max-md:mt-10 max-md:ml-0.5">
        <RiasecLetter letter="E" />
        <RiasecLetter letter="A" />
      </div>
      <div className="relative mt-16 max-md:mt-10">
        <RiasecLetter letter="S" />
      </div>
    </div>
  );
};

export default RiasecCircle;
