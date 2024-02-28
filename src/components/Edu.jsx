import React from "react";
import testimg from "../assets/portfolio/testimg.png";
import email from "../assets/portfolio/email.png";
import springboot from "../assets/portfolio/springboot.png";
import wip from "../assets/portfolio/wip.png";
import { FaGithub } from "react-icons/fa";

const Edu = () => {
  const portfolio = [
    {
      id: 1,
      src: testimg,
      href: "https://github.com/navadkarsujit/Online-Exam-System-Java",
      name: "Online Exam System in Java",
      lang: ["Java","MySQL","JSP"],
      description:
      "A full-stack online exam platform with an admin portal and student exam-taking system. Built using JSP, Servlets, and MySQL, it facilitates seamless exams for institutes, including user management, exam creation, and result evaluation.",
     },
    {
      id: 2,
      src: email,
      href: "https://github.com/navadkarsujit/Java-Web-Email-Application",
      name: "Java Web Email Application",
      lang: ["Java", "Python"],
      description:
        "This is a Java web application built using JSP, Servlets, and a MySQL database. The application implements basic email functionality sending, receiving, and deleting emails. ",
    },
    {
      id: 3,
      src: springboot,
      href: "https://github.com/navadkarsujit/FullStack-Application-SpringBoot",
      name: "Spring Boot and React Crud Operations",
      lang: ["Java", "Python"],
      description:
        "Created a CRUD-enabled application using Spring Boot for backend REST API with MySQL, tested through Postman. Integrated React frontend with Axios to seamlessly interact with the RESTful services.",
    },
    {
      id: 4,
      src: wip,
      name: "Work in progress",
      lang: ["Java", "Python"],
      description:
        "no data Created a CRUD-enabled application using Spring Boot for backend REST API with tion using Spring Boot for backend REST API with tion using Spring Boot for backend REST API with MySQL, tested through Postman. Integrated React frontend with Axios to seamlessly interact with the RESTful servicesCreated a CRUD-enabled application using Spring Boot for backend REST API with MySQL, tested through Postman. Integrated React frontend with Axios to seamlessly interact with the RESTful services",
    },
    {
      id: 5,
      src: wip,
      name: "Work in progress",
      lang: ["Java", "Python"],
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
        <div className="">
          {portfolio.map(
            ({ id, src, href, name, description, lang, lang2 }) => (
              <div
                key={id}
                className="group mx-2 my-8 p-4 rounded-md bg-gradient-to-b shadow-md from-slate-700 via-slate-800 to-slate-800
            "
              >
                <div class="flex justify-start w-full">
                  {/* <div class="group flex flex-col h-full shadow-sm overflow-hidden shadow-red-800 bg-orange-800"> */}
                  <img
                    className="group-hover:scale-105 h-52 duration-300 w-fit mx-2 rounded-md "
                    src={src}
                    alt="myimage"
                  />
                  <div className="w-full flex flex-col justify-between  ml-3 ">
                    <div className=" flex justify-between items-center mb-2 pb-1">
                      <p className="text-gray-50 font-bold text-2xl">{name}</p>
                    </div>
                    <div className="mb-1">
                      <div class="text-base  text-slate-100 ">
                        <p>{description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between pt-3 pb-1">
                      <div class=" text-black flex ">
                        {lang.map((lang, index) => (
                          <p
                            key={index}
                            className="border bg-gray-50 px-4 py-1 rounded-md font-bold mr-4"
                          >
                            {lang}
                          </p>
                        ))}
                      </div>
                      <div >
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-gray-50 text-base font-bold text-black w-fit px-3 py-1 border  flex items-center rounded-md cursor-pointer mr-3"
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
      </div>
    </div>
  );
};

export default Edu;
