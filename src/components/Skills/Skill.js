import React from 'react';

const Skill = ({skill}) => {
    const {img} = skill;
    return (
        <div>
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default Skill;