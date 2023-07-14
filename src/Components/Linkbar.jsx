import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowDown} from "react-icons/md";
import './Components.css';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohammed-imran-831232241/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MohammedImran03",
    },
    {
      id: 3,
      child: (
        <>
         E Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mohammedimran1407.mi@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "Resume.pdf",
      download: true,
    },
  ];
  const [linkbar, setLinkbar] = useState(false);
const handlelinkbar=()=>{
  setLinkbar(!linkbar);
}
  return (<>

    <div className="flex-col top-[35%] left-0 fixed lg:flex">
    <button
    onClick={handlelinkbar}
              smooth
              duration={500}
              className="justify-between text-white w-fit h-14 duration-300 flex items-center rounded-md opacity-80 bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer rounded-br-md"
            >
             {!linkbar ?  <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardDoubleArrowRight className="md:text-3xl lg:text-5xl"/>
              </span> :  <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardDoubleArrowDown className="md:text-3xl lg:text-5xl" />
              </span> }
             
            </button>
      <ul>
        {links.map((link) => (
           linkbar &&<li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-orange-500" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}

      </ul>
    </div>
    </>);
};

export default SocialLinks;