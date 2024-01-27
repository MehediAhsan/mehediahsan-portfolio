import React from 'react';

const Skill = ({ skill }) => {
    const { img, name, percentage } = skill;

    return (
        <div className="relative group rounded-2xl h-24 w-24 overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer border border-gray-500 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center">
                <img className="w-12 h-12 p-2" src={img} alt={name} />
            </div>
            <p className="text-center text-gray-400 text-sm" style={{fontFamily: 'cursive'}}>{name}</p>
            <div className="absolute top-0 left-0 right-0 bg-gray-900 text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300 h-full flex items-center justify-center">
                <p className="text-center text-xl font-bold py-1">{percentage}</p>
            </div>
        </div>
    );
};

export default Skill;
