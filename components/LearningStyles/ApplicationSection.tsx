import { Card } from "./Card";

export const ApplicationSection = () => {
  const applications = [
    {
      title: "Personalized Skill Development",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Increased Retention and Recall",
      description:
        "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities",
    },
    {
      title: "Enhanced Adaptability",
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
      <div className="grid gap-4 mb-4 grid-cols-[repeat(3,1fr)] max-md:flex-col max-md:grid-cols-[1fr]">
        {applications.map((app, index) => (
          <Card key={index} {...app} />
        ))}
      </div>
    </section>
  );
};
