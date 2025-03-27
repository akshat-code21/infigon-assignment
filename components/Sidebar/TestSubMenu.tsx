import React, { useState } from "react";

interface TestSubmenuProps {
  title: string;
  items: string[];
  onItemClick?: (item: string) => void;
}

const TestSubmenu: React.FC<TestSubmenuProps> = ({ title, items, onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <section className="px-5 pt-2.5 pb-4 mt-2.5 w-full text-base leading-snug text-zinc-500">
      {items.map((item, index) => (
        <button
          key={index}
          className={`block mt-2.5 text-left w-full ${
            selectedItem === item ? "text-black font-medium" : "text-zinc-500 hover:text-blue-800"
          }`}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </button>
      ))}
    </section>
  );
};

export default TestSubmenu;
