import React from "react";
import testimg from "../assets/portfolio/testimg.png";
import email from "../assets/portfolio/email.png";
import springboot from "../assets/portfolio/springboot.png";
import PB1 from "../assets/portfolio/PB1.png";
import PB2 from "../assets/portfolio/PB2.png";

import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: testimg,
      href: "https://github.com/navadkarsujit/Online-Exam-System-Java",
      name: "Online Exam System in Java",
      lang: ["Java", "MySQL", "JDBC", "JSP"],
      description:
        "A full-stack online exam platform with an admin portal and student exam-taking system. Built using JSP, Servlets, and MySQL, it facilitates seamless exams for institutes, including user management, exam creation, and result evaluation.",
    },
    {
      id: 2,
      src: springboot,
      href: "https://github.com/navadkarsujit/FullStack-Application-SpringBoot",
      name: "Spring Boot and React Crud Operations",
      lang: ["Java", "Spring Boot", "React", "MySQL", "REST API"],
      description:
        "Created a CRUD application using Spring Boot for backend REST API with MySQL, tested through Postman. Integrated React frontend with Axios to seamlessly interact with the RESTful services.",
    },
    {
      id: 3,
      src: PB2,
      href: "https://github.com/navadkarsujit/Adidas-Sales-Analysis-PowerBI",
      name: "Adidas Sales Analysis Project PowerBI",
      lang: ["PowerBI", "Analysis", "DAX", "Power Query"],
      description:
        "Project aims to analyze historical sales data and develop a predictive model to forecast future sales. Leveraging Power BI, DAX, Power Query, and advanced analytical techniques, it provides insights into sales trends, consumer preferences, patterns, and more.",
    },
    {
      id: 4,
      src: PB1,
      href: "https://github.com/navadkarsujit/Car-Sales-Analysis-PowerBI-",
      name: "Car Sales Analysis Project PowerBI",
      lang: ["PowerBI", "Analysis", "DAX", "Power Query","KPI"],
      description:
        "The objective of this project is to design and develop a dynamic and interactive Car Sales Dashboard using Power BI. The dashboard will visualize critical KPIs related to our car sales, helping us understand our sales performance over time and make data-driven decisions ",
    },
    {
      id: 5,
      src: email,
      href: "https://github.com/navadkarsujit/Java-Web-Email-Application",
      name: "Java Web Email Application",
      lang: ["Java", "JSP", "Servlets", "HTML", "CSS"],
      description:
        "This is a Java web application built using JSP, Servlets, and a MySQL database. The application implements basic email functionality sending, receiving, and deleting emails. ",
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
        <div className="flex flex-col justify-center items-center w-full">
          {portfolio.map(
            ({ id, src, href, name, description, lang, lang2 }) => (
              <div
                key={id}
                className="lg:w-full md:w-8/12 sm:w-8/12 w-full group mx-2 my-4  p-2 md:p-4 rounded-md bg-gradient-to-b shadow-md from-slate-700 via-slate-800 to-slate-800
            "
              >
                <div class="flex lg:flex-row lg:justify-start flex-col justify-center items-center ">
                  {/* <div class="group flex flex-col h-full shadow-sm overflow-hidden shadow-red-800 bg-orange-800"> */}
                  <img
                    className="group-hover:scale-105 md:h-56 duration-300 w-fit mx-2 rounded-md "
                    src={src}
                    alt="myimage"
                    loading='lazy'
                    
                  />
                  <div className="w-full flex flex-col justify-between  ml-3 ">
                    <div className=" flex justify-between items-center mt-5 lg:mt-0 mb-2 pb-1">
                      <p className="text-gray-50 font-bold text-2xl">{name}</p>
                    </div>
                    <div className="mb-1">
                      <div class=" text-sm md:text-base text-slate-100 ">
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between ">
                      <div class=" text-black flex flex-wrap">
                        {lang.map((lang, index) => (
                          <p
                            key={index}
                            className="border mt-3 mb-1 bg-gray-50 px-4 py-1 rounded-md font-bold text-sm sm:text-base mr-2 sm:mr-3"
                          >
                            {lang}
                          </p>
                        ))}
                      </div>
                      <div>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-gray-50 mt-3 mb-1 text-base font-bold text-black w-fit px-3 py-1 border  flex items-center rounded-md cursor-pointer mr-3 shadow-[2px_2px_0px_1px_#a0aec0]"
                        >
                          <span className=" flex">
                            Visit
                            <FaGithub size={24} className="ml-3" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="w-full flex justify-center items-center  pt-3 mt-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-base md:text-lg font-bold text-gray-950 w-fit px-5 md:px-6 py-3 my-1 flex items-center rounded-md  bg-white hover:scale-95 duration-300 cursor-pointer shadow-[2px_2px_0px_1px_#a0aec0]"
            href="https://github.com/navadkarsujit"
          >
            MORE PROJECTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
