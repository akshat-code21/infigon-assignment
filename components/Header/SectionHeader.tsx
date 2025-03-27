"use client";
import React from "react";

interface SectionHeaderProps {
  title: string;
  isUppercase?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  isUppercase = false,
}) => {
  return (
    <h2
      className={`gap-4 self-stretch w-full text-lg font-bold leading-none text-blue-800 max-md:max-w-full ${isUppercase ? "uppercase" : ""}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
