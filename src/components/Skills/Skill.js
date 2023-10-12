import React from 'react';

const Skill = ({ skill }) => {
    const { img, name, percentage } = skill;

    return (
        <div className="relative group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg hover:bg-teal-100 transition duration-300 ease-in-out cursor-pointer">
            <div className="flex justify-center items-center py-4">
                <img className="w-14 h-14 md:w-16 md:h-16" src={img} alt={name} />
            </div>
            <p className="text-center text-gray-800 text-lg md:text-xl pb-2">{name}</p>
            <div className="absolute top-0 left-0 right-0 bg-teal-600 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <p className="text-center text-sm md:text-base py-1">{percentage}</p>
            </div>
        </div>
    );
};

export default Skill;
