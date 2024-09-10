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
              Hello, I'm Sujit Navadkar, a passionate software engineer with experience in automation, data science, and Java development.
              Currently, I work at Clover Infotech Pvt. Ltd, 
              where I specialize in automating complex Excel tasks with VBA and web scraping using Selenium to automate browser-based tasks and
              workflows. My work improves efficiency and simplifies processes.
            </p>
            <br />
            <p className="text-gray-400 text-base lg:text-lg text-justify">
              I have hands-on experience in Java development, building console-based, web, and database applications using frameworks like Hibernate and Spring Boot. Additionally, I have a strong background in data science, where I’ve worked on projects involving machine learning and data analysis, utilizing tools like Python, Pandas, and Power BI. I enjoy designing intuitive dashboards and databases that help inform decision-making and optimize performance.
            <br />
                With expertise in programming languages such as Python, Java, SQL, and HTML, I constantly seek to improve my skills in automation and machine learning. I’m driven by the desire to create efficient solutions for technical challenges.
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
          <img src={pc2} alt="PC" className=" w-full"  />
        </div>
      </div>
    </div>
  );
};

export default About;
