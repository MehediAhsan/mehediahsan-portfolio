import React from "react";
import photo from "../assets/mehediahsan.png";

const Poster = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute border border-slate-700 w-96 h-96 rounded-full"></div>
        <div className="absolute border border-teal-400 w-80 h-80 rounded-full animate-pulse"></div>
        <div className="absolute border border-slate-700 w-64 h-64 rounded-full"></div>
        <div className="absolute border border-slate-700 w-44 h-44 rounded-full animate-ping"></div>
        <div className="absolute border border-slate-700 w-52 h-52 rounded-full"></div>
      </div>
      <img
          src={photo}
          className="w-36 h-36 shadow-lg absolute rounded-full"
          alt="Mehedi"
          loading="lazy"
        />
        <h1 className="absolute">Software Engineer</h1>
    </div>
  );
};

export default Poster;
