import Image from "next/image";
import { IconProps } from "./types";
import ear from "@/assets/ear.svg";
import eye from "@/assets/Mask group.svg";
import book from "@/assets/book.svg";
import hand from "@/assets/hand.svg";
export const LearningStyleIcon = ({ icon, color }: IconProps) => {
  return (
    <div className="flex flex-1 justify-center px-0 py-2.5 max-sm:flex-[0_0_50%]">
      <div
        className={`flex justify-center items-center ${color} rounded-full h-[100px] w-[100px] max-sm:w-20 max-sm:h-20`}
      >
        <Image alt="ear" src={icon} width={70} height={20}/>
      </div>
    </div>
  );
};

export const LearningStyleIcons = () => {
  const icons = [
    { icon: ear, color: "" },
    { icon: eye, color: "" },
    { icon: book, color: "" },
    { icon: hand, color: "" },
  ];

  return (
    <section className="flex gap-2.5 justify-between px-0 py-2.5 max-sm:flex-wrap">
      {icons.map((icon, index) => (
        <LearningStyleIcon key={index} {...icon} />
      ))}
    </section>
  );
};
