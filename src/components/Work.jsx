import React, { useState } from "react";
import { data } from "../data/data";

const Work = () => {
  const project = data;
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);

  const displayProjects = project.slice(0, visibleCount);

  const handleLoadMore = () => {
    // console.log("click")
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 4);
      setLoading(false);
    }, 500); // Simulate loading delay
  };

  return (
    <>
      <div
        name="project"
        className="w-full md:h-screen text-gray-300  md:mt-5"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8 mt-[26rem] sm:mt-[5rem] md:mt-[9rem]">
            <p className="text-2xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Projects
            </p>
          </div>

          {/* container for projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayProjects.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="600"
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div cursor-pointer hover:scale-105 duration-500 "
              >
                <div className="opacity-0 group-hover:opacity-100 duration-500">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    <a href={item.live} target="_blank" rel="noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loading Spinner */}
          {loading && (
            <div className="flex justify-center mt-6">
              <div className="w-10 h-10 border-4 border-pink-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Load More Button */}
        </div>
      </div>
          {visibleCount < project.length && !loading && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-700 transition duration-300 ease-in-out cursor-pointer"
              >
                Load More Projects
              </button>
            </div>
          )}
    </>
  );
};

export default Work;
