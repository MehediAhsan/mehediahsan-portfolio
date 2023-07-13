import React from 'react';
import Video from './Video';

const Youtube = () => {
    const videos = [
        {
            id:'1',
            source: 'https://www.youtube.com/embed/aqZU8729Mb0'
        },
        {
            id:'2',
            source: 'https://www.youtube.com/embed/hPECq-UrS7I'
        },
        {
            id:'3',
            source: 'https://www.youtube.com/embed/dS_QE0ltS1g'
        }
    ]
    return (
        <div data-aos="fade-up" data-aos-duration="500" name='youtube' className='container mx-auto  my-28 overflow-hidden'>
            <h1 className='text-3xl font-bold text-center my-20 text-slate-200'>My <span className='text-teal-500'>Youtube Video</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 p-6 m-0 overflow-hidden'>
            {
                videos.map(video => <Video key={video.id} video={video}></Video>)
            }
        </div>
        <div className='flex justify-center items-center mt-5'>
        <a href="https://www.youtube.com/@mehediahsan5192" target='_blank' rel="noreferrer">
        <button type="button" class="text-white border border-white hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded  text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    class="mr-2 -ml-1 w-8 h-8"
                    viewBox="0 0 72 72">
                    <path fill="currentColor" d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z"></path></svg>
                <span class="px-2 py-4 text-2xl text-gray-100 border-l-2 border-gray-100 font-mono">
                </span>
                <div class='text-xl font-mono font-bold pt-0.5'>
                    See all video
                </div>
            </button>
        </a>
        </div>
        </div>
    );
};

export default Youtube;