import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import SocialLink from "./SocialLink";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 md:px-6 z-10  text-white bg-black fixed ">
      <div>
        <h1 className="text-3xl md:text-4xl font-signature ml-2">
          Sujit Navadkar
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105  duration-200"
          >
           <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-20 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize cursor-pointer py-6 text-3xl "
            >
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
          {/* <SocialLink /> */}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
