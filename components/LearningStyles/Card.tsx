import { CardProps } from "./types";

export const Card = ({ title, description }: CardProps) => {
  return (
    <article className="flex flex-col flex-1 gap-3.5 px-3 py-5 rounded-xl bg-[#F4F4F4] bg-opacity-20 max-sm:px-2.5 max-sm:py-3.5">
      <h3 className="text-base font-bold leading-5 text-neutral-800">
        {title}
      </h3>
      <p className="text-base leading-5 text-gray-500">{description}</p>
    </article>
  );
};
