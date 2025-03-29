"use client";
import * as React from "react";
import { Header } from "./Header";
import { Introduction } from "./Introduction";
import { LearningStyleIcons } from "./LearningStyleIcon";
import { PurposeSection } from "./PurposeSection";
import { ApplicationSection } from "./ApplicationSection";

export default function LearningStylesPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="flex flex-col gap-5 p-5 mx-auto my-0 max-w-[1200px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <Introduction />
        <LearningStyleIcons />
        <PurposeSection />
        <ApplicationSection />
      </main>
    </>
  );
}
