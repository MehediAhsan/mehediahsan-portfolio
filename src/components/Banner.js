import React from 'react';
import photo from '../assets/mehedi.png';
import pdf from '../assets/mehedi_ahsan_resume.pdf'

const Banner = () => {
    return (
        <div className="relative">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                    <h1 className="font-bold text-4xl text-gray-700 md:text-5xl lg:w-10/12">Hi, I am Mehedi Ahsan</h1>
                    <p className="mt-8 text-gray-700 text-xl font-semibold lg:w-10/12">Full Stack Web Developer</p>
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
                <div className="ml-auto  lg:w-6/12">
                    <img src={photo} className="relative" alt="food illustration" loading="lazy" width="4500" height="4500"/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;