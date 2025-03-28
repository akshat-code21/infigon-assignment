"use client";

import React, { useState } from "react";
import TestExplorer from "./Sidebar/TestExplorer";
import DynamicContent from "./content/DynamicContent";

function InputDesign() {
    const [selectedContent, setSelectedContent] = useState<{
        testName: string;
        subItem: string | null;
    }>({
        testName: "Personality Explorer",
        subItem: "Understanding Personality Explorer"
    });

    const handleSubmenuItemClick = (selection: { testName: string; subItem: string }) => {
        setSelectedContent({
            testName: selection.testName,
            subItem: selection.subItem
        });
    };

    const handleTestClick = (testName: string) => {
        const defaultSubItem = testName === "Undesranding Personality Explorer" ? 
            "Understanding Personality Explorer" : null;
            
        setSelectedContent({
            testName: testName,
            subItem: defaultSubItem
        });
    };

    return (
        <div className="flex h-full w-full">
            <div className="border-r border-[#CACACA]">
                <TestExplorer 
                    onSubmenuItemClick={handleSubmenuItemClick} 
                    onTestClick={handleTestClick}
                />
            </div>
            <div className="flex-1 p-6 overflow-auto">
                <DynamicContent
                    key={`${selectedContent.testName}-${selectedContent.subItem || 'overview'}`}
                    testName={selectedContent.testName}
                    subItem={selectedContent.subItem}
                />
            </div>
        </div>
    );
}

export default InputDesign;
