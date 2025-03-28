import React from "react";
import PersonalityTypes from "../Personality/PersonalityTypes";
import PersonalityExplorer from "../Personality/PersonalityExplorer";
import YourResult from "../Result/YourResult";
import InterestExplorer from "../InterestExplorer/InterestExplorer";
import ThemesOfRiasec from "../RIASEC/ThemesOfRiasec";
import RiasecCareerInfo from "../RIASEC/RiasecCareerInfo";
import ResultsPage from "../InterestExplorer/ResultsPage";

interface DynamicContentProps {
  testName: string;
  subItem: string | null;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ testName, subItem }) => {
  const renderContent = () => {
    if (!subItem) {
      switch (testName) {
        case "Understanding Interest Explorer":
          return (
            <InterestExplorer />
          );
        case "Career Motivators":
          return (
            <div className="h-full">
              <h1 className="text-2xl font-bold mb-4">Career Motivators Overview</h1>
              <p className="mb-4">Understand what drives you in your career journey.</p>
            </div>
          );
        default:
          return (
            <div className="h-full">
              <h1 className="text-2xl font-bold mb-4">{testName}</h1>
              <p className="mb-4">Overview of {testName}</p>
            </div>
          );
      }
    }

    if (testName === "Personality Explorer") {
      switch (subItem) {
        case "Understanding Personality Explorer":
          return <PersonalityExplorer />;
        case "Personality Types":
          return <PersonalityTypes />;
        case "Your Result":
          return (
            <YourResult />
          );
        default:
          return null;
      }
    }

    if (testName === "Understanding Interest Explorer") {
      switch (subItem) {
        case "Understanding Interest Explorer":
          return <InterestExplorer />;
        case "RIASEC Model":
          return (
            <div className="flex flex-col">
              <ThemesOfRiasec/>
              <RiasecCareerInfo/>
            </div>
          );
        case "Your Result":
          return (
           <ResultsPage/>
          );
        default:
          return null;
      }
    }

    if (testName === "Career Motivators") {
      switch (subItem) {
        case "Motivation Types":
          return (
            <div className="h-full">
              motivation types
            </div>
          );
        case "Your Motivators":
          return (
            <div className="h-full">
              your motivators
            </div>
          );
        default:
          return null;
      }
    }

    return (
      <div className="h-full">
        <h1 className="text-2xl font-bold mb-4">{subItem}</h1>
        <p className="mb-4">Content for {subItem} in {testName}</p>
        <div className="p-6 border rounded-lg">
          <p>This content is currently under development.</p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full w-full overflow-auto p-6">
      {renderContent()}
    </div>
  );
};

export default DynamicContent; 