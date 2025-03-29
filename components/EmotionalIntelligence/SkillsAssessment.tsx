"use client";
import * as React from "react";
import SkillItem from "./SkillItem";

const SkillsAssessment: React.FC = () => {
  const strategyText =
    'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.';
  const description =
    "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.";

  const strategies = [strategyText, strategyText, strategyText];

  return (
    <section className="flex flex-col gap-5">
      <SkillItem
        number="1"
        title="Self Awareness"
        score="45/50"
        color="orange"
        indicatorColor="red"
        description={description}
        strategies={strategies}
      />

      <SkillItem
        number="3"
        title="Empathy"
        score="45/50"
        color="fuchsia"
        indicatorColor="green"
        description={description}
        strategies={strategies}
      />

      <SkillItem
        number="5"
        title="Motivation"
        score="45/50"
        color="emerald"
        indicatorColor="green"
        description={description}
        strategies={strategies}
      />
    </section>
  );
};

export default SkillsAssessment;
