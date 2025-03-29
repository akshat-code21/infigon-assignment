import React from "react";
import PersonalityTraitCard from "../ui/PersonalityTraitCard";

interface TraitInfo {
  title: string;
  description: string;
}

interface PersonalityTraitColumnProps {
  traits: TraitInfo[];
}

const PersonalityTraitColumn: React.FC<PersonalityTraitColumnProps> = ({
  traits,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {traits.map((trait, index) => (
        <div key={trait.title} className="w-full">
          <PersonalityTraitCard
            title={trait.title}
            description={trait.description}
          />
        </div>
      ))}
    </div>
  );
};

export default PersonalityTraitColumn;
