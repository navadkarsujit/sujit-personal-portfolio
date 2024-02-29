import React from "react";
import pc2 from "../assets/pc2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFileArrowDown } from "react-icons/fa6";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Data Scientist" ,"Data Analyst","Java Developer"],
      startDelay: 100,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={35} />
        </>
      ),
      href: "https://linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/navadkarsujit",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={35} />
        </>
      ),
      href: "mailto:sujit@gmail.com",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       <BsFillPersonLinesFill size={35} />
    //     </>
    //   ),
    //   href: "/SujitNavadkarResume.pdf",
    //   download: true,
    // },
  ];
  const down = [
    {
      id: 6,
      href: "/SujitNavadkarResume.pdf",
      download: true,
    },
  ];
  return (
    <div
      name="home"
      className="h-screen w-full flex justify-center items-center px-3 bg-gradient-to-b from-black via-black to-gray-800"
    >
      {/* <div className="max-w-screen-xl w-full mt-12 lg:mt-0 py-4 md:py-10 px-3 md:px-6 flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 shadow-lg rounded-lg border-"> */}
      <div className="max-w-screen-xl w-full mt-12 lg:mt-0 py-2 md:py-10 px-1 md:px-6 flex flex-col md:flex-row justify-between items-center ">
        <div className="basis-0 md:basis-1/2 flex flex-col gap-2">
          <h3 className="text-3xl md:text-4xl text-white font-semibold md:font-semibold">
            Hello, I'm
          </h3>
          <h1 className="text-5xl md:text-6xl text-white font-semibold md:font-bold">
            Sujit Navadkar
          </h1>
          <h2 className="text-gray-100 font-semibold py-1 md:py-2 text-xl md:text-2xl text-justify md:text-start">
            And I am <span ref={el}></span>
          </h2>
          <p className="text-gray-400  text-lg text-justify md:text-start">
            Passionate about changing the world with technology.
          </p>
          <div className="flex justify-start items-center pt-4 ">
            <ul className="w-8/12 md:w-1/3 flex justify-between items-center">
              {links.map(({ id, child, href, download }) => (
                <li
                  key={id}
                  className="border-2 p-2 rounded-full text-gray-300"
                >
                  <a
                    download={download}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center w-full hover:scale-105 hover:text-gray-100 duration-200 "
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-3 md:pt-6 py-6 flex justify-start items-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group font-bold text-white w-fit px-3 md:px-4 py-3 my-1 flex items-center rounded-md  bg-blue-500 hover:bg-blue-600 duration-300 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={24} className="ml-1" />
              </span>
            </Link>

            {down.map(({ id, href, download }) => (
              <a
                key={id}
                download={download}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="ml-5 font-bold text-gray-950 w-fit px-3 md:px-4 py-3 my-1 flex items-center rounded-md  bg-white hover:scale-95 duration-300 cursor-pointer"
              >
                Resume
                <span className="">
                  <FaFileArrowDown size={24} className="ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="basis-0 md:basis-1/2 flex justify-center items-center ">
          <img src={pc2} alt="PC" className="hidden md:flex w-2/3 md:w-full " />
        </div>
      </div>
    </div>
  );
};

export default Home;

// {/* <MdKeyboardArrowRight size={24} className="ml-1" /> */}
