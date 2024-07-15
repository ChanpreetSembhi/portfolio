import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-18 lg:py-32">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-700 pb-2">Featured Projects</h2>
        <p className="text-gray-600">
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={project.poster}
                alt={project.title}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-xl font-semibold text-gray-600">
                  {project.title}
                </p>
                <p className="mt-3 text-sm text-gray-500">{project.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-5 *:w-full *:transition-all *:duration-200 *:rounded-md *:p-2.5">
                <a
                  href={project.links.preview} target="_blank" rel="noreferrer"
                  className="border border-indigo-500 bg-indigo-500 text-white font-medium text-center text-sm hover:bg-indigo-600 hover:border-indigo-600 transition-all ease-in-out duration-300"
                >
                  View Live
                </a>
                <a
                  href={project.links.githubrepo} target="_blank" rel="noreferrer"
                  className="border border-indigo-500 text-indigo-600 text-center font-medium text-sm hover:bg-indigo-600 hover:border-indigo-600 hover:text-white  transition-all ease-in-out duration-300"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
