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
            img: html,
            percentage: '90%'
        },
        {
            id:"2",
            name: "css",
            img: css,
            percentage: '90%'
        },
        {
            id:"3",
            name: "javascript",
            img: js,
            percentage: '80%'
        },
        {
            id:"4",
            name: "react",
            img: react,
            percentage: '90%'
        },
        {
            id:"5",
            name: "node",
            img: node,
            percentage: '70%'
        },
        {
            id:"6",
            name: "mongodb",
            img: mongodb,
            percentage: '70%'
        },
        {
            id:"7",
            name: "github",
            img: 'https://cdn-icons-png.flaticon.com/512/270/270798.png',
            percentage: '90%'
        },
        {
            id:"8",
            name: "tailwind",
            img: tailwind,
            percentage: '90%'
        },
        {
            id:"9",
            name: "express",
            img: express,
            percentage: '80%'
        },
        {
            id:"10",
            name: "firebase",
            img: firebase,
            percentage: '90%'
        },
        {
            id:"11",
            name: "bootstrap",
            img: bootstrap,
            percentage: '90%'
        },
        {
            id:"12",
            name: "typescript",
            img: typescript,
            percentage: '70%'
        }
    ]
    return (
        <div data-aos="fade-up" data-aos-duration="500" name='skills' className='container mx-auto  my-28 overflow-hidden'>
            <h1 className='text-3xl font-bold text-center mb-10 text-slate-200'>My <span className='text-teal-500'>Skills</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-20 mx-10 sm:mx-14 md:mx-56 p-6 m-0 overflow-hidden'>
                {
                    skills.map(skill => <Skill skill={skill}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;