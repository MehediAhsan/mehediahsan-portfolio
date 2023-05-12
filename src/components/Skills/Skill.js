import React from 'react';

const Skill = ({skill}) => {
    const {img} = skill;
    return (
        <div className='flex items-center justify-center border border-dotted border-teal-300 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
            <img className='w-14 h-14' src={img} alt="" />
        </div>
    );
};

export default Skill;