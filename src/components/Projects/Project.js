import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = ({ project }) => {
    const { name, description, image, live_link, github_client, github_server } = project;

    return (
        <div className=" rounded-lg overflow-hidden shadow-lg mx-auto w-11/12 mb-8">
            <img
                className="h-auto w-full object-cover"
                src={image}
                alt={name}
                loading="lazy"
            />
            <div className="p-3 md:p-5">
                <h5 className="text-gray-200 font-semibold text-lg sm:text-xl md:text-2xl tracking-tight mb-4">{name}</h5>
                {/* <p className="text-gray-600 text-sm md:text-base mb-3">{description}</p> */}
                <div className="flex flex-wrap gap-2">
                    <a
                        href={live_link}
                        className="bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm py-2 px-2 inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaExternalLinkAlt className="mr-2" /> Live Website
                    </a>
                    <a
                        href={github_client}
                        className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm py-2 px-2 inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="mr-2" /> Github Client
                    </a>
                    <a
                        href={github_server}
                        className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm py-2 px-2 inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="mr-2" /> Github Server
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
