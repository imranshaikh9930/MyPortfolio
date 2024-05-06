// import React from "react";
import { data } from "../data/data";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="work"
      className="overflow-hidden w-full md:h-screen  bg-[#fff]  text-[#000] dark:text-gray-300 dark:bg-[#0a192f] m-auto  "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-[25rem] sm:mt-[-5rem]">
          <p className="text-2xl font-bold inline border-b-4 text-[#000] dark:text-gray-300 border-pink-600 sm:text-4xl">
            Work
          </p>
        </div>

        {/* container for projects */}

        <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer ">
          {/* Gird Item */}
          {project.map((project) => (
            <div
              key={project.id}
              className="flex  flex-wrap gap-6  perspective group h-[380px] w-[280px] cursor-pointer bg-transparent"
            >
              <div className="preserve-3d group-hover:my-rotate-y-180 relative h-full w-full duration-1000">
                <div className="backface-hidden absolute h-full w-full border-2 rounded-sm">
                  <img src={project.image} className="h-full w-full" />
                </div>
                <div className="my-rotate-y-180 backface-hidden absolute h-full w-full overflow-hidden bg-gray-400 rounded-lg">
                  <div className="flex h-full flex-col items-center justify-center px-2 pb-24 text-center text-gray-800 ">
                    <h1 className="text-3xl font-semibold">{project.name}</h1>

                    <a
                      href={project.live}
                      className="flex justify-center items-center"
                    >
                      <button className="absolute -bottom-20 scale-0 rounded-full bg-teal-500 px-6 py-2 font-semibold text-white delay-500 duration-1000 group-hover:bottom-20 group-hover:scale-125">
                        Live
                      </button>
                    </a>
                    <a
                      href={project.github}
                      className="flex justify-center items-center"
                    >
                      <button className="absolute -bottom-20 scale-0 rounded-full bg-teal-500 px-6 py-2 font-semibold text-white delay-500 duration-1000 group-hover:bottom-36 group-hover:scale-125">
                        Code
                      </button>
                    </a>
                  </div>
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
