"use client";

import React, { useState } from "react";
import TestItem from "./TestItem";
import TestSubmenu from "./TestSubMenu";
import Divider from "../ui/Divider";
import DownloadButton from "../ui/DownloadButton";

interface TestExplorerProps {
  onSubmenuItemClick?: (selection: { testName: string; subItem: string }) => void;
  onTestClick?: (testName: string) => void;
}

const TestExplorer: React.FC<TestExplorerProps> = ({ onSubmenuItemClick, onTestClick }) => {
  const [activeTest, setActiveTest] = useState<number>(0);

  const tests = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/1df5e18f52977d4d9508b147e8cff8cc562968e2?placeholderIfAbsent=true",
      testNumber: "TEST 1",
      testName: "Personality Explorer",
      textColor: "text-blue-800",
      submenuTitle: "Understanding Personality Explorer",
      submenuItems: ["Understanding Personality Explorer", "Personality Types", "Your Result"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/16ab353f780502179c560d050daa81b70445c4b8?placeholderIfAbsent=true",
      testNumber: "TEST 2",
      testName: "Interest Explorer",
      textColor: "text-green-600",
      submenuTitle: "Understanding Interest Explorer",
      submenuItems: ["Interest Areas", "Your Interests"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/98c1e1ea421adf9234d5739dfb02351a47593098?placeholderIfAbsent=true",
      testNumber: "TEST 3",
      testName: "Career Motivators",
      textColor: "text-amber-500",
      submenuTitle: "Understanding Career Motivators",
      submenuItems: ["Motivation Types", "Your Motivators"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/c715661d6f16380d04d5ad11e0135d005d059572?placeholderIfAbsent=true",
      testNumber: "TEST 4",
      testName: "Emotional Intelligence",
      textColor: "text-blue-500",
      submenuTitle: "Understanding Emotional Intelligence",
      submenuItems: ["EQ Components", "Your EQ Score"],
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/316f9a1b8236a493d20b73e26d9e8baee196033d?placeholderIfAbsent=true",
      testNumber: "TEST 5",
      testName: "Learning Styles",
      textColor: "text-fuchsia-500",
      submenuTitle: "Understanding Learning Styles",
      submenuItems: ["Learning Style Types", "Your Learning Style"],
    },
  ];

  const handleSubmenuItemClick = (testName: string, subItem: string) => {
    if (onSubmenuItemClick) {
      onSubmenuItemClick({ testName, subItem });
    }
  };

  const handleTestClick = (index: number) => {
    setActiveTest(index);
    if (onTestClick) {
      onTestClick(tests[index].testName);
    }
  };

  return (
    <nav className="flex flex-col justify-center">
      <div className="w-full">
        {tests.map((test, index) => (
          <React.Fragment key={index}>
            <TestItem
              icon={test.icon}
              testNumber={test.testNumber}
              testName={test.testName}
              isActive={index === activeTest}
              textColor={test.textColor}
              onClick={() => handleTestClick(index)}
            />

            {index === activeTest && test.submenuTitle && (
              <TestSubmenu
                title={test.submenuTitle}
                items={test.submenuItems || []}
                onItemClick={(subItem) => handleSubmenuItemClick(test.testName, subItem)}
              />
            )}

            {index < tests.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>

      <Divider />

      <DownloadButton
        label="Download Report Card"
        icon="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/6c731a093920c133c9a07d9a70ce4d05d8a9e586?placeholderIfAbsent=true"
        onClick={() => console.log("Download report")}
      />
    </nav>
  );
};

export default TestExplorer;
