import React from "react";
import Image from "next/image";
import tool from "@/assets/tool.svg"
import PersonalityTag from "../ui/PersonalityTag";
import { MapPin } from "lucide-react";

interface ResultsContentProps {
  activeTab: string;
}

interface PersonalityTrait {
  text: string;
}
const traits: PersonalityTrait[] = [
  { text: "Practical and Hands-On" },
  { text: "Problem-solvers who prefer tangible results" },
  { text: "Enjoying work with tools and machinery" },
  { text: "Value efficiency and effectiveness in tasks" },
];

const ResultsContent: React.FC<ResultsContentProps> = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "Personality":
        return (
          <section className="mt-4">
            <div className="flex flex-col gap-4">
              <header className="flex gap-4 items-center">
                <Image
                  src={tool}
                  className="h-[30px] w-[30px]"
                  alt="Realistic icon"
                />
                <h2 className="text-2xl font-bold text-red-400 max-sm:text-xl">
                  Realistic (R)
                </h2>
              </header>

              <div className="flex flex-wrap gap-4">
                {traits.map((trait, index) => (
                  <PersonalityTag key={index} text={trait.text} />
                ))}
              </div>

              <p className="text-base leading-6 text-gray-500 max-sm:text-sm max-sm:leading-5">
                Congratulations on taking the first step for personalized Career
                Planning &amp; Assessment! We understand the significance of making
                informed decisions as you navigate your academic journey and future
                career. We are committed to empowering individuals with the tools and
                insights needed to confidently navigate the world of careers and
                education.
              </p>
            </div>
          </section>
        );
      case "Preferences":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Preferences</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-gray-700">Prefer tasks that involve physical work and create outcomes.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Skills and Strengths":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Skills and Strengths</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-gray-400">Manual dexterity and technical proficiency.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Preferred Work Environment":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Preferred Work Environment</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-row items-center">
                  <span className="mt-1 mr-3 flex-shrink-0"><MapPin /></span>
                  <p className="mt-1 text-gray-700">Construction sites, manufacturing plants, or workshops.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Interaction Styles":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Interaction Styles</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-gray-700">Direct and straightforward communication.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Conclusion":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Conclusion</h2>
            <div className="bg-[#FF6869] text-white rounded-lg p-6">
              <p className="text-lg leading-relaxed">
                You thrive in structured, people-oriented roles where your strengths in organization, empathy, and teamwork can shine. By embracing personal growth strategies, you can mitigate weaknesses and enhance your career success, as demonstrated by real-world examples and case studies. Understanding and developing your MBTI type can lead to fulfilling and impactful career paths.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="mt-8">
            <p className="text-gray-600">Content for {activeTab} will be available soon.</p>
          </div>
        );
    }
  };

  return (
    <section className="mt-4">
      {renderTabContent()}
    </section>
  );
};

export default ResultsContent;
