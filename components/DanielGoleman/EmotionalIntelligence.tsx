"use client";
import React from "react";
import EmotionalElement from "./EmotionalElement";
import InfoCard from "./InfoCard";

const EmotionalIntelligenceComponent: React.FC = () => {
  const emotionalElements = [
    { 
      number: 1, 
      title: "Self-Awareness", 
      gradientFrom: "#ffd8b4", 
      gradientTo: "#f8b676",
      numberBgColor: "#f5a54a"
    },
    { 
      number: 2, 
      title: "Self-Regulation", 
      gradientFrom: "#c9e6ff", 
      gradientTo: "#7cc3ff",
      numberBgColor: "#4a9ff5"
    },
    { 
      number: 3, 
      title: "Empathy", 
      gradientFrom: "#f2d5ff", 
      gradientTo: "#d9a6ff",
      numberBgColor: "#c07aef"
    },
    { 
      number: 4, 
      title: "Social Skills", 
      gradientFrom: "#e8d5d0", 
      gradientTo: "#c9ada7",
      numberBgColor: "#a68a84"
    },
    { 
      number: 5, 
      title: "Motivation", 
      gradientFrom: "#c9f5e4", 
      gradientTo: "#8de0c0",
      numberBgColor: "#5dc99a"
    },
  ];

  const applicationCards = [
    {
      title: "Enhanced Leadership and Communication Skills",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Improved Decision Making and Problem Solving",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Career Planning and Development",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    },
    {
      title: "Emotional Intelligence in the Workplace",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    },
    {
      title: "Leadership Development",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities.",
    },
  ];

  const benefitCards = [
    {
      title: "improved Interpersonal Relationships",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Enhanced Job Performance",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];

  return (
    <main className="flex flex-col gap-5 p-5 mx-auto my-0 max-w-[1200px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold leading-5 text-blue-800">
          5 Emotional Elements
        </h2>
        <div className="flex gap-7 px-10 py-0 mt-2.5 max-md:flex-wrap max-md:justify-center max-md:p-0 max-sm:gap-4">
          {emotionalElements.map((element, index) => (
            <EmotionalElement
              key={index}
              number={element.number}
              title={element.title}
              gradientFrom={element.gradientFrom}
              gradientTo={element.gradientTo}
              numberBgColor={element.numberBgColor}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold leading-5 text-blue-800">
          Applications of the Emotional Intelligence Test in career development
          include
        </h2>
        <p className="text-base leading-6 text-gray-500">
          Congratulations on taking the first step for personalized Career
          Planning &amp; Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </p>

        <div className="flex gap-4 mt-3 max-md:flex-wrap max-sm:flex-col">
          <InfoCard
            title={applicationCards[0].title}
            description={applicationCards[0].description}
          />
          <InfoCard
            title={applicationCards[1].title}
            description={applicationCards[1].description}
          />
        </div>

        <div className="flex gap-4 mt-3 max-md:flex-wrap max-sm:flex-col">
          <InfoCard
            title={applicationCards[2].title}
            description={applicationCards[2].description}
          />
          <InfoCard
            title={applicationCards[3].title}
            description={applicationCards[3].description}
          />
          <InfoCard
            title={applicationCards[4].title}
            description={applicationCards[4].description}
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold leading-5 text-blue-800">
          Understanding emotional intelligence for career planning offers
          several benefits, including
        </h2>
        <div className="flex gap-4 mt-3 max-md:flex-wrap max-sm:flex-col">
          <InfoCard
            title={benefitCards[0].title}
            description={benefitCards[0].description}
          />
          <InfoCard
            title={benefitCards[1].title}
            description={benefitCards[1].description}
          />
        </div>
      </section>
    </main>
  );
};

export default EmotionalIntelligenceComponent;
