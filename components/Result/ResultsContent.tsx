import React from "react";
import ear from "@/assets/ear.svg"
import Image from "next/image";
import architect from "@/assets/image.png"
const ResultsContent: React.FC = () => {

  return (
    <section className="mt-4">
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="bg-purple-50 rounded-lg p-6 w-full md:w-1/4 flex items-center justify-center">
          <div className="text-center">
            <Image
              src={architect}
              alt="Architect character"
              className="mx-auto"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Architect</h2>
            <div className="border-l border-gray-300 h-8 hidden md:block"></div>
            <h3 className="text-2xl font-medium text-purple-600">INTJ Personality</h3>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">STRATEGIC</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">ANALYTICAL</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              INDEPENDENT
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the
            significance of making informed decisions as you navigate your academic journey and future career. We are
            committed to empowering individuals with the tools and insights needed to confidently navigate the world of
            careers and education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsContent;
