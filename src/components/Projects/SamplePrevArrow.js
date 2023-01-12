import React from 'react';

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, display: "block", background: "gray", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
};

export default SamplePrevArrow;