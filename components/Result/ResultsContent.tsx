import React from "react";
import Image from "next/image";
import architect from "@/assets/image.png"

interface ResultsContentProps {
  activeTab: string;
}

const characteristics = [
  {
    title : "Strategic and Analytical",
    description  : "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles."
  },
  {
    title : "Independent and Visionary",
    description : "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles."
  },
  {
    title : "Logical and Rational",
    description : "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles."
  },
  {
    title : "Goal Oriented and Determined",
    description : "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles."
  },
  {
    title : "Confident and Assertive",
    description : "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles."
  }
]

const strengths = [
  {
    title: "Strategic Thinking",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Problem Solving",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Independence",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Visionary Leadership",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Efficiency",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const weaknesses = [
  {
    title: "Strategic Thinking",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Problem Solving",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Independence",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Visionary Leadership",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Efficiency",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const workStyles = [
  {
    title: "Strategic",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Analytical",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Independent",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Results Driven",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const preferences = [
  {
    title: "Intellectual Stimulation",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Autonomy",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Innovation",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Efficiency",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const interpersonalInteractions = [
  {
    title: "Direct",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Assertive",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Reserved",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Objective",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Visionary",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const workCulture = [
  {
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];

const roles = [
  {
    title: "Strategic Planning and Management",
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

const caseStudies = [
  {
    title: "Entrepreneurship",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Strategic Planning",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];
const personalities = [
  {
    title: "Famous Personalities",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Fictional Characters",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  }
];
const personalGrowth = [
  {
    title: "Flexibilty",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title: "Emotional Intelligence",
    description: "They are friendly, approachable, & enjoy being around people. They are often seen as the \"hosts\" of their social circles."
  },
  {
    title : "Collaboration",
    description : "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles."
  },
  {
    title : "Patience",
    description : "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles."
  }
];

const ResultsContent: React.FC<ResultsContentProps> = ({ activeTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "Personality":
        return (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-purple-50 rounded-lg p-6 w-full md:w-1/4 flex items-center justify-center">
              <div className="text-center">
                <Image
                  src={architect}
                  alt="Architect character"
                  className="mx-auto"
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Architect</h2>
                <div className="border-l border-gray-300 h-8 hidden md:block"></div>
                <h3 className="text-2xl font-medium text-purple-600">INTJ Personality</h3>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">STRATEGIC</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">ANALYTICAL</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  INDEPENDENT
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the
                significance of making informed decisions as you navigate your academic journey and future career. We are
                committed to empowering individuals with the tools and insights needed to confidently navigate the world of
                careers and education.
              </p>
            </div>
          </div>
        );
      case "Characteristics":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Characteristics</h2>
            <ul className="space-y-6">
              {characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-gray-800 mt-3 mr-3"></span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{characteristic.title}</h3>
                    <p className="text-gray-600 mt-1">{characteristic.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      case "Strengths/Weakness":
        return (
          <div className="">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-[#0047AB] mb-4">Strengths</h2>
                <div className="flex flex-col gap-4 border border-gray-300 p-3 rounded-lg">
                  {strengths.map((item, index) => (
                    <div key={index} className="bg-[#2E8B57] bg-opacity-20 rounded-lg p-4">
                      <div className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-white mt-3 mr-3"></span>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{item.title}:</h3>
                          <p className="text-white">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-[#0047AB] mb-4">Weaknesses</h2>
                <div className="flex flex-col gap-4 border border-gray-300 p-3 rounded-lg">
                  {weaknesses.map((item, index) => (
                    <div key={index} className="bg-[#E74C3C] bg-opacity-20 rounded-lg p-4">
                      <div className="flex items-start">
                        <span className="h-2 w-2 rounded-full bg-white mt-3 mr-3"></span>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{item.title}:</h3>
                          <p className="text-white">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "Work Style":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Work Style</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {workStyles.map((style, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-3 mr-3"></span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{style.title}</h3>
                      <p className="text-gray-600 mt-1">{style.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Preferences":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Preferences</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {preferences.map((preference, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0047AB] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{preference.title}</h3>
                      <p className="text-gray-600 mt-1">{preference.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Interpersonal Interaction":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Interpersonal Interaction</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {interpersonalInteractions.map((interaction, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-3 mr-3"></span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{interaction.title}</h3>
                      <p className="text-gray-600 mt-1">{interaction.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Work Culture":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Work Culture They Thrive In</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {workCulture.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-2 mr-3"></span>
                    <p className="text-gray-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Roles":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Roles and Tasks They Excel In</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {roles.map((role, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-600 mt-3 mr-3"></span>
                    <div>
                      <p className="text-gray-600 mt-1">{role.title} : {role.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Case Studies":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Real World Case Studies</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {caseStudies.map((study, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-3 mr-3"></span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{study.title}</h3>
                      <p className="text-gray-600 mt-1">{study.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Famous Personalitites":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Famous Personalitites</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {personalities.map((study, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-3 mr-3"></span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{study.title}</h3>
                      <p className="text-gray-600 mt-1">{study.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Recommendations":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Personal Growth Recommendations</h2>
            <div className="border border-gray-200 rounded-lg p-6">
              <ul className="space-y-6">
                {personalGrowth.map((study, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-gray-800 mt-3 mr-3"></span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{study.title} :</h3>
                      <p className="text-gray-600 mt-1">{study.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Conclusion":
        return (
          <div className="">
            <h2 className="text-2xl font-bold text-[#0047AB] mb-4">Conclusion</h2>
            <div className="bg-[#0047AB] text-white rounded-lg p-6">
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
