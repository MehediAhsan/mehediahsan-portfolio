import React from "react";
import photo from "../assets/mehediahsan.png";
import Typewriter from "typewriter-effect";
import "./../App.css";

const Poster = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute border-2 border-[#033535] w-[450px] h-[450px] rounded-full animate-pulse"></div>
        <div className="absolute border border-slate-700 w-[350px] h-[350px] rounded-full"></div>
        <div className="absolute border border-slate-700 w-[250px] h-[250px] rounded-full"></div>
        <div className="absolute border border-slate-700 w-64 h-64 rounded-full animate-ping"></div>
        <div className="absolute border border-slate-700 w-36 h-36 rounded-full"></div>
      </div>
      <img
        src={photo}
        className="w-[250px] h-[250px] shadow-lg absolute rounded-full border border-[#023f3f]"
        alt="Mehedi"
        loading="lazy"
      />
      <div className="absolute bg-gradient-to-r from-[#063636] via-[#000101] to-[#083d3d] w-[250px] h-[250px] rounded-full opacity-30"></div>
      <h1 className="absolute mt-48 uppercase text-slate-300 tracking-[6px]">
        Software Engineer
      </h1>
      <h1 className="absolute font-medium text-3xl md:text-4xl text-white" style={{fontFamily: 'cursive'}}>
        <Typewriter
          options={{
            strings: ["This is Mehedi Ahsan", "A Software Engineer"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      <button class="absolute mt-80 ui-btn">
      <a href="https://drive.google.com/file/d/1WEuqyNWP0S805IE4Sx71X4sxH8_-EPaP/view" target="_blank">
        <span>RESUME</span>
      </a>
      </button>
    </div>
  );
};

export default Poster;
