import React from "react";

interface PersonalityTagProps {
  text: string;
}

const PersonalityTag: React.FC<PersonalityTagProps> = ({ text }) => {
  return (
    <span className="px-3 py-2.5 text-base text-red-400 border border-red-400 border-solid rounded-[71px] max-md:flex-auto max-sm:px-2.5 max-sm:py-2 max-sm:text-sm">
      {text}
    </span>
  );
};

export default PersonalityTag;
