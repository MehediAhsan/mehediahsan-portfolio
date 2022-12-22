import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    console.log(projects);

    return (
        <div data-aos="fade-up" data-aos-duration="2000" name='projects' className='container mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center my-20 text-gray-700'>My <span className='text-teal-500'>Projects</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;