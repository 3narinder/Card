import React from "react";
import Tags from "./component/Tags";

const person = [
  {
    name: "james clark",
    title: "frontend developer",
    detail:
      "James Stark a skilled frontend developer known for his expertise in crafting visually appealing and user-friendly web interfaces.Proficient in HTML, CSS, and JavaScript, he excels in implementing designs with precision and responsiveness across various platforms.With a passion for staying updated on frontend trends and technologies, James is committed to delivering high-quality projects that enhance user experience. His effective communication and collaboration skills make him a valuable asset to any development team.",
    skills: [
      { skill: "tailwind", type: "primary" },
      { skill: "react", type: "red" },
      { skill: "redux", type: "blue" },
      { skill: "css", type: "red" },
      { skill: "rest API", type: "red" },
      { skill: "design", type: "primary" },
      { skill: "html" },
    ],
  },
];

function App() {
  return (
    <div>
      {person.map((per, index) => (
        <div key={index} className="flex items-center justify-center h-screen">
          <div className="shadow-md bg-gray-50 rounded-md border h-auto lg:w-1/3 w-2/3 m-6 border-red-300 pb-6">
            <div className="h-64 w-auto overflow-hidden flex items-center justify-center">
              <img
                className="h-4/5 w-52 object-cover object-center rounded-full border-4 border-blue-200 shadow-lg"
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={`person-${index}`}
              />
            </div>

            <div className="px-6 my-4">
              <div className="flex items-end justify-between">
                <div className="text-2xl font-semibold uppercase tracking-wider text-gray-800/80">
                  {per.name}
                </div>

                <div className="text-xs mb-1 font-semibold capitalize bg-teal-200 px-2 py-1 rounded-lg tracking-wide text-gray-800/80">
                  {per.title}
                </div>
              </div>

              <div className="mt-4 text-sm leading-6 text-justify">
                {per.detail}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-around px-6 gap-3">
              {per.skills.map((skill, skillIndex) => (
                <Tags key={skillIndex} text={skill.skill} type={skill.type} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
