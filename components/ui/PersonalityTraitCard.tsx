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
    <article className="flex flex-col justify-center px-3 py-5 w-full bg-white rounded-xl border border-solid border-stone-300">
      <h3 className="font-bold leading-tight text-neutral-800">{title}</h3>
      <p className="mt-3.5 leading-5 text-stone-500">{description}</p>
    </article>
  );
};

export default PersonalityTraitCard;
