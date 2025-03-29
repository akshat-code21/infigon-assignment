"use client";

import React from "react";

interface PersonalityTypeCardProps {
  image: string;
  title: string;
  typeCode: string;
  description: string;
  isHighlighted?: boolean;
  bg? : string;
  color : string;
}

const PersonalityTypeCard: React.FC<PersonalityTypeCardProps> = ({
  image,
  title,
  typeCode,
  description,
  isHighlighted = false,
  bg,
  color
}) => {
  const bgColor = bg;

  return (
    <article className="flex flex-col flex-1 shrink justify-center pb-5 rounded-xl basis-0 min-w-60">
      <header
        className={`flex gap-2.5 justify-center items-center py-3.5 w-full rounded-xl ${bgColor}`}
      >
        <img
          src={image}
          alt={`${title} personality type icon`}
          className="object-contain self-stretch my-auto bg-blend-normal aspect-[0.99] w-[69px]"
        />
      </header>
      <div className="flex gap-3.5 items-center mt-3 w-full text-sm font-bold leading-tight whitespace-nowrap">
        <h2 className="flex-1 shrink self-stretch my-auto basis-5 text-neutral-800">
          {title}
        </h2>
        <span
          className={`gap-2.5 self-stretch p-2.5 my-auto rounded-2xl ${bgColor} ${color}`}
        >
          {typeCode}
        </span>
      </div>
      <p className="mt-3 text-sm font-light leading-5 text-gray-500">
        {description}
      </p>
    </article>
  );
};

export default PersonalityTypeCard;
