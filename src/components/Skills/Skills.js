import React from 'react';
import Skill from './Skill';

const Skills = () => {
    const skills = [
        {
            id:"1",
            name: "html",
            img: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
        },
        {
            id:"2",
            name: "css",
            img: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
        },
        {
            id:"3",
            name: "javascript",
            img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
        },
        {
            id:"4",
            name: "react",
            img: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
        },
        {
            id:"5",
            name: "node",
            img: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
        },
        {
            id:"6",
            name: "mongodb",
            img: 'https://cdn-icons-png.flaticon.com/512/1104/1104982.png'
        },
        {
            id:"7",
            name: "github",
            img: 'https://cdn-icons-png.flaticon.com/512/270/270798.png'
        },
        {
            id:"8",
            name: "github",
            img: 'https://www.drupal.org/files/project-images/screenshot_361.png'
        },
        {
            id:"9",
            name: "github",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77rd62Bnh454x8VW7vpdSLl6NYxQwi--mH3k0YDAhj1NEnCqm8oTQbMZfngn9LQTCvfY&usqp=CAU'
        }
    ]
    return (
        <div name='skills' className='container w-96 mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center my-10 text-gray-700'>My <span className='text-teal-500'>Skills</span></h1>
            <div className='grid grid-cols-3 gap-20'>
                {
                    skills.map(skill => <Skill skill={skill}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;