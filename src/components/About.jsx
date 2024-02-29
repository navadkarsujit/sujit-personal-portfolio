import React from "react";
import pc2 from "../assets/pc3.png";
// import { FaFileArrowDown } from "react-icons/fa6";

const About = () => {
  // const down = [
  //   {
  //     id: 6,
  //     href: "/SujitNavadkarResume.pdf",
  //     download: true,
  //   },
  // ];
  return (
    <div
      name="about"
      className="h-screen w-full flex justify-center items-center px-3 bg-gradient-to-b from-gray-800 via-black to-black"
    >
      <div className=" max-w-screen-xl w-full mt-12 lg:mt-0 py-2 md:py-8 lg:py-10 px-1 md:px-6  flex flex-row justify-center ">
        <div className="w-full ">
          <div className="pb-6">
            <p className="text-gray-400 text-sm lg:text-base">INTRODUCTION</p>
            <h1 className="text-white text-4xl md:text-5xl font-semibold py-1 ">
              Overview.
            </h1>
          </div>
          <div className="w-full  ">
            <p className="text-gray-400 text-base lg:text-lg text-justify">
              Hello, I'm Sujit Navadkar, a dedicated learner in the field of
              data science and analytics. With a passion for exploring patterns
              and trends, I am currently building my skills in uncovering
              insights from complex datasets using Python, SQL, and advanced
              analytics techniques.
            </p>
            <br />
            <p className="text-gray-400 text-base lg:text-lg text-justify">
              In addition to my ongoing learning journey in data science, I also
              have experience in Java development. I'm deeply passionate about
              crafting robust solutions and driving innovation, and I'm excited
              to continue growing and collaborating on projects that leverage
              technology to make a meaningful impact. Let's connect and explore
              opportunities to learn and create transformative solutions
              together!
            </p>
            <div className="w-full flex justify-center items-center md:justify-start pt-3 mt-3">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-base md:text-lg font-bold text-gray-950 w-fit px-3 md:px-4 py-3 my-1 flex items-center rounded-md  bg-white hover:scale-95 duration-300 cursor-pointer"
                href="https://www.linkedin.com/in/sujit-navadkar-308470239/"
              >
                Know More About Me
              </a>
              {/* {down.map(({ id, href, download }) => (
                <a
                  key={id}
                  download={download}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base md:text-lg font-bold text-gray-950 w-fit px-3 md:px-4 py-3 my-1 flex items-center rounded-md  bg-white hover:scale-95 duration-300 cursor-pointer"
                >
                  Resume
                  <span className="">
                    <FaFileArrowDown size={22} className="ml-1" />
                  </span>
                </a>
              ))} */}
            </div>
          </div>
        </div>
        <div className=" hidden basis-2/3 md:flex justify-center items-center">
          <img src={pc2} alt="PC" className=" w-full" loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default About;
