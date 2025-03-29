import React from "react";
import PersonalityTypes from "../Personality/PersonalityTypes";
import PersonalityExplorer from "../Personality/PersonalityExplorer";
import YourResult from "../Result/YourResult";
import InterestExplorer from "../InterestExplorer/InterestExplorer";
import ThemesOfRiasec from "../RIASEC/ThemesOfRiasec";
import RiasecCareerInfo from "../RIASEC/RiasecCareerInfo";
import ResultsPage from "../InterestExplorer/ResultsPage";
import CareerMotivators from "../CareerMotivators/CareerMotivators";
import CareerMotivatorsContent from "../CareerMotivators/CareerMotivatorsContent";
import EmotionalIntelligence from "../EmotionalIntelligence/EmotionalIntelligence";
import EmotionalIntelligenceComponent from "../DanielGoleman/EmotionalIntelligence";
import LearningStylesPage from "../LearningStyles/LearningStylesPage";
import ResultsPageComponent from "../LearningStyles/ResultsPageComponent";
import EmotionalResultsPage from "../EmotionalIntelligence/EmotionalResultsPage";
import CareerResults from "../CareerMotivators/ValueItem";
import CareerResultsPage from "../CareerMotivators/CareerResults";

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
        case "Understanding Career Motivators":
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

    if (testName === "Interest Explorer") {
      switch (subItem) {
        case "Understanding Interest Explorer":
          return <InterestExplorer />;
        case "RIASEC Model":
          return (
            <div className="flex flex-col">
              <ThemesOfRiasec />
              <RiasecCareerInfo />
            </div>
          );
        case "Your Result":
          return (
            <ResultsPage />
          );
        default:
          return null;
      }
    }

    if (testName === "Career Motivators") {
      switch (subItem) {
        case "Understanding Career Motivators":
          return (
            <div className="h-full">
              <CareerMotivators />
            </div>
          );
        case "10 Career Motivators":
          return (
            <CareerMotivatorsContent />
          )
        case "Your Result":
          return (
            <div className="h-full">
              <CareerResultsPage/>
            </div>
          );
        default:
          return null;
      }
    }

    if (testName === "Emotional Intelligence") {
      switch (subItem) {
        case "Understanding Emotional Intelligence":
          return (
            <div className="h-full">
              <EmotionalIntelligence />
            </div>
          );
        case "Daniel Goleman Emotional Intelligence Test":
          return (
            <EmotionalIntelligenceComponent />
          )
        case "Your Result":
          return (
            <div>
              <EmotionalResultsPage/>
            </div>
          )
        default:
          return null;
      }
    }

    if (testName === "Learning Styles") {
      switch (subItem) {
        case "Understanding Learning Styles":
          return (
            <div className="h-full">
              <LearningStylesPage />
            </div>
          );
        case "Your Result":
          return (
            <div className="h-full">
              <ResultsPageComponent/>
            </div>
          )
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