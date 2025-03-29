"use client";

import React from "react";
import PersonalityTypeGrid from "./PersonalityTypeGrid";

const PersonalityTypes: React.FC = () => {
  return (
    <div>
      <h2 className="text-[#0047AB] font-bold text-lg mb-5">Personality Types</h2>
      <PersonalityTypeGrid />
    </div>
  );
};

export default PersonalityTypes;
