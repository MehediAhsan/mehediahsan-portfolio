import React from 'react';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
      className={className}
      style={{ ...style, display: "block", background: "teal", borderRadius:"50%" }}
      onClick={onClick}
    />
    );
};

export default SampleNextArrow;