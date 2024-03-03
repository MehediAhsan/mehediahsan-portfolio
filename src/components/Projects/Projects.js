import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Project from './Project';
import './custom-carousel.css'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      name="projects"
      className="container mx-auto my-28 relative"
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

      <div className=" pb-12 mb-5">
        {/* <button className="bg-primary p-2 text-black">Most Views</button> */}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        // navigation={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="mySwiper custom-swiper"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <Project project={project}></Project>
          </SwiperSlide>
        ))}
      </Swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  );
};

export default Projects;
