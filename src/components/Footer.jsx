import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-sm lg:max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm">2024 &copy; Personal Portfolio</p>
        <div className="flex items-center gap-4">
            <a href="https://github.com/ChanpreetSembhi" rel="noreferrer" target="_blank"><RiGithubFill /></a>
            <a href="https://www.linkedin.com/in/0a97ba2a7/" rel="noreferrer" target="_blank"><RiLinkedinBoxFill /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
