"use client";
import React from "react";

interface PersonalityTraitCardProps {
  title: string;
  description: string;
}

const PersonalityTraitCard: React.FC<PersonalityTraitCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-zinc-800">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default PersonalityTraitCard;
