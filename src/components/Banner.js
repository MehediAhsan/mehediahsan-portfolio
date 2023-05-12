import React from 'react';
import photo from '../assets/mehediahsan.png';
import pdf from '../assets/mehedi_ahsan_resume.pdf';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="relative ">
        <div className="container m-auto px-6  md:px-12 lg:pt-[4.8rem] lg:px-10">
            <div className="flex flex-row items-center flex-wrap px-2">
                <div data-aos="fade-up" data-aos-duration="1000" className="relative lg:w-5/12 xl:w-6/12 py-20 md:py-14 xl:py-20">
                    <h1 className="font-semibold text-3xl md:text-4xl text-slate-200 lg:text-5xl lg:w-10/12">
                        <Typewriter
                        options={{
                            strings: ['Hi🙋‍♂️', "I'm Mehedi Ahsan", "MERN Stack Web Developer"],
                            autoStart: true,
                            loop: true,
                            delay: 75
                        }}
                        />
                    </h1>
                    <p className="mt-8 text-slate-200 text-lg lg:w-10/12">I love to work on web application using React, Tailwind, Node JS, Express JS and MongoDB.</p>
                    <button type="button" className="px-4 py-2 font-semibold rounded-full bg-teal-600 text-gray-100 mt-8">
                        <a
                            className="button"
                            href={pdf}
                            download
                            >
                            Download Resume
                        </a>
                    </button>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="ml-auto">
                    
                    <div class="relative lg:w-96 border border-teal-300 before:absolute before:-bottom-2 before:-right-2 before:h-14 before:w-14 before:border-b before:border-teal-200 before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-14 after:w-14 after:border-teal-200 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
                    <img src={photo} className="lg:w-96 relative shadow-teal-400 drop-shadow-2xl p-3" alt="Mehedi" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;