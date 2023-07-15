import React from 'react';

const Project = ({project}) => {
    const {name, description, image, live_link, github_client, github_server} = project;
    return (
        <div className="shadow-lg w-full md:w-96 mx-5 rounded-2xl mb-5 border border-rose-200">
        
            <img className="rounded-2xl p-2 h-64 w-full" src={image} alt=""/>
        
        <div className="p-5">
                <div className='flex justify-between items-center'>
                <h5 className="text-gray-200 font-semibold text-2xl tracking-tight mb-2">{name}</h5>
                <p className='text-teal-600'>Details</p>
                </div>
            
            <p className="font-normal text-slate-200 mb-3">{description}</p>
        <div className='flex gap-2'>
            <a className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={live_link} target="_blanck">
                Live Website
            </a>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={github_client} target="_blanck">
                Github Client
            </a>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href={github_server} target="_blanck">
                Github Server
            </a>
            </div>
        </div>
    </div>
    );
};

export default Project;