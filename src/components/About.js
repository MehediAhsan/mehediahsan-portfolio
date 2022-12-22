import React from 'react';
import about from '../assets/about1.png'

const About = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" name='about' className='container  mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center my-10 text-gray-700'>About <span className='text-teal-500'>Me</span></h1>
            <div className="container m-auto px-6  md:px-12  lg:px-10">
            <div className="md:flex justify-between px-2 md:px-0">
                
                <div data-aos="fade-right" className="mt-10">
                    <img src={about} className="w-[480px] h-[480px] border-4 border-teal-100  shadow-teal-400 drop-shadow-2xl" alt="Mehedi" loading="lazy"/>
                </div>
                <div data-aos="fade-left" className=" lg:w-6/12 lg:py-24 xl:py-32">
                    <h1 className="font-semibold text-3xl text-gray-700 lg:w-10/12">
                        Hello, I'm Mehedi Ahsan
                    </h1>
                    <p className="mt-3  text-gray-700 text-lg lg:w-11/12">I’m a Web Developer and has been learning web developing more than 1 year now. I am studying B.Sc in Computer Science and Engineering in Faridpur Engineering College. I’m expert in react js, node js, express js and mongodb. I have done so many project in MERN stack. I’m a quick learner, consistent, and hardworking person. I’m very much interested in new technologies and problem solving.
</p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;