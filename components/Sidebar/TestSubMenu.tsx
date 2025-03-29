import React, { useState } from "react";

interface TestSubmenuProps {
  title: string;
  items: string[];
  activeItem: string | null;
  onItemClick: (item: string) => void;
}

const TestSubmenu: React.FC<TestSubmenuProps> = ({ title, items, activeItem, onItemClick }) => {
  return (
    <div className="pl-10 py-2 animate-fadeIn">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`py-2 cursor-pointer transition-all duration-300 ease-in-out ${
            activeItem === item ? 'font-bold opacity-100' : 'opacity-80 hover:opacity-100'
          }`}
          onClick={() => onItemClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TestSubmenu;
