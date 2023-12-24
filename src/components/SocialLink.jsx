import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLink = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
              <FaLinkedin size={40} />
            </>
          ),
          href: 'https://linkedin.com',
        },
        {
          id: 2,
          child: (
            <>
              <FaGithub size={40} />
            </>
          ),
          href: 'https://github.com/navadkarsujit',
        },
        {
          id: 3,
          child: (
            <>
              <HiOutlineMail size={40} />
            </>
          ),
          href: 'mailto:foo@gmail.com',
        },
        {
          id: 4,
          child: (
            <>
              <BsFillPersonLinesFill size={40} />
            </>
          ),
          href: '/SujitNavadkarResume.pdf',
          download: true,
        },
      ];
  return (
    <li className="flex justify-around items-center w-full px-4 pt-4 ">
   {links.map(({ id, child, href, download }) => (
          <a
          key={id}
            download={download}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
       
      ))}
      </li>
  )
}

export default SocialLink