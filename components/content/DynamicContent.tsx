import React from "react";
import PersonalityTypes from "../Personality/PersonalityTypes";
import PersonalityExplorer from "../Personality/PersonalityExplorer";

interface DynamicContentProps {
  testName: string;
  subItem: string | null;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ testName, subItem }) => {
  const renderContent = () => {
    if (!subItem) {
      switch (testName) {
        case "Interest Explorer":
          return (
            <div className="h-full">
              <h1 className="text-2xl font-bold mb-4">Interest Explorer Overview</h1>
              <p className="mb-4">Discover your interests and how they align with potential career paths.</p>
            </div>
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
            <div className="h-full">
              <h1>results</h1>
            </div>
          );
        default:
          return null;
      }
    }
    
    if (testName === "Interest Explorer") {
      switch (subItem) {
        case "Interest Areas":
          return (
            <div className="h-full">
              interest areas
            </div>
          );
        case "Your Interests":
          return (
            <div className="h-full">
              your interests
            </div>
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