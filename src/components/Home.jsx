import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Typewriter } from 'react-simple-typewriter';
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name='home' className='w-full h-screen   bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-7xl font-bold text-[#ccd6f6] font-Hero'>
         IMRAN SHAIKH
        </h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6] font-Hero'>
          I'm a  <Typewriter
            words={['FrontEnd Developer', 'React-Developer']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            className='font-Hero'
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </h2>
        <p className='text-[#ccd6f6] py-4 max-w-[700px]'>
          I’m a FrontEnd developer specializing in building and occasionally
          designing exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
          
        </p>
        <div>
            <Link to="project" smooth={true} duration={500}>
          <button className='text-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-md'>
            View Project
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
            </Link>
      
        </div>
       >
      
      </div>
    </div>
  );
};

export default Home;
