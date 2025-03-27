"use client";

import * as React from "react";

interface NavItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={`flex items-start rounded-lg ${isActive ? "bg-gray-50 text-zinc-900" : "text-gray-500"}`}
      onClick={onClick}
    >
      <span className="overflow-hidden gap-2 self-stretch px-4 py-2.5 rounded-lg">
        {label}
      </span>
    </button>
  );
};

export default NavItem;
