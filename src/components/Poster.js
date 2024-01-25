import React from "react";
import photo from "../assets/mehediahsan.png";
import Typewriter from "typewriter-effect";
import "./../App.css";

const Poster = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute border border-slate-700 w-[450px] h-[450px] rounded-full"></div>
        <div className="absolute border border-teal-400 w-[350px] h-[350px] rounded-full animate-pulse"></div>
        <div className="absolute border border-slate-700 w-[250px] h-[250px] rounded-full"></div>
        <div className="absolute border border-slate-700 w-36 h-36 rounded-full animate-ping"></div>
        <div className="absolute border border-slate-700 w-36 h-36 rounded-full"></div>
      </div>
      <img
        src={photo}
        className="w-32 h-32 shadow-lg absolute rounded-full"
        alt="Mehedi"
        loading="lazy"
      />
      <h1 className="absolute mt-48 uppercase text-slate-400 tracking-[6px]">
        Software Engineer
      </h1>
      <h1 className="absolute font-medium text-3xl md:text-4xl text-teal-100">
        <Typewriter
          options={{
            strings: ["This is Mehedi Ahsan", "A Software Engineer"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      <button class="absolute mt-72 ui-btn">
      <a href="https://drive.google.com/file/d/1WEuqyNWP0S805IE4Sx71X4sxH8_-EPaP/view" target="_blank">
        <span>RESUME</span>
      </a>
      </button>
    </div>
  );
};

export default Poster;
