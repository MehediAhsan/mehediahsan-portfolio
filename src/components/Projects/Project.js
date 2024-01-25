import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  const { name, description, image, live_link, github_client, github_server } =
    project;

  return (
    <div className="bg-[#010303] rounded-xl overflow-hidden shadow-lg mx-auto w-11/12 mb-8">
      <img
        className="h-64 w-full object-fill p-5 rounded-xl shadow-lg"
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className="pl-5">
        <div className="flex justify-around items-center mb-4">
          <h5 className="text-teal-400 text-lg sm:text-xl tracking-tight ">
            {name}
          </h5>
          <a
            href={live_link}
            className="rounded py-1 px-2 inline-flex items-center text-gray-200 relative isolation-auto z-10 border-teal-100 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-11 before:hover:left-0 before:rounded before:bg-teal-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-sm font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="mr-2 text-black" /> LIVE
          </a>
        </div>
        {/* <p className="text-gray-600 text-sm md:text-base mb-3 hidden md:block">{description}</p> */}
        <div className="flex flex-wrap gap-4 pb-5">
          <a
            href={github_client}
            className="border-y text-white font-medium rounded text-sm px-2 flex items-center p-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" /> Client
          </a>
          <a
            href={github_server}
            className="border-y text-white font-medium rounded text-sm px-2 flex items-center p-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" /> Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
