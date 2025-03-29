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

  return (
    <div className="container px-4 py-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your <span className="text-orange-500">Result</span></h1>
      
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
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          This is conclusion of career motivators result
        </div>
      )}
    </div>
  );
};

export default CareerResultsPage;