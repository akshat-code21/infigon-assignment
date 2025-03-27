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
    <section className="flex gap-2.5 items-center w-72 h-full text-base min-w-60">
      <div className="self-stretch my-auto w-72 min-h-[408px] min-w-60">
        {traits.map((trait, index) => (
          <div key={trait.title} className={index > 0 ? "mt-3" : ""}>
            <PersonalityTraitCard
              title={trait.title}
              description={trait.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalityTraitColumn;
