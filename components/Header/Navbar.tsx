"use client";

import * as React from "react";
import { useState } from "react";
import NavItem from "./NavItem";
import rocket from "@/assets/rocket.svg";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState("Your Report");

  const navItems = [
    "Home",
    "My Tests",
    "My Sessions",
    "Career Library",
    "Your Report",
  ];

  const handleNavClick = (item: string) => {
    setActiveNav(item);
  };

  return (
    <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-20 py-4 w-full bg-white border-b border-slate-200 max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-10 items-center self-stretch my-auto text-sm leading-none text-gray-500 min-w-60 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-start self-stretch my-auto min-w-60 max-md:max-w-full">
            <Image src={rocket} alt="Rocket icon" width={40} height={40}
            />
          {navItems.map((item) => (
            <NavItem
              key={item}
              label={item}
              isActive={activeNav === item}
              onClick={() => handleNavClick(item)}
            />
          ))}
        </div>
      </nav>
      <div className="flex gap-4 items-center self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/e9db1480aa3a97b06d27633f690b56a433fb6b97?placeholderIfAbsent=true"
          alt="Navigation icon"
          className="object-contain shrink-0 self-stretch my-auto w-8 rounded-md aspect-square"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/1c800d39b026466c6d8a54458761f7f81f688bfe?placeholderIfAbsent=true"
          alt="User profile"
          className="object-contain shrink-0 self-stretch my-auto w-12 rounded-md aspect-[1.5]"
        />
      </div>
    </header>
  );
};

export default Navbar;
