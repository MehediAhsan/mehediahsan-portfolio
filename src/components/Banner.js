import React from 'react';
import photo from '../assets/mehedi.png';
import pdf from '../assets/mehedi_ahsan_resume.pdf';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="relative pt-5">
        <div className="container m-auto px-6  md:px-12 lg:pt-[4.8rem] lg:px-10">
            <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                    <h1 className="font-semibold text-4xl text-gray-700 md:text-5xl lg:w-10/12">
                        <Typewriter
                        options={{
                            strings: ['Hi,', "I'm Mehedi Ahsan", "Full Stack Web Developer"],
                            autoStart: true,
                            loop: true,
                            delay: 75
                        }}
                        />
                    </h1>
                    <p className="mt-8 text-gray-700 text-lg lg:w-10/12">I love to work on web application using React, Tailwind, Node JS, Express JS and MongoDB.</p>
                    <button type="button" className="px-4 py-2 font-semibold rounded-full bg-gray-700 text-gray-100 mt-8">
                        <a
                            className="button"
                            href={pdf}
                            download
                            >
                            Download Resume
                        </a>
                    </button>
                </div>
                <div className="ml-auto">
                    <img src={photo} className="relative rounded-full shadow-teal-400 drop-shadow-2xl border border-teal-300" alt="Mehedi" loading="lazy"/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;