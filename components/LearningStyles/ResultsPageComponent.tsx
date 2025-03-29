"use client";

import React, { useState } from "react";
import ResultsHeader from "./ResultsHeader";
import ResultsNavigation from "./ResultsNavigation";
import ResultsContent from "./ResultsContent";

const ResultsPageComponent: React.FC = () => {

  const [activePersonalityTab, setActivePersonalityTab] =
    useState<string>("Learning Style");

  const personalityTabs = [
    "Learning Style",
    "Characteristics",
    "Preferences",
    "Strengths",
    "Environment",
    "Interpersonal Interaction",
    "Influence"
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

export default ResultsPageComponent;
