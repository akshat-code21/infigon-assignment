"use client";
import React from "react";

const PersonalityTypeComparison: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2 items-center">
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Extraversion (E)</h3>
            <p className="text-gray-500 mt-2">
              Energized by social interactions and external activities
            </p>
          </div>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/d9b92a7e8edd53618c1ba7082f92dba8f7f31af1?placeholderIfAbsent=true"
          alt="Arrow connecting Extraversion and Introversion"
          className="object-contain max-w-full aspect-[7.81] w-[109px]"
        />
        
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Introversion (I)</h3>
            <p className="text-gray-500 mt-2">
              Energized by solitary activities and internal reflection
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2 items-center">
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Sensing (S)</h3>
            <p className="text-gray-500 mt-2">
              Focuses on concrete, tangible information and present realities
            </p>
          </div>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/d9b92a7e8edd53618c1ba7082f92dba8f7f31af1?placeholderIfAbsent=true"
          alt="Arrow connecting Extraversion and Introversion"
          className="object-contain max-w-full aspect-[7.81] w-[109px]"
        />
        
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Intuition (N)</h3>
            <p className="text-gray-500 mt-2">
              Focuses on abstract, conceptual information and future possibilities
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2 items-center">
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Thinking (T)</h3>
            <p className="text-gray-500 mt-2">
              Decisions based on logic and objective analysis
            </p>
          </div>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/d9b92a7e8edd53618c1ba7082f92dba8f7f31af1?placeholderIfAbsent=true"
          alt="Arrow connecting Extraversion and Introversion"
          className="object-contain max-w-full aspect-[7.81] w-[109px]"
        />
        
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Feeling (F)</h3>
            <p className="text-gray-500 mt-2">
              Decisions based on values, harmony, and impact on people
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2 items-center">
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Judging (J)</h3>
            <p className="text-gray-500 mt-2">
              Prefers structured, organized approaches and planning
            </p>
          </div>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/d9b92a7e8edd53618c1ba7082f92dba8f7f31af1?placeholderIfAbsent=true"
          alt="Arrow connecting Extraversion and Introversion"
          className="object-contain max-w-full aspect-[7.81] w-[109px]"
        />
        
        <div className="w-full md:w-[45%]">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-800">Perceiving (P)</h3>
            <p className="text-gray-500 mt-2">
              Prefers flexible, spontaneous approaches and adaptability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTypeComparison;
