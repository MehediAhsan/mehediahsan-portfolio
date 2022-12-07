import React from 'react';
import Skill from './Skill';

const Skills = () => {
    const skills = [
        {
            id:"1",
            name: "html",
            persent: "80"
        },
        {
            id:"2",
            name: "css",
            persent: "70"
        },
        {
            id:"3",
            name: "javascript",
            persent: "60"
        },
        {
            id:"4",
            name: "react",
            persent: "60"
        },
        {
            id:"5",
            name: "node",
            persent: "60"
        }
    ]
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center my-10 text-gray-700'>My <span className='text-teal-500'>Skills</span></h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    skills.map(skill => <Skill skill={skill}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;