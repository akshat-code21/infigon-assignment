import * as React from "react";

interface BulletPointProps {
  text: string;
}

const BulletPoint: React.FC<BulletPointProps> = ({ text }) => {
  return (
    <div className="flex gap-2.5 items-center w-full">
      <div className="flex pt-[2px] items-start gap-[10px]">
        <svg
          width="5"
          height="31"
          viewBox="0 0 5 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="4.5" r="2.5" fill="#696969" />
        </svg>
      </div>
      <p className="text-base leading-5 text-stone-500 w-[438px] max-md:w-full">
        {text}
      </p>
    </div>
  );
};

export default BulletPoint;
