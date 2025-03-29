import Image from "next/image";
import { IconProps } from "./types";
import ear from "@/assets/ear.svg";
import eye from "@/assets/eye.svg";
import book from "@/assets/book.svg";
import hand from "@/assets/hand.svg";
import bookWhite from "@/assets/bookWhite.svg";
import earWhite from "@/assets/earWhite.svg";
import handWhite from "@/assets/handWhite.png";
import eyeWhite from "@/assets/eyeWhite.svg";

import { useState } from "react";

export const LearningStyleIcon = ({ icon, color, title, description }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getWhiteIcon = () => {
    if (icon === ear) return earWhite;
    if (icon === book) return bookWhite;
    if (icon === hand) return handWhite;
    if (icon === eye) return eyeWhite; 
    return icon;
  };

  return (
    <div 
      className="flex flex-1 justify-center px-0 py-2.5 max-sm:flex-[0_0_50%] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          rounded-full h-[100px] w-[100px] max-sm:w-20 max-sm:h-20
          flex justify-center items-center
          transition-opacity duration-300 ease-in-out absolute
          ${isHovered ? `${color} opacity-0` : 'opacity-100'}
        `}
      >
        <Image 
          alt={title || "learning style"} 
          src={icon} 
          width={70} 
          height={20}
        />
      </div>
      
      <div 
        className={`
          ${color} rounded-lg p-5 w-[250px] shadow-lg
          transition-opacity duration-300 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        style={{
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="flex flex-col items-center text-white">
          <Image 
            alt={title || "learning style"} 
            src={getWhiteIcon()} 
            width={getWhiteIcon()===eyeWhite ? 100 : 40} 
            height={40} 
            className="mb-3" 
          />
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-center text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const LearningStyleIcons = () => {
  const icons = [
    { 
      icon: ear, 
      color: "bg-[#f26d5b]", 
      title: "AUDITORY", 
      description: "Enjoys problem-solving and intellectual challenges." 
    },
    {
      icon: eye,
      color: "bg-[#4a90e2]",
      title: "VISUAL",
      description: "Prefers hands-on,practical tasks in physical environments."
    },
    {
      icon: book,
      color: "bg-[#ffa500]",
      title: "READING/WRITING",
      description: "Values creativity,self-expression, and originality."
    },
    {
      icon: hand,
      color: "bg-[#50c878]",
      title: "KINESTHETIC",
      description: "Enjoys helping and assisting others in supportive places."
    },
  ];

  return (
    <section className="flex gap-2.5 justify-between px-0 py-2.5 max-sm:flex-wrap">
      {icons.map((icon, index) => (
        <LearningStyleIcon key={index} {...icon} />
      ))}
    </section>
  );
};
