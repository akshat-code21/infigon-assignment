"use client";
import React from "react";
import MotivatorItem from "@/components/ui/MotivatorItem";
import InfoCard from "@/components/ui/InfoCard";

const CareerMotivatorsContent: React.FC = () => {
  const motivators = [
    { number: 1, text: "Achievement and Results", color: "#1999A1" },
    { number: 2, text: "Helping Others", color: "yellow-700" },
    { number: 3, text: "Financial Rewards", color: "teal-300" },
    { number: 4, text: "Creativity and Innovation", color: "yellow-400" },
    { number: 5, text: "Security and Stability", color: "purple-600" },
    { number: 6, text: "Leadership and Influence", color: "sky-500" },
    { number: 7, text: "Continuous Learning", color: "blue-800" },
    { number: 8, text: "Independence", color: "fuchsia-400" },
    { number: 9, text: "Teamwork and Collaboration", color: "stone-400" },
    {
      number: 10,
      text: "Flexibility and Work-Life Balance",
      color: "orange-400",
    },
  ];

  const purposeCards = [
    {
      title: "Enhanced Job Satisfaction",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Improved Performance and Engagement",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Career Planning and Development",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];

  const benefitsCards = [
    {
      title: "Alignment with Personal Values",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Improved Decision-Making",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Enhanced Self-Awareness",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];

  return (
    <article>
      <section className="py-5 w-full font-bold max-md:max-w-full">
        <h2 className="gap-4 self-stretch w-full text-lg leading-none text-blue-800 max-md:max-w-full">
          TOP 10 Career Motivators
        </h2>
        <div className="flex flex-wrap gap-4 items-start mt-4 w-full text-base leading-tight max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-60 max-md:max-w-full">
            {motivators.slice(0, 5).map((motivator) => (
              <MotivatorItem
                key={motivator.number}
                number={motivator.number}
                text={motivator.text}
                color={motivator.color}
                className={motivator.number > 1 ? "mt-4" : ""}
              />
            ))}
          </div>
          <div className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
            {motivators.slice(5, 10).map((motivator) => (
              <MotivatorItem
                key={motivator.number}
                number={motivator.number}
                text={motivator.text}
                color={motivator.color}
                className={motivator.number > 6 ? "mt-4" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 mt-5 w-full max-md:max-w-full">
        <h2 className="gap-4 self-stretch w-full text-lg font-bold leading-none text-blue-800 max-md:max-w-full">
          Purpose and Applications of Career Motivators in career development
          include
        </h2>
        <div className="mt-4 w-full text-base max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
              {purposeCards.map((card, index) => (
                <InfoCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 mt-5 w-full max-md:max-w-full">
        <h2 className="gap-4 self-stretch w-full text-lg font-bold leading-none text-blue-800 max-md:max-w-full">
          Benefits of understanding interest using career motivators for career
          planning include
        </h2>
        <div className="mt-4 w-full text-base max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
              {benefitsCards.map((card, index) => (
                <InfoCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CareerMotivatorsContent;
