"use client";

import React from "react";
import ReportHeader from "../Header/ReportHeader";
import CareerOptionsSection from "./CareerOptionsSelection";

const CareerAnalysisReport: React.FC = () => {
  return (
    <main className="w-full max-md:max-w-full">
      <ReportHeader />
      <CareerOptionsSection />
    </main>
  );
};

export default CareerAnalysisReport;
