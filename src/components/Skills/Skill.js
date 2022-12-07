import React from 'react';

const Skill = ({skill}) => {
    return (
        <div>
            <h1 className="text-xl font-semibold pl-10 pt-2 sm:pt-5 text-gray-700  
             ">{skill.name}</h1>
    <div>
        <div className="block p-4 m-auto rounded-lg w-72">
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                <div className="w-3/4 h-full text-center text-xs text-white bg-teal-500 rounded-full">
                    {skill.persent}%
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Skill;