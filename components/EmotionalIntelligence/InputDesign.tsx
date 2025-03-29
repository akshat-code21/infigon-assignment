"use client";

import React from "react";
import SkillCard from "./SkillCard";

const InputDesign: React.FC = () => {
  const skillCards = [
    {
      number: "2",
      title: "Self-Regulation",
      score: "45/50",
      isActive: true,
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      strategies: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
      ],
    },
    {
      number: "4",
      title: "Social Skills",
      score: "45/50",
      isActive: false,
      description:
        "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      strategies: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {skillCards.map((card, index) => (
        <SkillCard
          key={index}
          number={card.number}
          title={card.title}
          score={card.score}
          description={card.description}
          strategies={card.strategies}
          isActive={card.isActive}
        />
      ))}
    </div>
  );
};

export default InputDesign;
