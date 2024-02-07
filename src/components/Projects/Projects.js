import React, { useEffect, useState } from "react";
import Project from "./Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import "./custom-carousel.css"; // Import your custom CSS file
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      name="projects"
      className="container mx-auto my-28"
    >
      {/* <h1 className='text-3xl font-bold text-center my-20 text-slate-200'>My Latest<span className='text-teal-500'> Projects</span></h1> */}
      <div class="container mb-16">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter tracking-[10px] font-medium">
              {" "}
              PROJECTS
            </h3>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-44">
        <Slider {...settings}>
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </Slider>
        <button className="pt-10">
          <Link
            to="/projects"
            class="flex items-center border border-primary text-white gap-1 px-2 py-1 cursor-pointer tracking-widest rounded bg-blue-500 duration-300 hover:gap-2 hover:translate-x-3 shadow-md shadow-primary"
          >
            View All
            <svg
              class="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Projects;
