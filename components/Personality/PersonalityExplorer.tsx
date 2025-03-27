"use client";
import React from "react";
import SectionHeader from "../Header/SectionHeader";
import PersonalityTypeComparison from "../ui/DichotomyPair";
import BenefitCard from "../ui/BenefitCard";

const PersonalityExplorer: React.FC = () => {
  return (
    <article className="w-full max-md:max-w-full">
      <header>
        <h1 className="gap-4 self-stretch w-full text-3xl font-bold leading-none text-blue-800 max-md:max-w-full">
          <span style={{ color: "rgba(37,42,49,1)" }}>Understanding </span>
          Personality Explorer
        </h1>
      </header>

      <section className="mt-5 w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <h2 className="gap-4 self-stretch w-full text-lg font-bold leading-none whitespace-nowrap text-zinc-800 max-md:max-w-full">
              Introduction
            </h2>
            <p className="mt-2 text-base leading-6 text-gray-500 max-md:max-w-full">
              Congratulations on taking the first step for personalized Career
              Planning & Assessment! We understand the significance of making
              informed decisions as you navigate your academic journey and
              future career. We are committed to empowering individuals with the
              tools and insights needed to confidently navigate the world of
              careers and education.
            </p>
          </div>
          <div className="mt-4 w-full text-base font-bold leading-6 text-zinc-800 max-md:max-w-full">
            <p className="flex-1 shrink gap-4 self-stretch w-full basis-0 max-md:max-w-full">
              To understand your personality Myers-Brig Type Indicator (MBTI)
              test was used.{" "}
              <span style={{ fontWeight: 300 }}>
                It is a personality explorer psychometric assessment tool that
                helps individuals understand their preferences, strengths, and
                areas for growth. Developed by Isabel Briggs Myers and Katharine
                Cook Briggs, the MBTI categorizes individuals into 16
                personality types based on four dichotomies. The goal is to gain
                deeper self-awareness, enhance personal development, and improve
                interpersonal relationships
              </span>
            </p>
          </div>
        </div>

        <section className="py-5 mt-4 w-full max-md:max-w-full">
          <SectionHeader title="THE FOUR DICHOTOMIES" isUppercase={true} />

          <div className="flex flex-wrap gap-7 justify-center mt-4 w-full max-md:max-w-full">
            <PersonalityTypeComparison/>
          </div>
        </section>

        <section className="py-5 mt-4 w-full max-md:max-w-full">
          <SectionHeader title="Purpose, Applications, and Benefits of MBTI in Career Development" />

          <div className="mt-4 w-full text-base max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
                <BenefitCard
                  title="Self Awareness"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
                <BenefitCard
                  title="Leadership Development"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
                <BenefitCard
                  title="Career Alignment"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
              </div>
            </div>

            <div className="mt-4 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
                <BenefitCard
                  title="Career Planning"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
                <BenefitCard
                  title="Team Building"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
                <BenefitCard
                  title="Conflict Resolution"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
              </div>
            </div>

            <div className="mt-4 w-full max-md:max-w-full">
              <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
                <BenefitCard
                  title="Improved Communication"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
                <BenefitCard
                  title="Strength Identification"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
                <BenefitCard
                  title="Personal Growth"
                  description="Focuses on concrete, tangible information and present realities tangible information and present realities"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
};

export default PersonalityExplorer;
