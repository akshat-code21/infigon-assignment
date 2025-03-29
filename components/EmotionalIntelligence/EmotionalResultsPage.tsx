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
    <div className="">
      <h1 className="text-2xl font-bold mb-6">Your <span className="text-[#3A8BFF]"> Result </span></h1>

      <div className="border-b border-gray-200 mb-6">
        <div className="flex">
          <button
            className={`py-2 px-4 font-medium ${activeTab === "scores"
              ? "text-black border-b-2 border-[#3A8BFF]"
              : "text-gray-500"
              }`}
            onClick={() => setActiveTab("scores")}
          >
            Your Scores
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === "conclusion"
              ? "text-black border-b-2 border-[#3A8BFF]"
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
          <h2 className="text-lg font-bold text-[#0047AB]">Your Scores</h2>
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
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-x-2 items-center">
            <h2 className="text-[#0047AB] font-semibold text-lg mb-4">Summarised Result</h2>
            <div className="flex items-center gap-6 mb-6">
              <div className="h-8 w-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500"></div>
                <span className="text-gray-500 font-medium">Strength</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
                <span className="text-gray-500 font-medium">Needs Attention</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {skillsData.map((skill, index) => (
              <div key={skill.number} className="flex flex-col items-center">
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: index === 0 ? 'conic-gradient(transparent 0deg 100deg, #FF9933 100deg 360deg)' :
                               index === 1 ? 'conic-gradient(transparent 0deg 100deg, #00A3FF 100deg 360deg)' :
                               index === 2 ? 'conic-gradient(transparent 0deg 100deg, #E066FF 100deg 360deg)' :
                               index === 3 ? 'conic-gradient(transparent 0deg 45deg, #B87070 45deg 360deg)' :
                               'conic-gradient(transparent 0deg 135deg, #1ED760 135deg 360deg)',
                    boxShadow: `0 0 10px 0 ${
                      index === 0 ? 'rgba(255, 153, 51, 0.5)' : 
                      index === 1 ? 'rgba(0, 163, 255, 0.5)' : 
                      index === 2 ? 'rgba(224, 102, 255, 0.5)' : 
                      index === 3 ? 'rgba(184, 112, 112, 0.5)' : 'rgba(30, 215, 96, 0.5)'
                    }`,
                    opacity: 0.8
                  }}></div>
                  
                  <div className="absolute inset-2 rounded-full bg-white"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`} 
                      style={{ 
                        backgroundColor: index === 0 ? '#FF9933' : 
                                        index === 1 ? '#00A3FF' : 
                                        index === 2 ? '#E066FF' : 
                                        index === 3 ? '#B87070' : '#1ED760',
                        boxShadow: `0 0 15px 0 ${
                          index === 0 ? 'rgba(255, 153, 51, 0.6)' : 
                          index === 1 ? 'rgba(0, 163, 255, 0.6)' : 
                          index === 2 ? 'rgba(224, 102, 255, 0.6)' : 
                          index === 3 ? 'rgba(184, 112, 112, 0.6)' : 'rgba(30, 215, 96, 0.6)'
                        }`
                      }}>
                      {skill.number}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg mt-2">{skill.title}</h3>
                <div className="mt-4 flex items-center border rounded-full px-4 py-1.5" style={{ 
                  borderColor: index === 0 ? '#FF9933' : 
                              index === 1 ? '#00A3FF' : 
                              index === 2 ? '#E066FF' : 
                              index === 3 ? '#B87070' : '#1ED760' 
                }}>
                  <span className="mr-2" style={{ 
                    color: index === 0 ? '#FF9933' : 
                          index === 1 ? '#00A3FF' : 
                          index === 2 ? '#E066FF' : 
                          index === 3 ? '#B87070' : '#1ED760' 
                  }}>{skill.score}</span>
                  <div className="w-5 h-5 rounded-full bg-green-500"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <h2 className="text-[#0047AB] text-lg font-semibold mb-4">Conclusion</h2>
            <div className="bg-[#3A8BFF] text-white p-6 rounded-lg">
              <p className="text-lg font-light">
                You thrive in structured, people-oriented roles where your strengths in organization, empathy, and teamwork can shine. By embracing personal growth strategies, you can mitigate weaknesses and enhance your career success, as demonstrated by real-world examples and case studies. Understanding and developing your MBTI type can lead to fulfilling and impactful career paths.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionalResultsPage;
