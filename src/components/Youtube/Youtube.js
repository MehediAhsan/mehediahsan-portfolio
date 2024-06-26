import React from "react";
import Video from "./Video";
import { FaYoutube } from "react-icons/fa";

const Youtube = () => {
  const videos = [
    {
      id: "1",
      source: "https://www.youtube.com/embed/aqZU8729Mb0",
    },
    {
      id: "2",
      source: "https://www.youtube.com/embed/hPECq-UrS7I",
    },
    {
      id: "3",
      source: "https://www.youtube.com/embed/dS_QE0ltS1g",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      name="youtube"
      className="container mx-auto  my-28 overflow-hidden"
    >
      {/* <h1 className='text-3xl font-bold text-center my-10 text-slate-200'>My <span className='text-teal-500'>Youtube Video</span></h1> */}
      <div className="container mb-10">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter tracking-[10px] font-medium">
              {" "}
              Youtube Video
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 p-6 m-0 overflow-hidden">
        {videos.map((video) => (
          <Video key={video.id} video={video}></Video>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <a
          href="https://www.youtube.com/@mehediahsan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="btn-details flex"
          >
            <FaYoutube className="text-xl mr-2" />
            See all videos
          </button>
        </a>
      </div>
    </div>
  );
};

export default Youtube;
