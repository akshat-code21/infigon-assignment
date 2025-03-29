"use client";

import React from "react";

const CounselorCard: React.FC = () => {
  return (
    <div className="flex gap-2.5 items-start self-end text-sm min-w-60 max-md:max-w-full">
      <article className="flex gap-px items-start px-4 py-3.5 rounded-lg border border-solid border-neutral-200 min-w-60 max-md:max-w-full">
        <div className="flex gap-3.5 min-w-60 max-md:max-w-full">
          <div className="flex flex-col justify-center min-w-60 w-[366px]">
            <h3 className="font-bold leading-tight text-zinc-800">
              Want to speak to an expert Career Counsellor?
            </h3>
            <p className="mt-1 text-gray-500">
              <span className="font-light text-[rgba(91,104,113,1)]">
                Explore a list of{" "}
              </span>
              <span className="font-light text-[rgba(91,104,113,1)]">
                1000+
              </span>
              <span className="font-light text-[rgba(91,104,113,1)]">
                {" "}
                Expert Career Counsellors near you!
              </span>
            </p>
          </div>
          <button className="overflow-hidden gap-0.5 self-stretch px-3.5 py-2 my-auto font-bold leading-snug text-center bg-gray-200 rounded-md shadow-sm text-zinc-800 hover:text-black hover:bg-blue-500 hover:animate-fadeIn">
            See All
          </button>
        </div>
      </article>
    </div>
  );
};

export default CounselorCard;
