import React from 'react';
import Skill from './Skill';
import html from './logo/html-5.png'
import css from './logo/css-3.png'
import js from './logo/js.png'
import react from './logo/react.png'
import node from './logo/node-js.png'
import mongodb from './logo/mongodb.png'
import tailwind from './logo/tailwind-css.png'
import express from './logo/express-js.png'
import firebase from './logo/firebase.png'
import bootstrap from './logo/bootstrap.png'
import typescript from './logo/typescript.png'


const Skills = () => {
    const skills = [
        {
            id:"1",
            name: "html",
            img: html
        },
        {
            id:"2",
            name: "css",
            img: css
        },
        {
            id:"3",
            name: "javascript",
            img: js
        },
        {
            id:"4",
            name: "react",
            img: react
        },
        {
            id:"5",
            name: "node",
            img: node
        },
        {
            id:"6",
            name: "mongodb",
            img: mongodb
        },
        {
            id:"7",
            name: "github",
            img: 'https://cdn-icons-png.flaticon.com/512/270/270798.png'
        },
        {
            id:"8",
            name: "tailwind",
            img: tailwind
        },
        {
            id:"9",
            name: "express",
            img: express
        },
        {
            id:"10",
            name: "firebase",
            img: firebase
        },
        {
            id:"11",
            name: "bootstrap",
            img: bootstrap
        },
        {
            id:"12",
            name: "typescript",
            img: typescript
        }
    ]
    return (
        <div data-aos="fade-up" data-aos-duration="500" name='skills' className='  my-28 overflow-hidden'>
            <h1 className='text-3xl font-bold text-center my-20 text-slate-200'>My <span className='text-teal-500'>Skills</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-20 mx-20 md:mx-64 p-6 m-0 overflow-hidden'>
                {
                    skills.map(skill => <Skill skill={skill}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;