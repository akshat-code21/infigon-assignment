import React from "react";
import ear from "@/assets/ear.svg"
import Image from "next/image";

const ResultsContent: React.FC = () => {

  return (
    <section className="mt-4">
      <div className="flex flex-col gap-4">
        <header className="flex gap-4 items-center">
          <Image
            src={ear}
            className="h-[30px] w-[30px]"
            alt="Realistic icon"
          />
          <h2 className="text-2xl font-bold text-red-400 max-sm:text-xl">
            Kinesthetic
          </h2>
        </header>

        <p className="text-base leading-6 text-gray-500 max-sm:text-sm max-sm:leading-5">
          Congratulations on taking the first step for personalized Career
          Planning &amp; Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </p>
      </div>
    </section>
  );
};

export default ResultsContent;
