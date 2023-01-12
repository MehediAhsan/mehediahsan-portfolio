import React from 'react';

const Skill = ({skill}) => {
    const {img} = skill;
    return (
        <div>
            <img className='w-20 h-20' src={img} alt="" />
        </div>
    );
};

export default Skill;