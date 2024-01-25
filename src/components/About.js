import React from 'react';
import about from '../assets/mehedi.png';

const About = () => {
    const info = [
        { text: "Years of Experience", count: "01+" },
        { text: "Completed Projects", count: "15+" },
        { text: "Companies Worked", count: "02+" },
    ];

    return (
        <section id="about" className="py-24 md:pb-44 px-14 md:px-28">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <div
                    data-aos="fade-right"
                    data-aos-duration="500"
                    className="mt-10 md:mt-0 shadow-md transition duration-300 cursor-pointer"
                >
                    <img
                        src={about}
                        className="w-80 h-80 md:w-96 md:h-96 rounded-2xl drop-shadow-2xl"
                        alt="Mehedi"
                        loading="lazy"
                    />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h1 className="text-3xl text-gray-300 mb-4">
                        Mehedi Ahsan
                    </h1>
                    <p className=" text-gray-400 mb-10 tracking-wide text-justify italic">
                    A dedicated and driven Software Engineer, from Dhaka, Bangladesh.  Completed my graduation B.Sc in Computer Science and Engineering. Dynamic frontend wizard skilled in transforming design visions into captivating user interfaces. Expertise in Tailwind CSS, JavaScript, React, Next, Express, MongoDB. Proven collaborator, elevating cross-functional teamwork to ensure seamless, high-performance web experiences. Design-oriented, detail-focused, and committed to staying ahead of the curve in evolving web trends.Detail-oriented and driven problem solver, dedicated to staying ahead in the ever-evolving world of web development.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-3/4 mx-auto">
                        {info.map((content) => (
                            <div key={content.text} className="text-center">
                                <h3 className="text-3xl font-medium text-teal-600">
                                    {content.count}
                                </h3>
                                <p className="text-sm text-gray-200">{content.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
