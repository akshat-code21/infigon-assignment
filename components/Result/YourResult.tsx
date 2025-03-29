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
    "Work Culture"
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

      <ResultsContent />
    </main>
  );
};

export default YourResult;
