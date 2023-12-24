import React from "react";
import testimg from "../assets/portfolio/testimg.png";
import email from "../assets/portfolio/email.png";
import springboot from "../assets/portfolio/springboot.png";
import wip from "../assets/portfolio/wip.png";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: testimg,
      href: "https://github.com/navadkarsujit/Online-Exam-System-Java",
      name: "Online Exam System in Java",
      description:
        "This web application, built using JSP, Servlets, and MySQL, serves as a comprehensive online exam platform for institutes.",
    },
    {
      id: 2,
      src: email,
      href: "https://github.com/navadkarsujit/Java-Web-Email-Application",
      name: "Java Web Email Application",
      description:
        "This is a Java web application built using JSP, Servlets, and a MySQL database. The application implements basic email functionality sending, receiving, and deleting emails. ",
    },
    {
      id: 3,
      src: springboot,
      href: "https://github.com/navadkarsujit/FullStack-Application-SpringBoot",
      name: "Spring Boot and React Crud Operations",
      description:
        "Created a CRUD-enabled application using Spring Boot for backend REST API with MySQL, tested through Postman. Integrated React frontend with Axios to seamlessly interact with the RESTful services.",
    },
    {
      id: 4,
      src: wip,
      name: "Work in progress",
      description: "no data",
    },
    {
      id: 5,
      src: wip,
      name: "Work in progress",
      description: "no data",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full flex justify-center items-center px-3 bg-gradient-to-b from-black via-black to-gray-800"
    > 
      <div className=" max-w-screen-xl w-full my-12 py-2 md:py-8 lg:py-10 px-1 md:px-6 flex flex-col justify-center ">
        {/* Heading */}
        <div className="pt-12 md:pb-6">
          <p className="text-gray-400 text-sm lg:text-base">MY WORK</p>
          <h1 className="text-white text-4xl md:text-5xl font-semibold py-1">
            Portfolio.
          </h1>
        </div>

        {/* box */}
        <div className="flex flex-wrap ">
          {portfolio.map(({ id, src, href, name, description }) => (
            <div key={id} className="p-4 max-w-sm">
              <div class="flex flex-col h-full bg-gradient-to-b shadow-md from-slate-600 via-slate-700 to-slate-800 ">
              {/* <div class="group flex flex-col h-full shadow-sm overflow-hidden shadow-red-800 bg-orange-800"> */}
                <img
                  className="w-full group-hover:scale-105 duration-300"
                  src={src}
                  alt="myimage"
                />
                <div className="px-4 pt-4">
                  <div className=" mb-2  flex justify-between items-center ">
                    <p className="text-gray-50 font-bold text-xl">{name}</p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group text-lg font-semibold text-white w-fit p-2 ml-1 border border-gray-100 flex items-center rounded-md cursor-pointer"
                    >
                      <span className="group-hover:scale-105 duration-300">
                        <FaGithub size={35} />
                      </span>
                    </a>
                  </div>
                  <div>
                    <details className="pb-3" close>
                      <summary class="text-sm md:text-base py-2 text-white font-semibold select-none cursor-pointer">
                        Description
                      </summary>
                      <div class="text-sm md:text-base text-slate-100 ">
                        <p>{description}</p>
                      </div>
                    </details>
                  </div>
                </div>
                {/* <div class="flex px-4 pt-2 pb-5">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group text-lg font-semibold text-white w-fit px-3 md:px-4 py-2 my-1 border border-gray-400 flex items-center rounded-md cursor-pointer"
                  >
                    Github
                    <span className="group-hover:scale-105 duration-300">
                      <FaGithub size={23} className="ml-1" />
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
