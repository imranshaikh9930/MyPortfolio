// import React from "react";
import { data } from "../data/data";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="project"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-[26rem] sm:mt-[5rem] md:mt-[9rem]">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
             data-aos="flip-right"
                  data-aos-duration="1000"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div cursor-pointer hover:scale-105 duration-500 "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-500 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                     bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
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
      </div>
    </div>
  );
};

export default Work;
