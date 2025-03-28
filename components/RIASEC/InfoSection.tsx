"use client";

import React from "react";
import InfoCard from "./InfoCard";

interface CardData {
  title: string;
  description: string;
}

interface InfoSectionProps {
  title: string;
  cards: CardData[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, cards }) => { 
  const rowCount = Math.ceil(cards.length / 3);
  const rows = Array.from({ length: rowCount }, (_, i) => {
    const startIdx = i * 3;
    return cards.slice(startIdx, startIdx + 3);
  });

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-blue-800">{title}</h2>
      {rows.map((rowCards, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-4 max-md:flex-col">
          {rowCards.map((card, cardIndex) => (
            <InfoCard
              key={`${rowIndex}-${cardIndex}`}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
