import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useEffect } from "react";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projectsData";
import Project from "../components/Projects/Project";

const AllProjects = () => {
  return (
    <div className="font-primary bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] overflow-hidden min-h-screen">
      <Breadcrumb main="projects" sub="all projects"></Breadcrumb>

      <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
