import React, { useEffect, useState } from 'react';
import Project from './Project';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div data-aos="fade-up" data-aos-duration="500" name='projects' className='container mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center my-20 text-gray-700'>My Latest<span className='text-teal-500'> Projects</span></h1>
            <div className='px-5 md:px-14 xl:px-40'>
                <Slider {...settings}>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
                 </Slider>
            </div>
        </div>
    );
};

export default Projects;