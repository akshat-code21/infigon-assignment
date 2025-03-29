"use client";

import React, { useState } from "react";
import ResultsHeader from "./ResultsHeader";
import ResultsNavigation from "./ResultsNavigation";
import ResultsContent from "./ResultsContent";

const YourResult: React.FC = () => {

  const [activePersonalityTab, setActivePersonalityTab] =
    useState<string>("Personality");

  const personalityTabs = [
    "Personality",
    "Characteristics",
    "Strengths/Weakness",
    "Work Style",
    "Preferences",
    "Interpersonal Interaction",
    "Work Culture",
    "Roles",
    "Case Studies",
    "Famous Personalitites",
    "Recommendations",
    "Conclusion",
  ];

  return (
    <main className="flex flex-col mx-auto my-0 max-w-[1200px]">
      <ResultsHeader
      />

      <ResultsNavigation
        activeTab={activePersonalityTab}
        tabs={personalityTabs}
        onTabChange={setActivePersonalityTab}
      />

      <ResultsContent activeTab={activePersonalityTab} />
    </main>
  );
};

export default YourResult;
