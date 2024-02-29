import React from "react";
import css from "../assets/skill/css.png";
import html from "../assets/skill/html.png";
import java from "../assets/skill/java.png";
import mysql from "../assets/skill/mysql.png";
import py from "../assets/skill/py.png";
import react from "../assets/skill/react.png";
import hibernate from "../assets/skill/hibernate.png";
import spring from "../assets/skill/spring.png";
import np from "../assets/skill/np.png";
import pd from "../assets/skill/pd.png";
import mt from "../assets/skill/mt.png";
import bs from "../assets/skill/bs.png";
import pbi from "../assets/skill/pbi.png";
import exc from "../assets/skill/exc.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Skills = () => {
  const skill = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: py,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 3,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-cyan-500",
    },
  ];
  const libe = [
    {
      id: 1,
      src: np,
      title: "NumPy",
      style: "shadow-sky-500",
    },
    {
      id: 2,
      src: pd,
      title: "Pandas",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: mt,
      title: "Matplotlib",
      style: "shadow-sky-700",
    },
    {
      id: 4,
      src: bs,
      title: "BeautifulSoup",
      style: "shadow-white",
    },
  ];
  const framewor = [
    {
      id: 1,
      src: hibernate,
      title: "Hibernate",
      style: "shadow-stone-600",
    },
    {
      id: 2,
      src: spring,
      title: "Spring",
      style: "shadow-green-700",
    },
  ];
  const tool = [
    {
      id: 1,
      src: pbi,
      title: "PowerBI",
      style: "shadow-stone-600",
    },
    {
      id: 2,
      src: exc,
      title: "Excel",
      style: "shadow-green-700",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full flex justify-center items-center px-3 bg-gradient-to-b from-gray-800 via-black to-black"
    >
      <div className=" max-w-screen-xl w-full my-12 py-2 md:py-8 px-1 md:px-6 flex flex-col justify-center ">
        {/* <div className="max-w-screen-xl w-full py-2 md:py-8 lg:py-10 px-1 md:px-6  flex flex-col justify-center "> */}
        {/* Heading */}
        <div className="pt-12">
          <p className="text-gray-400 text-sm lg:text-base">MY EXPERIENCE</p>
          <h1 className="text-white text-4xl md:text-5xl font-semibold py-1">
            Skills.
          </h1>
        </div>
        {/* Content */}
        {/* <div className="flex flex-wrap bg-slate-400"> */}
        <div className="pt-2 md:pt-4 w-full rounded-b-lg shadow-md bg-gradient-to-b from-transparent via-gray-950 to-gray-900">
          <h1 className="text-gray-200 text-lg md:text-xl  font-semibold px-3 md:px-4 inline">
            Languages and Databases
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-3 md:px-4 pt-4 pb-4 md:pb-6 ">
            {/* skills */}
            {skill.map(({ id, src, style, title }) => (
              <div
                key={id}
                className={`flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-500 shadow-md p-2 ${style}`}
              >
                <LazyLoadImage src={src} alt="" className="" effect="blur" />
                <div>
                  <h1 className="text-gray-200 pt-2 md:text-lg ">{title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Content */}
        {/* <div className="flex flex-wrap bg-slate-400"> */}

        <div className="pt-2 mt-6 w-full rounded-b-lg shadow-md bg-gradient-to-b from-transparent via-gray-950 to-gray-900">
          <h1 className="text-gray-200 text-lg md:text-xl font-semibold px-3 md:px-4 inline">
            Libraries
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 px-3 md:px-4 pt-4 pb-4 md:pb-6 ">
            {/* skills */}
            {libe.map(({ id, src, style, title }) => (
              <div
                key={id}
                className={`flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-500 shadow-md p-2 ${style}`}
              >
                <LazyLoadImage src={src} alt="" className="" effect="blur" />
                <div>
                  <h1 className="text-gray-200 pt-2 md:text-lg ">{title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start md:flex-row">
          <div className="pt-2 mt-6 w-full md:w-5/12 mr-0 md:mr-4 rounded-b-lg shadow-md bg-gradient-to-b from-transparent via-gray-950 to-gray-900">
            <h1 className="text-gray-200 text-lg md:text-xl font-semibold px-3 md:px-4 inline">
              Framework
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 md:gap-6 px-3 md:px-4 pt-4 pb-4 md:pb-6 ">
              {/* skills */}
              {framewor.map(({ id, src, style, title }) => (
                <div
                  key={id}
                  className={`flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-500 shadow-md p-2 ${style}`}
                >
                  <LazyLoadImage src={src} alt="" className="" effect="blur" />
                  <div>
                    <h1 className="text-gray-200 pt-2 md:text-lg ">{title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 mt-6 w-full md:w-5/12 rounded-b-lg shadow-md bg-gradient-to-b from-transparent via-gray-950 to-gray-900">
            <h1 className="text-gray-200 text-lg md:text-xl font-semibold px-3 md:px-4 inline">
              Tools & Technology
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 md:gap-6 px-3 md:px-4 pt-4 pb-4 md:pb-6 ">
              {/* skills */}
              {tool.map(({ id, src, style, title }) => (
                <div
                  key={id}
                  className={`flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-500 shadow-md p-2 ${style}`}
                >
                  <LazyLoadImage src={src} alt="" className="" effect="blur" />
                  <div>
                    <h1 className="text-gray-200 pt-2 md:text-lg ">{title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
