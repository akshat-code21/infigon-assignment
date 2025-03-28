import React, { useState } from "react";

interface TestSubmenuProps {
  title: string;
  items: string[];
  activeItem: string | null;
  onItemClick: (item: string) => void;
}

const TestSubmenu: React.FC<TestSubmenuProps> = ({ title, items, activeItem, onItemClick }) => {
  return (
    <div className="pl-10 py-2">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`py-2 cursor-pointer ${activeItem === item ? 'font-bold' : ''}`}
          onClick={() => onItemClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TestSubmenu;
