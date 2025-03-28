import React from "react";
interface ResultsHeaderProps {
  activeTab: string;
  tabs: string[];
  onTabChange: (tab: string) => void;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({
  activeTab,
  tabs,
  onTabChange,
}) => {
  return (
    <header className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl font-bold max-sm:text-2xl">
          <span className="text-zinc-800">Your</span>
          <span className="pl-2 text-green-600">Result</span>
        </h1>
        <div className="w-px bg-stone-300 h-[31px]" aria-hidden="true" />
        <nav className="flex items-center max-md:overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-3 py-5 text-base font-bold ${
                activeTab === tab
                  ? "border-b-2 border-solid border-b-green-600 text-zinc-800"
                  : "text-neutral-400"
              } max-sm:px-2 max-sm:py-4 max-sm:text-sm`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default ResultsHeader;
