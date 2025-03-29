"use client";

import React, { useState } from "react";
import ValueItem from "./ValueItem";

const CareerResultsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"scores" | "conclusion">("scores");
  
  const valuesData = [
    {
      number: "1",
      title: "Achievement and Results",
      score: "25/30",
      color: "teal" as const,
      indicatorColor: "red" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "2",
      title: "Helping Others",
      score: "25/30",
      color: "amber" as const,
      indicatorColor: "yellow" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "3",
      title: "Financial Rewards",
      score: "25/30",
      color: "cyan" as const,
      indicatorColor: "green" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "4",
      title: "Creativity and Innovation",
      score: "25/30",
      color: "yellow" as const,
      indicatorColor: "red" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "5",
      title: "Security and Stability",
      score: "25/30",
      color: "purple" as const,
      indicatorColor: "yellow" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "6",
      title: "Leadership and Influence",
      score: "25/30",
      color: "blue" as const,
      indicatorColor: "green" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "7",
      title: "Continuous Learning",
      score: "25/30",
      color: "indigo" as const,
      indicatorColor: "red" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "8",
      title: "Independence",
      score: "25/30",
      color: "fuchsia" as const,
      indicatorColor: "red" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "9",
      title: "Security and Stability",
      score: "25/30",
      color: "rose" as const,
      indicatorColor: "green" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    },
    {
      number: "10",
      title: "Flexibility and Work-Life Balance",
      score: "25/30",
      color: "orange" as const,
      indicatorColor: "yellow" as const,
      description: "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
      pros: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ],
      cons: [
        'They are friendly, approachable, & enjoy being around people. They are often seen as the "hosts" of their social circles.'
      ]
    }
  ];
  const getBorderColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      teal: "border-[##1999A1]",
      amber: "border-[#A05B19]",
      cyan: "border-[#55DCDD]",
      yellow: "border-[#F7C61B]",
      purple: "border-[#9140F8]",
      blue: "border-[#01A2FF]",
      indigo: "border-[#1A4CA2]",
      fuchsia: "border-[#EE83FF]",
      rose: "border-[#B9797A]",
      orange: "border-[#FA9C56]"
    };
    return colorMap[color] || "border-gray-500";
  };
  
  const getTextColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      teal: "text-[##1999A1]",
      amber: "text-[#A05B19]",
      cyan: "text-[#55DCDD]",
      yellow: "text-[#F7C61B]",
      purple: "text-[#9140F8]",
      blue: "text-[#01A2FF]",
      indigo: "text-[#1A4CA2]",
      fuchsia: "text-[#EE83FF]",
      rose: "text-[#B9797A]",
      orange: "text-[#FA9C56]"
    };
    return colorMap[color] || "text-gray-500";
  };
  
  const getBgColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      teal: "bg-[#1999A1]",
      amber: "bg-[#A05B19]",
      cyan: "bg-[#55DCDD]",
      yellow: "bg-[#F7C61B]",
      purple: "bg-[#9140F8]",
      blue: "bg-[#01A2FF]",
      indigo: "bg-[#1A4CA2]",
      fuchsia: "bg-[#EE83FF]",
      rose: "bg-[#B9797A]",
      orange: "bg-[#FA9C56]"
    };
    return colorMap[color] || "bg-gray-500";
  };
  
  const getIndicatorColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      red: "bg-red-500",
      yellow: "bg-yellow-400",
      green: "bg-green-500"
    };
    return colorMap[color] || "bg-gray-500";
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-6">Your <span className="text-orange-500">Result</span></h1>
      
      <div className="border-b border-gray-200 mb-6">
        <div className="flex">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "scores"
                ? "text-black border-b-2 border-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("scores")}
          >
            Your Scores
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "conclusion"
                ? "text-black border-b-2 border-orange-500"
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
            <div className="w-5 h-5 rounded-full bg-red-500"></div>
            <span className="text-gray-600">Low Relevance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
            <span className="text-gray-600">Moderate Relevance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500"></div>
            <span className="text-gray-600">High Relevance</span>
          </div>
        </div>
      )}

      {activeTab === "scores" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {valuesData.map((value) => (
            <ValueItem
              key={value.number}
              number={value.number}
              title={value.title}
              score={value.score}
              color={value.color}
              indicatorColor={value.indicatorColor}
              description={value.description}
              pros={value.pros}
              cons={value.cons}
            />
          ))}
        </div>
      )}

      {activeTab === "conclusion" && (
        <div>
          <div className="flex items-center gap-6 mb-6">
            <h2 className="text-lg font-bold text-[#0047AB]">Summarised Result</h2>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-red-500"></div>
              <span className="text-gray-600">Low Relevance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
              <span className="text-gray-600">Moderate Relevance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500"></div>
              <span className="text-gray-600">High Relevance</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {valuesData.map((value) => {
              return (
                <div key={value.number} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">{value.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">{value.title}</span>
                      <div className={`px-3 py-1 rounded-full ${getBorderColorClass(value.color)} border flex items-center gap-2`}>
                        <span className={getTextColorClass(value.color)}>{value.score}</span>
                        <div className={`w-4 h-4 rounded-full ${getIndicatorColorClass(value.indicatorColor)}`}></div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full w-full">
                      <div className={`h-2 ${getBgColorClass(value.color)} rounded-full w-4/5`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <h2 className="text-lg font-bold text-[#0047AB] mb-4">Conclusion</h2>
          <div className="bg-orange-500 text-white p-6 rounded-lg">
            <p>
              You thrive in structured, people-oriented roles where your strengths in organization, empathy, and teamwork can shine. By embracing
              personal growth strategies, you can mitigate weaknesses and enhance your career success, as demonstrated by real-world examples and
              case studies. Understanding and developing your MBTI type can lead to fulfilling and impactful career paths.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerResultsPage;