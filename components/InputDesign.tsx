"use client";

import React, { useState } from "react";
import TestExplorer from "./Sidebar/TestExplorer";
import DynamicContent from "./content/DynamicContent";
import { Menu, X } from "lucide-react";

function InputDesign() {
    const [selectedContent, setSelectedContent] = useState<{
        testName: string;
        subItem: string | null;
    }>({
        testName: "Personality Explorer",
        subItem: "Understanding Personality Explorer"
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);

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
        <div className="flex h-full w-full relative">
            <button 
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`
                ${sidebarOpen ? 'block' : 'hidden'} 
                md:block 
                fixed 
                md:relative 
                z-40 
                bg-white 
                h-screen 
                w-full 
                md:w-auto 
                top-0 
                left-0 
                overflow-y-auto
                border-r border-[#CACACA]
            `}>
                <div className="pt-16 md:pt-0">
                    <TestExplorer 
                        onSubmenuItemClick={handleSubmenuItemClick} 
                        onTestClick={handleTestClick}
                        onMobileItemClick={() => setSidebarOpen(false)}
                    />
                </div>
            </div>
            
            <div className="flex-1 p-6 overflow-auto md:ml-0 w-full">
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
