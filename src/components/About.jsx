import React from "react";
import { RiArrowRightLine } from "@remixicon/react";
import Profile from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-8 md:py-12 lg:py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 lg:grow lg:pr-24 order-2 md:order-1">
          <span className="mb-8 font-bold uppercase text-center md:text-left tracking-widest text-indigo-600">
            Frontend Web Developer
          </span>
          <h1 className="mb-8 text-center md:text-left text-4xl font-bold leading-none tracking-tighter text-gray-700 lg:text-5xl">
            Hi' I am Chanpreet Singh
          </h1>
          <p className="mb-8 text-center md:text-left text-base leading-relaxed text-gray-600">
            Proficient web developer skilled in HTML5, CSS3, JavaScript (ES6+),
            Bootstrap, Tailwind CSS, Vue.js, and GitHub. Committed to delivering
            responsive, reusable, accessible, and scalable web solutions.
          </p>
          <div className="mt-0 max-w-7xl flex flex-col w-full md:flex-row lg:mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
              <a href="#projects" className="block items-center rounded-xl bg-indigo-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Projects
              </a>
            </div>
            <div className="mt-3 rounded-lg sm:ml-3 sm:mt-0">
              <a href="#contact" className="flex items-center justify-center rounded-xl border border-gray-600 px-5 py-4 text-center font-medium text-gray-600 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-8">
                Contact Me
                <RiArrowRightLine className="size-5 ml-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="max-w-xl mx-auto">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M52.5,-43C65.7,-25.3,72.6,-3.6,67.1,13.3C61.7,30.2,44,42.3,25,51.2C6,60.1,-14.2,65.8,-34.5,60.4C-54.7,54.9,-75,38.3,-80.5,17.4C-86,-3.4,-76.7,-28.6,-60.8,-46.9C-45,-65.3,-22.5,-76.7,-1.4,-75.6C19.6,-74.4,39.3,-60.7,52.5,-43Z"
                  transform="translate(100 100)"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  className="fill-indigo-600"
                  d="M52.5,-43C65.7,-25.3,72.6,-3.6,67.1,13.3C61.7,30.2,44,42.3,25,51.2C6,60.1,-14.2,65.8,-34.5,60.4C-54.7,54.9,-75,38.3,-80.5,17.4C-86,-3.4,-76.7,-28.6,-60.8,-46.9C-45,-65.3,-22.5,-76.7,-1.4,-75.6C19.6,-74.4,39.3,-60.7,52.5,-43Z"
                  transform="translate(100 100)"
                />
                <image
                  xlinkHref={Profile}
                  x={50}
                  y={35}
                  className="w-24 mx-auto"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
