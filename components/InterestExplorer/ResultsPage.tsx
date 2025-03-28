"use client";

import React, { useState } from "react";
import ResultsHeader from "./ResultsHeader";
import ResultsNavigation from "./ResultsNavigation";
import ResultsContent from "./ResultContent";

const ResultsPage: React.FC = () => {
  const [activeInterestTab, setActiveInterestTab] =
    useState<string>("PRIMARY INTEREST");
  const [activePersonalityTab, setActivePersonalityTab] =
    useState<string>("Personality");

  const interestTabs = [
    "PRIMARY INTEREST",
    "SECONDARY INTEREST",
    "TERTIARY INTEREST",
  ];
  const personalityTabs = [
    "Personality",
    "Preferences",
    "Skills and Strengths",
    "Preferred Work Environment",
    "Interaction Styles",
    "Conclusion",
  ];

  return (
    <main className="flex flex-col mx-auto my-0 max-w-[1200px]">
      <ResultsHeader
        activeTab={activeInterestTab}
        tabs={interestTabs}
        onTabChange={setActiveInterestTab}
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

export default ResultsPage;
