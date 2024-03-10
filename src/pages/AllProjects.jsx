import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useEffect } from "react";
import { useState } from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="font-primary bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] overflow-hidden min-h-screen">
      <Breadcrumb main="projects" sub="all projects"></Breadcrumb>

      <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {projects.map((project) => (
          <div key={project.id} className="border border-[#081818] rounded-xl overflow-hidden shadow-lg mx-auto w-11/12 mb-8">
            <img
              className="h-80 w-full object-cover p-5 rounded-xl shadow-lg"
              src={project.image}
              alt={project.name}
              loading="lazy"
            />
            <div className="px-5">
              <div className="flex justify-between items-center mb-4">
              <a
                  href={project.live_link}
                  className="flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <h5
                  className="text-primary text-lg sm:text-xl tracking-tight"
                  style={{ fontFamily: "cursive" }}
                >
                  {project.name}
                </h5>
                
                  <FaExternalLinkAlt className="mr-2 text-white" />
                </a>
                <button class="btn-details">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
