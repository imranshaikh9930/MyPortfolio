import myImg from "../assets/Pic2.jpg"
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#fff] text-black  dark:bg-[#0a192f] dark:text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full mt-[-12rem] sm:mt-[-8rem]">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-[14rem]  md:mt-0">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-2xl font-bold inline border-b-4 border-pink-600 sm:text-4xl">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap- px-4">
          <div className="sm:text-left text-2xl font-bold sm:text-3xl">
            <p>
            Hello! I'm Imran, delighted to make your acquaintance. Welcome to my corner of the web. Feel free to explore and discover more about me.
              
            </p>
          </div>
          <div>
            <p>
              Hi Everyone, I am Imran shaikh from Aurangabad, India.  I have
              completed <span className="text-md font-bold text-pink-500">Bachelor Of Technology Degree</span>  from <span className="text-md font-bold text-pink-500">Chh.Shahu College Of Engineering.</span> 
              Apart from coding, some other activities that I love to do!
              <ul className="mt-2 sm:mt-[1rem] text-pink-500 list-disc ml-4 font-bold">
                <li>Playing Games</li>
                <li>Listening Music</li>
                <li>Watching Movies</li>
              </ul>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
