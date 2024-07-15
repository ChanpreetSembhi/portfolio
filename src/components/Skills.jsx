import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-18 lg:py-32">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-700 pb-2">Skills</h2>
        <p className="text-gray-600">
          Proficient in HTML5, CSS3, and JavaScript, with a focus on creating
          intuitive and visually appealing user interfaces that optimize user
          experience and engagement
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white text-center overflow-hidden rounded-lg shadow-lg p-5">
            <img src={skill.logo} alt={skill.name} className="size-20 mx-auto" />
            <h4 className="text-xl font-semibold text-gray-700 pt-3">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
