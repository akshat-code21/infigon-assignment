import React from "react";

interface EmotionalElementProps {
  number: number;
  title: string;
  gradientFrom?: string;
  gradientTo?: string;
  numberBgColor?: string;
}

const EmotionalElement: React.FC<EmotionalElementProps> = ({
  number,
  title,
  gradientFrom = "#ffd8b4",
  gradientTo = "#f8b676",
  numberBgColor = "#f5a54a",
}) => {
  return (
    <article 
      className="flex flex-col gap-3 justify-center items-center px-3 py-2.5 text-center h-[170px] rounded-full w-[170px] max-md:h-[150px] max-md:w-[150px] max-sm:h-[140px] max-sm:w-[140px]"
      style={{
        background: `radial-gradient(circle, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      <div
        className="text-base font-bold text-white rounded-full h-[42px] w-[42px] flex items-center justify-center"
        style={{ backgroundColor: numberBgColor }}
      >
        {number}
      </div>
      <h3 className="text-base font-bold leading-5 text-neutral-800">
        {title}
      </h3>
    </article>
  );
};

export default EmotionalElement;
