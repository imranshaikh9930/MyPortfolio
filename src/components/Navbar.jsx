import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Togglebutton from "./Togglebutton";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const {theme,toggleTheme} = useTheme();

  const toggleMethod = () => {
    const htmlEle = document.querySelector("html").classList;

    if (localStorage.theme === 'dark') {
        htmlEle.remove("dark");
        localStorage.removeItem("theme");
        setIsDarkTheme(false); // Update state after removing dark theme
    } else {
        htmlEle.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkTheme(true); // Update state after adding dark theme
    }
}



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#fff] dark:bg-[#0a192f] text-black dark:text-gray-300 z-[100]">
      <div>
        <h1 className="font-bold text-3xl text-pink-600 text-w font-Nav">
          Imran.dev
        </h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex md:items-center">
      <li className="flex items-center">
        
        <Togglebutton onClick ={toggleMethod}/>
       
        </li>
        <li className="hover:bg-dark hover:duration-300  hover:text-gray-500  link">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:bg-dark duration-300 hover:text-gray-500 link">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:bg-dark duration-300 hover:text-gray-500 link">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:bg-dark duration-300 hover:text-gray-500 link">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:bg-dark duration-300 hover:text-gray-500 link ">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
       
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#fff] dark:bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="py-6 text-2xl bg-pink-500 p-4 rounded-full">
          {" "}
          <a href="https://drive.google.com/file/d/1njkm4xgzzSTldO1wZ_jIIhItTayFEA9Z/view?usp=sharing">
            {/* <Link onClick={handleClick} to='#' className='bg-pink-500 p-4 rounded-full' smooth={true} duration={500}> */}
            Resume
            {/* </Link> */}
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/imran-shaikh-0a675b17b/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/imranshaikh9930"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:imranpathan7040@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1njkm4xgzzSTldO1wZ_jIIhItTayFEA9Z/view?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
