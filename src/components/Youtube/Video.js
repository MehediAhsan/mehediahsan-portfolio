import React from 'react';

const Video = ({ video }) => {
    return (
        <div className="p-2 aspect-w-16 aspect-h-9 flex items-center justify-center">
            <iframe
                width="560"
                height="315"
                src={video.source}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            ></iframe>
        </div>
    );
};

export default Video;
