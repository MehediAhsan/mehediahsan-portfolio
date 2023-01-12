import React from 'react';
import about from '../assets/about1.png'

const About = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="500" name='about' className='container  mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center my-10 text-gray-700'>About <span className='text-teal-500'>Me</span></h1>
            <div className="container m-auto px-6  md:px-5  xl:px-10">
            <div className="md:flex justify-between px-2 md:px-0">
                
                <div data-aos="fade-right" className="mt-10">
                    <img src={about} className="md:w-[400px] md:h-[400px] xl:w-[480px] xl:h-[480px]  border rounded-full    drop-shadow-2xl" alt="Mehedi" loading="lazy"/>
                </div>
                <div data-aos="fade-left" className=" lg:w-6/12 lg:py-16 xl:py-20">
                    <h1 className="font-semibold text-3xl text-gray-700 md:w-9/12 xl:w-10/12">
                        Hello, I'm Mehedi Ahsan
                    </h1>
                    <p className="mt-3  text-gray-700 xl:text-lg xl:w-11/12">I’m a Web Developer and has been learning web developing more than 1 year now. I am studying B.Sc in Computer Science and Engineering in Faridpur Engineering College. I’m expert in react js, node js, express js and mongodb. I have done so many project in MERN stack. I’m a quick learner, consistent, and hardworking person. I’m very much interested in new technologies and problem solving.
                    </p>
                    <div className='flex flex-col gap-2 mt-4 font-medium'>
                    <p className='flex items-center gap-1'><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="" /><span>Dhaka, Bangladesh</span></p>
                    <p className='flex items-center gap-1'><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/3059/3059502.png" alt="" /><span>+8801929378419</span></p>
                    <p className='flex items-center gap-1'><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="" /><span>mdmehedicse01@gmail.com</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;