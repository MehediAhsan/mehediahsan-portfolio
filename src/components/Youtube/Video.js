import React from 'react';

const Video = ({video}) => {
    return (
        <div class="aspect-w-16 aspect-h-9 flex items-center justify-center">
            <iframe width="560" height="315" src={video.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
};

export default Video;