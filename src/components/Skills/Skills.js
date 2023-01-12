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
            img: 'https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png'
        },
        {
            id:"6",
            name: "mongodb",
            img: 'https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png'
        },
        {
            id:"7",
            name: "github",
            img: 'https://cdn-icons-png.flaticon.com/512/270/270798.png'
        },
        {
            id:"8",
            name: "github",
            img: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png'
        },
        {
            id:"9",
            name: "github",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77rd62Bnh454x8VW7vpdSLl6NYxQwi--mH3k0YDAhj1NEnCqm8oTQbMZfngn9LQTCvfY&usqp=CAU'
        },
        {
            id:"10",
            name: "firebase",
            img: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png'
        },
        {
            id:"11",
            name: "firebase",
            img: 'https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png'
        },
        {
            id:"12",
            name: "firebase",
            img: 'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png'
        }
    ]
    return (
        <div data-aos="fade-up" data-aos-duration="500" name='skills' className='container mx-auto my-28 overflow-hidden'>
            <h1 className='text-3xl font-bold text-center my-20 text-gray-700'>My <span className='text-teal-500'>Skills</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-20 mx-20 md:mx-44 p-0 m-0 overflow-hidden'>
                {
                    skills.map(skill => <Skill skill={skill}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;