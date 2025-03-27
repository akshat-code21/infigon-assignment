"use client";
import React from "react";
import PersonalityTraitColumn from "../Personality/PersonalityTraitColumn";

const PersonalityTypeComparison: React.FC = () => {
  const leftTraits = [
    {
      title: "Extraversion (E)",
      description: "Energized by social interactions and external activities",
    },
    {
      title: "Sensing (S)",
      description:
        "Focuses on concrete, tangible information and present realities",
    },
    {
      title: "Thinking (T)",
      description: "Decisions based on logic and objective analysis",
    },
    {
      title: "Judging (J)",
      description: "Prefers structured, organized approaches and planning",
    },
  ];

  const rightTraits = [
    {
      title: "Introversion (I)",
      description: "Energized by solitary activities and internal reflection",
    },
    {
      title: "Intuition (N)",
      description:
        "Focuses on abstract, conceptual information and future possibilities",
    },
    {
      title: "Feeling (F)",
      description: "Decisions based on logic and objective analysis",
    },
    {
      title: "Perceiving (P)",
      description: "Prefers flexible, spontaneous approaches and adaptability",
    },
  ];

  return (
    <main className="flex flex-wrap gap-7 justify-center mt-4 w-full max-md:max-w-full">
      <PersonalityTraitColumn traits={leftTraits} />

      <section className="flex flex-col items-center pt-12 w-[109px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/d9b92a7e8edd53618c1ba7082f92dba8f7f31af1?placeholderIfAbsent=true"
          alt="Arrow connecting Extraversion and Introversion"
          className="object-contain max-w-full aspect-[7.81] w-[109px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/2c65e0b2c2a948cd4159901d171b99f1fb7ea4f9?placeholderIfAbsent=true"
          alt="Arrow connecting Sensing and Intuition"
          className="object-contain mt-28 max-w-full aspect-[7.81] w-[109px] max-md:mt-10"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/ccc8e94ceb6fe5e1824c22cabe610a46e7f244f3?placeholderIfAbsent=true"
          alt="Arrow connecting Thinking and Feeling"
          className="object-contain mt-28 max-w-full aspect-[7.81] w-[109px] max-md:mt-10"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/2a7ce49cf10cb9d027f9524d252fc9689a2daa2d?placeholderIfAbsent=true"
          alt="Arrow connecting Judging and Perceiving"
          className="object-contain mt-28 max-w-full aspect-[7.81] w-[109px] max-md:mt-10"
        />
      </section>

      <PersonalityTraitColumn traits={rightTraits} />
    </main>
  );
};

export default PersonalityTypeComparison;
