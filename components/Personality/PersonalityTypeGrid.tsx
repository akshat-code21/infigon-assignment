"use client";

import React from "react";
import PersonalityTypeCard from "../ui/PersonalityTypeCard";

const personalityTypes = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/04468edc4443a703582840244e8e3664cdaec608?placeholderIfAbsent=true",
    title: "Inspector",
    typeCode: "ISTJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    isHighlighted: false,
    bg: "bg-blue-100",
    color : "text-[#3D6272]"
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/e52ce5ca4443b775a5e5a7ff6db0d3d62c7d34d3?placeholderIfAbsent=true",
    title: "Protector",
    typeCode: "ISFJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    isHighlighted: false,
    bg: "bg-blue-100",
    color : "text-[#3D6272]"
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/b19f4139b19decd1d7a6a880b14313aed364668b?placeholderIfAbsent=true",
    title: "Artist",
    typeCode: "ISFP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    isHighlighted: false,
    bg: "bg-blue-100",
    color : "text-[#3D6272]"
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/ff4e7c708f434d04dc5561243a1bdf0d61d5748d?placeholderIfAbsent=true",
    title: "Consul",
    typeCode: "ESFJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    isHighlighted: true,
    bg: "bg-blue-100",
    color : "text-[#3D6272]"
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/0895707bf0ad5aaec4ca61e42c793ebab5d07f91?placeholderIfAbsent=true",
    title: "Virtuoso",
    typeCode: "ISTP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    bg: "bg-[#EFE2C9]",
    color : "text-[#AE935E]"
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/6d5d6df5ac381a2b200c10a83e5b365a21d95b8e?placeholderIfAbsent=true",
    title: "Entrepreneur",
    typeCode: "ESTP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    bg: "bg-[#EFE2C9]",
    color : "text-[#AE935E]"
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/3b3d248e924183ac489b38a61b9446705f68fb5a?placeholderIfAbsent=true",
    title: "Entertainer",
    typeCode: "ESFP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    bg: "bg-[#EFE2C9]",
    color : "text-[#AE935E]"
  },
  {
    id: 8,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/83404ca63cf9a3c25a9cb2f1da7e16e56d749826?placeholderIfAbsent=true",
    title: "Executive",
    typeCode: "ESTJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    bg: "bg-[#EFE2C9]",
    color : "text-[#AE935E]"
  },
  {
    id: 9,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/bec9eb8c328d8b8642c0f3a800eeef230383b4b2?placeholderIfAbsent=true",
    title: "Advocate",
    typeCode: "INFJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#D6ECE2]",
      color : "text-[#3D6272]"
  },
  {
    id: 10,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/87555d6f24e816f8adbf22023bb2c24a62b5f40f?placeholderIfAbsent=true",
    title: "Mediator",
    typeCode: "INFP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#D6ECE2]",
      color : "text-[#3D6272]"
  },
  {
    id: 11,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/2217a36b77d9e511e9a7a3561326828df54eb468?placeholderIfAbsent=true",
    title: "Campaigner",
    typeCode: "ENFP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#D6ECE2]",
      color : "text-[#3D6272]"
      
  },
  {
    id: 12,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/540a2d54010be11dff83296db20d1ce1f1b90a66?placeholderIfAbsent=true",
    title: "Protagonist",
    typeCode: "ENFJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#D6ECE2]",
      color : "text-[#3D6272]"
  },
  {
    id: 13,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/166621c9c66b4dd50fd84b9bd8653c9f873ae285?placeholderIfAbsent=true",
    title: "Architect",
    typeCode: "INTJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#E7DFEA]",
      color : "text-[#9361A6]"
  },
  {
    id: 14,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/f8ffe76a87e24535575a3a2f3a3533d33d866dd8?placeholderIfAbsent=true",
    title: "Thinker",
    typeCode: "INTP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#E7DFEA]",
      color : "text-[#9361A6]"
  },
  {
    id: 15,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/339c5178f799ef5485d36a6d5c541612dc5da46b?placeholderIfAbsent=true",
    title: "Debater",
    typeCode: "ENTP",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#E7DFEA]",
      color : "text-[#9361A6]"
  },
  {
    id: 16,
    image:
      "https://cdn.builder.io/api/v1/image/assets/d0fac57f9fc74d7eb974f4d4af23daa2/44f24c5fa1d61461d135ff682a6a498ec366a345?placeholderIfAbsent=true",
    title: "Commander",
    typeCode: "ENTJ",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
      bg : "bg-[#E7DFEA]",
      color : "text-[#9361A6]"
  },
];

const PersonalityTypeGrid: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
      {personalityTypes.map((type) => (
        <PersonalityTypeCard
          key={type.id}
          image={type.image}
          title={type.title}
          typeCode={type.typeCode}
          description={type.description}
          isHighlighted={type.isHighlighted}
          bg={type.bg}
          color={type.color}
        />
      ))}
    </section>
  );
};

export default PersonalityTypeGrid;
