"use client";

import React, { useState } from "react";
import SkillItem from "./SkillItem";

const EmotionalResultsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"scores" | "conclusion">("scores");
  const skillsData = [
    {
      number: "1",
      title: "Self Awareness",
      score: "45/50",
      color: "orange" as const,
      indicatorColor: "red" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      strategies: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "2",
      title: "Self-Regulation",
      score: "45/50",
      color: "sky" as const,
      indicatorColor: "red" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      strategies: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "3",
      title: "Empathy",
      score: "45/50",
      color: "fuchsia" as const,
      indicatorColor: "green" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      strategies: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "4",
      title: "Social Skills",
      score: "45/50",
      color: "amber" as const,
      indicatorColor: "red" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      strategies: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "5",
      title: "Motivation",
      score: "45/50",
      color: "emerald" as const,
      indicatorColor: "green" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      strategies: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.',
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    }
  ];

  return (
    <div className="container px-4 py-4 max-w-4xl">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Your Result</h1>
      
      <div className="border-b border-gray-200 mb-6">
        <div className="flex">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "scores"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("scores")}
          >
            Your Scores
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "conclusion"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("conclusion")}
          >
            Conclusion
          </button>
        </div>
      </div>

      {activeTab === "scores" && (
        <div className="flex items-center gap-6 mb-6">
          <h2 className="text-lg font-bold text-blue-600">Your Scores</h2>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500"></div>
            <span className="text-gray-600">Strength</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-red-500"></div>
            <span className="text-gray-600">Needs Attention</span>
          </div>
        </div>
      )}

      {activeTab === "scores" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillsData.map((skill) => (
            <SkillItem
              key={skill.number}
              number={skill.number}
              title={skill.title}
              score={skill.score}
              color={skill.color}
              indicatorColor={skill.indicatorColor}
              description={skill.description}
              strategies={skill.strategies}
            />
          ))}
        </div>
      )}

      {activeTab === "conclusion" && (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          this is Conclusion Emotional Results
        </div>
      )}
    </div>
  );
};

export default EmotionalResultsPage;
