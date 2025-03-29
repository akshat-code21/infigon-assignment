import { Card } from "./Card";

export const PurposeSection = () => {
  const purposes = [
    {
      title: "Tailored Learning Strategies",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Optimized Training Programs",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Improved Communication and Collaboration",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Enhanced Job Performance",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
  ];

  return (
    <section className="flex flex-col gap-4 px-0 py-5">
      <h2 className="text-lg font-bold text-blue-800 max-sm:text-base">
        The purposes and applications of learning styles in career development
        include
      </h2>
      <div className="flex gap-4 mb-4 max-md:flex-col">
        <Card {...purposes[0]} />
        <Card {...purposes[1]} />
      </div>
      <div className="flex gap-4 mb-4 max-md:flex-col">
        <Card {...purposes[2]} />
        <Card {...purposes[3]} />
      </div>
    </section>
  );
};
