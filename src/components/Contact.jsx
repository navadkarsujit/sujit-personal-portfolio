import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen flex justify-center items-center px-3 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg w-full my-12 py-2 md:py-8 px-1 md:px-6 flex flex-col justify-center ">
        {/* <div className="max-w-screen-xl w-full py-2 md:py-8 lg:py-10 px-1 md:px-6  flex flex-col justify-center "> */}
        {/* Heading */}
        <div className="pt-12">
          <p className="text-gray-400 text-sm lg:text-base">GET IN TOUCH</p>
          <h1 className="text-white text-4xl md:text-5xl font-semibold py-1">
            CONTACT.
          </h1>
        </div>
        {/* contact */}
        <div className="px-2 md:px-0 my-8 flex justify-center items-center">
          <form action="https://getform.io/f/c19072f2-6d7b-455c-a55c-2a6c376257b0" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter Your name"
              required
            />
            <input
              type="text"
              name="email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                placeholder="Enter your emai"
              required
            />
            <textarea
              name="message"
              rows="6"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your message"
            ></textarea>
            <button
              type="submit"
              class="mt-4 py-3 px-5 text-sm font-medium text-center text-white rounded-md bg-blue-600   focus:outline-none "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
