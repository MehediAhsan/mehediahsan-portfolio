import React from "react";
import Skill from "./Skill";
import html from "./logo/html-5.png";
import css from "./logo/css-3.png";
import js from "./logo/js.png";
import react from "./logo/react.png";
import node from "./logo/node-js.png";
import mongodb from "./logo/mongodb.png";
import tailwind from "./logo/tailwind-css.png";
import express from "./logo/express-js.png";
import firebase from "./logo/firebase.png";
import bootstrap from "./logo/bootstrap.png";
import typescript from "./logo/typescript.png";
import nextjs from "./logo/nextjs.png";

const Skills = () => {
  const skills = {
    expert: [
      {
        id: "1",
        name: "html",
        img: html,
        percentage: "90%",
      },
      {
        id: "2",
        name: "css",
        img: css,
        percentage: "90%",
      },
      {
        id: "3",
        name: "javascript",
        img: js,
        percentage: "80%",
      },
      {
        id: "4",
        name: "react",
        img: react,
        percentage: "90%",
      },
      {
        id: "5",
        name: "node",
        img: node,
        percentage: "70%",
      },
      {
        id: "7",
        name: "nextjs",
        img: nextjs,
        percentage: "70%",
      },
      {
        id: "8",
        name: "tailwind",
        img: tailwind,
        percentage: "90%",
      },
    ],
    comfortable: [
      {
        id: "9",
        name: "express",
        img: express,
        percentage: "80%",
      },
      {
        id: "10",
        name: "firebase",
        img: firebase,
        percentage: "90%",
      },
      {
        id: "11",
        name: "bootstrap",
        img: bootstrap,
        percentage: "90%",
      },
      {
        id: "12",
        name: "typescript",
        img: typescript,
        percentage: "70%",
      },
      {
        id: "13",
        name: "mongodb",
        img: mongodb,
        percentage: "70%",
      },
    ],
    tools: [
      {
        id: "7",
        name: "github",
        img: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
        percentage: "90%",
      },
    ],
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      name="skills"
      className="container mx-auto mb-20 overflow-hidden"
    >
      {/* <h1 className='text-3xl font-bold text-center mb-10 text-slate-200'>My <span className='text-teal-500'>Skills</span></h1> */}
      <div class="container mb-20">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter tracking-[10px] font-medium">
              {" "}
              SKILLS
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 justify-center">
        {/* Expertise */}
        <div className="flex flex-col md:flex-row gap-10 mx-10 items-center">
          <h1
            className="text-2xl text-white mb-5 italic"
            style={{ fontFamily: "cursive" }}
          >
            Expertise:
          </h1>
          <div className="flex flex-wrap gap-8">
            {skills.expert.map((skill) => (
              <Skill skill={skill}></Skill>
            ))}
          </div>
        </div>
        {/* Comfotable */}
        <div className="flex flex-col md:flex-row gap-10 mx-10 items-center">
          <h1
            className="text-2xl text-white mb-5 italic"
            style={{ fontFamily: "cursive" }}
          >
            Comfortable:
          </h1>
          <div className="flex flex-wrap gap-8">
            {skills.comfortable.map((skill) => (
              <Skill skill={skill}></Skill>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-col md:flex-row gap-10 mx-10 items-center">
          <h1
            className="text-2xl text-white mb-5 italic"
            style={{ fontFamily: "cursive" }}
          >
            Tools:
          </h1>
          <div className="flex flex-wrap gap-8">
            {skills.tools.map((skill) => (
              <Skill skill={skill}></Skill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
