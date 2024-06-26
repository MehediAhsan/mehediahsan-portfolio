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
import vscode from "./logo/vscode.png";
import postman from "./logo/postman.png";
import figma from "./logo/figma.png";
import illustrator from "./logo/illustrator.png";
import git from "./logo/git.png";

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
        id: "6",
        name: "nextjs",
        img: nextjs,
        percentage: "70%",
      },
      {
        id: "7",
        name: "tailwind",
        img: tailwind,
        percentage: "90%",
      },
    ],
    comfortable: [
      {
        id: "1",
        name: "express",
        img: express,
        percentage: "80%",
      },
      {
        id: "2",
        name: "firebase",
        img: firebase,
        percentage: "90%",
      },
      {
        id: "3",
        name: "bootstrap",
        img: bootstrap,
        percentage: "90%",
      },
      {
        id: "4",
        name: "typescript",
        img: typescript,
        percentage: "70%",
      },
      {
        id: "5",
        name: "mongodb",
        img: mongodb,
        percentage: "70%",
      },
    ],
    tools: [
      {
        id: "1",
        name: "github",
        img: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
        percentage: "90%",
      },
      {
        id: "2",
        name: "vscode",
        img: vscode,
        percentage: "90%",
      },
      {
        id: "3",
        name: "postman",
        img: postman,
        percentage: "90%",
      },
      {
        id: "4",
        name: "figma",
        img: figma,
        percentage: "90%",
      },
      {
        id: "5",
        name: "illustrator",
        img: illustrator,
        percentage: "90%",
      },
      {
        id: "6",
        name: "git",
        img: git,
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
      <div className="container mb-20">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter tracking-[10px] font-medium">
              {" "}
              SKILLS
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14 justify-center md:mx-10">
        {/* Expertise */}
        <div className="flex flex-col md:flex-row gap-10 mx-10 items-center">
          <h1
            className="text-2xl text-white mb-5 italic"
            style={{ fontFamily: "cursive" }}
          >
            Expertise:
          </h1>
          <div className="flex flex-wrap gap-8">
            {skills.expert.map((skill, i) => (
              <Skill skill={skill} key={i}></Skill>
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
            {skills.comfortable.map((skill, i) => (
              <Skill skill={skill} key={i}></Skill>
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
            {skills.tools.map((skill, i) => (
              <Skill skill={skill} key={i}></Skill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
