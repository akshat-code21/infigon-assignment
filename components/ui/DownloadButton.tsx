import React from "react";

interface DownloadButtonProps {
  label: string;
  icon: string;
  onClick?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      className="mt-2 flex gap-1 items-center px-3 py-3.5 w-full text-base font-bold leading-none text-center text-blue-800 bg-white rounded-lg border border-blue-800 border-solid min-h-[50px]"
      onClick={onClick}
    >
      <span className="flex-1 shrink self-stretch my-auto basis-0">
        {label}
      </span>
      <img
        src={icon}
        alt="Download icon"
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
      />
    </button>
  );
};

export default DownloadButton;
