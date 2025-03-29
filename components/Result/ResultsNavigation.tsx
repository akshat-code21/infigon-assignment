import React, { useRef, useEffect } from "react";

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
  
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length);
  }, [tabs]);
  

  useEffect(() => {
    const activeTabIndex = tabs.indexOf(activeTab);
    if (activeTabIndex !== -1 && tabRefs.current[activeTabIndex] && navRef.current) {
      const tabElement = tabRefs.current[activeTabIndex];
      const navElement = navRef.current;
      
      const navRect = navElement.getBoundingClientRect();
      const tabRect = tabElement.getBoundingClientRect();
      
      if (tabRect.right > navRect.right || tabRect.left < navRect.left) {
        const scrollLeft = tabElement.offsetLeft - (navElement.clientWidth / 2) + (tabElement.clientWidth / 2);
        
        const maxScroll = navElement.scrollWidth - navElement.clientWidth;
        const finalScroll = Math.max(0, Math.min(scrollLeft, maxScroll));
        
        navElement.scrollTo({
          left: finalScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab, tabs]);

  return (
    <nav 
      ref={navRef}
      className="flex items-center border-b border-solid border-b-stone-300 overflow-x-auto"
    >
      {tabs.map((tab, index) => (
        <button
          key={tab}
          ref={el => tabRefs.current[index] = el}
          onClick={() => onTabChange(tab)}
          className={`px-5 py-4 text-lg font-medium whitespace-nowrap transition-colors relative ${
            activeTab === tab
              ? "text-[#0047AB] font-semibold"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0047AB]"></div>
          )}
        </button>
      ))}
    </nav>
  );
};

export default ResultsNavigation;
