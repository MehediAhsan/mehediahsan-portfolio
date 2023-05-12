import React from 'react';
import about from '../assets/about.png'

const About = () => {
    const info = [
        { text: "Years experience", count: "01" },
        { text: "Completed Projects", count: "15" },
        { text: "Companies Work", count: "01" },
      ];
    return (
        <div data-aos="fade-up" data-aos-duration="1000" name='about' className='container  mx-auto my-20'>
            <h1 className='text-3xl font-bold text-center my-10 text-slate-200'>About <span className='text-teal-500'>Me</span></h1>
            <div className="container m-auto px-6  md:px-5  xl:px-10">
            <div className="md:flex justify-between items-center px-2 md:px-0">
                
                <div data-aos="fade-right" data-aos-duration="500" className="mt-10">
                    <img src={about} className="md:w-[400px] md:h-[400px] xl:w-[450px] xl:h-[450px]  border border-teal-200 p-2 rounded-full drop-shadow-2xl" alt="Mehedi" loading="lazy"/>
                </div>
                <div data-aos="fade-left" data-aos-duration="500" className=" lg:w-6/12 lg:py-16 xl:py-20">
                    <h1 className="font-semibold text-3xl text-gray-200 md:w-9/12 xl:w-10/12">
                        Hi👋, I'm Mehedi Ahsan
                    </h1>
                    <p className="mt-3  text-gray-200 xl:text-lg xl:w-11/12"> I’m a web developer with 1 years of experience. I am studying B.Sc in Computer Science and Engineering in Faridpur Engineering College. I have advanced skills in HTML5, CSS3, JavaScript, React js, firebase, Tailwind CSS, Bootstrap, REST API, Git, node js, express js, mongodb, responsive web designed. I’m a quick learner, consistent, and hardworking person.
                    </p>

                    <div className="flex mt-6 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-gray-200">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs text-gray-200">{content.text}</span>
                  </div>
                ))}
              </div>

                    <div className='flex flex-col gap-2 mt-6 font-medium text-cyan-500'>
                    <p className='flex items-center gap-2'><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="" /><span>Dhaka, Bangladesh</span></p>
                    <p className='flex items-center gap-2'><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/9639/9639598.png" alt="" /><span>+8801929378419</span></p>
                    <p className='flex items-center gap-2'><img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" /><span>mdmehedicse01@gmail.com</span></p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;