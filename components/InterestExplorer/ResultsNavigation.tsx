import React from "react";

interface ResultsNavigationProps {
  activeTab: string;
  tabs: string[];
  onTabChange: (tab: string) => void;
}

const ResultsNavigation: React.FC<ResultsNavigationProps> = ({
  activeTab,
  tabs,
  onTabChange,
}) => {
  return (
    <nav className="flex items-center pb-px border-b border-solid border-b-stone-300 max-md:overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-3 py-5 text-base font-bold ${
            activeTab === tab
              ? "border-b border-solid border-b-green-600 text-zinc-800"
              : "text-neutral-400"
          } max-sm:px-2 max-sm:py-4 max-sm:text-sm`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default ResultsNavigation;
