import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col flex-1 gap-3.5 px-3 py-5 rounded-xl bg-stone-300 bg-opacity-20 max-md:min-w-[calc(50%_-_8px)] max-sm:w-full">
      <h3 className="text-base font-bold leading-5 text-neutral-800">
        {title}
      </h3>
      <p className="text-base font-light leading-5 text-gray-500">
        {description}
      </p>
    </article>
  );
};

export default InfoCard;
