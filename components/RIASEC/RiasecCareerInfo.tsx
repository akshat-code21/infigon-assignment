"use client";

import React from "react";
import InfoSection from "./InfoSection";

const RiasecCareerInfo: React.FC = () => {
  const purposeApplicationsData = [
    {
      title: "Career Exploration",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Career Guidance",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Team Building",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];

  const benefitsData = [
    {
      title: "Alignment with Preferences",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Enhanced Self-Awareness",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Facilitates Goal Setting",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Assess Fit",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Improved Decision-Making",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];

  return (
    <main className="flex flex-col flex-1 gap-5 pb-52 -mb-1">
      <div className="flex flex-col gap-4" />
      <InfoSection
        title="Purpose and Applications of RIASEC in Career Development"
        cards={purposeApplicationsData}
      />
      <InfoSection
        title="Benefits of Understanding Interest Using RIASEC for Career Planning"
        cards={benefitsData}
      />
    </main>
  );
};

export default RiasecCareerInfo;
