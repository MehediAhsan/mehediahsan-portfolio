import React from 'react';
import about from '../assets/about.png';

const About = () => {
    const info = [
        { text: "Years of Experience", count: "01+" },
        { text: "Completed Projects", count: "15+" },
        { text: "Companies Worked", count: "01+" },
    ];

    return (
        <section id="about" className="py-24 md:py-44 px-14 md:px-28">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <div
                    data-aos="fade-right"
                    data-aos-duration="500"
                    className="mt-10 md:mt-0 rounded-full shadow-md transition duration-300 hover:shadow-lg hover:shadow-teal-200 shadow-teal-200 cursor-pointer w-80 h-80 md:w-96 md:h-96"
                >
                    <img
                        src={about}
                        className="w-80 h-80 md:w-96 md:h-96 rounded-full p-2 shadow-lg"
                        alt="Mehedi"
                        loading="lazy"
                    />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h1 className="text-3xl lg:text-4xl text-gray-200 font-bold mb-4">
                        Hi, I'm Mehedi Ahsan
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-200 mb-6">
                        I'm a dedicated MERN Stack Web Developer with a passion for building innovative and user-friendly web applications.Proficient in JavaScript, React, Node.js, Express.js and MongoDB.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-3/4 mx-auto">
                        {info.map((content) => (
                            <div key={content.text} className="text-center">
                                <h3 className="text-4xl font-semibold text-teal-600">
                                    {content.count}
                                </h3>
                                <p className="text-sm text-gray-200">{content.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <p className="text-lg text-teal-600 font-medium mb-2">
                            Contact Me:
                        </p>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2 text-gray-200">
                                <img
                                    className="w-5 h-5"
                                    src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                                    alt=""
                                />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-200">
                                <img
                                    className="w-5 h-5"
                                    src="https://cdn-icons-png.flaticon.com/128/9639/9639598.png"
                                    alt=""
                                />
                                <span>+8801929378419</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-200">
                                <img
                                    className="w-5 h-5"
                                    src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                                    alt=""
                                />
                                <span>mdmehedicse01@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
