import React from 'react';

// eslint-disable-next-line react/prop-types
const Togglebutton = ({onClick}) => {
  return (
    <div onClick={onClick} className='relative cursor-pointer'>

        <input type="checkbox" className='sr-only' />
        <div className="block bg-[#0a192f] dark:bg-[#2196f3] w-14 h-8 rounded-full"></div>
        <div className="dark:translate-x-full absolute left-1 top-1 bg-[#fff] dark:bg-white w-6 h-6 rounded-full transition"></div>

    </div>
  )
}

export default Togglebutton