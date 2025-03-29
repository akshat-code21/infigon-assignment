import React from "react";

interface RiasecLetterProps {
  letter: string;
}

const RiasecLetter: React.FC<RiasecLetterProps> = ({ letter }) => {
  return (
    <button
      className="text-2xl font-bold leading-none text-white cursor-pointer"
      aria-label={`${letter} personality type`}
    >
      {letter}
    </button>
  );
};

export default RiasecLetter;
