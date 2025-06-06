import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import OpenSource from '../assets/open-source.png'; 

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-[-1rem]'>
        <div className='mt-[36rem] md:mt-[4rem]'>
          <p className='text-2xl font-bold inline border-b-4 border-pink-600 sm:text-4xl mb-2'>
            Skills
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={JavaScript} alt='JavaScript icon' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
            <p className='my-4'>REACT</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={GitHub} alt='GitHub icon' />
            <p className='my-4'>GITHUB</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={Node} alt='Node icon' />
            <p className='my-4'>NODE JS</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={Mongo} alt='MongoDB icon' />
            <p className='my-4'>MONGO DB</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
            <p className='my-4'>TAILWIND</p>
          </div>

          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={FireBase} alt='Firebase icon' />
            <p className='my-4'>FIREBASE</p>
          </div>

          {/* Open Source Contributor */}
          <div
            data-aos='flip-left'
            data-aos-duration='1000'
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
            <img className='w-20 mx-auto' src={OpenSource} alt='Open Source icon' />
            <p className='my-4'>OPEN SOURCE CONTRIBUTOR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
