import React from "react";
import Image from "next/image";
import ear from "@/assets/ear.svg"
import { TreeDeciduous } from "lucide-react";

interface ResultsContentProps {
  activeTab: string;
}


const workCulture = [
  {
    title: "Stratergic Planning and Management",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Research and Analysis",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Innovation and Technology",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Leadership and Entrepreneurship",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const adviceStrategies = [
  {
    advice: "Be Proactive. Learn to act and study from your environment. Your will get to know the things you never knew. They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    advice: "Be Proactive. Learn to act and study from your environment. Your will get to know the things you never knew. They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    advice: "Be Proactive. Learn to act and study from your environment. Your will get to know the things you never knew. They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    advice: "Be Proactive. Learn to act and study from your environment. Your will get to know the things you never knew. They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    advice: "Be Proactive. Learn to act and study from your environment. Your will get to know the things you never knew. They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const ResultsContent: React.FC<ResultsContentProps> = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "Learning Style":
        return (
          <section className="mt-4">
            <div className="flex flex-col gap-4">
              <header className="flex gap-4 items-center">
                <Image
                  src={ear}
                  className="h-[30px] w-[30px]"
                  alt="Realistic icon"
                />
                <h2 className="text-2xl font-bold text-red-400 max-sm:text-xl">
                  Kinesthetic
                </h2>
              </header>

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
      case "Characteristics":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0147AA] mb-4">Characteristics</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-gray-700">Manual dexterity and technical proficiency.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Strengths":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0147AA] mb-4">Strengths</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-gray-700">Manual dexterity and technical proficiency.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Workplace Manifestation":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0147AA] mb-4">Manifestation in the Workplace</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-gray-700">Manual dexterity and technical proficiency.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Environment":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0147AA] mb-4">Learning Environment</h2>
            <div className="flex flex-col gap-4">
              {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-start">
                  <span className="text-green-500 mr-2"><TreeDeciduous /></span>
                  <p className="text-gray-700 mt-1">Manual dexterity and technical proficiency.</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Preferences":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Preferences</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {[0, 1, 2, 3].map((_, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0047AB] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-gray-600 mt-1">Manual dexterity and technical proficiency.</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Influence":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Influence on Job Performance, Communication and Learning Preferences</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {workCulture.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3"></span>
                    <p className="text-gray-600">{item.title} : {item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Suggestions":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Suggestions for Incorporating Learning Techniques</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {workCulture.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3"></span>
                    <p className="text-gray-600">{item.title} : {item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Advice/Stratergies":
        return (
          <div className="">
            <h2 className="text-lg font-semibold text-[#0047AB] mb-4">Advice/Strategies</h2>
            <div className="flex flex-col gap-4 border border-gray-400 rounded-lg py-3 px-2">
              {adviceStrategies.map((item, index) => (
                <div key={index} className="bg-[#319759] text-white rounded-lg p-6 flex items-start">
                  <span className="text-white mr-1 flex-shrink-0">●</span>
                  <p className="text-lg font-extralight">{item.advice}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Conclusion":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Conclusion</h2>
            <div className="bg-[#DE5AFF] text-white rounded-lg p-6">
              <p className="text-lg font-extralight">
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
