import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {FaCircleDot} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {ImCross} from "react-icons/im";
import {LiaExternalLinkSquareAltSolid} from "react-icons/lia";
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

  const minlinks = [
    {
      id: 1,
      child: (
        <><FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohammed-imran-831232241/",
      name:"LinkedIn",
    },
    {
      id: 2,
      child: (
        <><FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MohammedImran03",
      name:"Git Hub",
    },
    {
      id: 3,
      child: (
        <><HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mohammedimran1407.mi@gmail.com",
      name:"Email",
    },
    {
      id: 4,
      child: (
        <>
        <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "Resume.pdf",
      download: true,
      name:"Resume",
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
              className="justify-between text-white w-fit h-fit duration-300 flex items-center opacity-50 visible  lg:invisible bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer rounded-md"
            >
 <span className="">
             <FaCircleDot className="text-4xl p-1"/>
              </span>
            </button>
      <ul>
        {links.map((link) => (
           <li
            key={link.id}
            className={
              `flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] invisible lg:visible hover:rounded-md duration-300 bg-orange-500 ${link.style}`
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

{linkbar ? <div className="flex justify-center lg:invisible"><div
          className="flex-col top-[40%] fixed "
        >
<div className="flex flex-col justify-center w-fit h-fit bg-orange-500 rounded-xl ">
<div className="grid grid-cols-2 sm:grid-cols-2 mx-2 relative">
        {minlinks.map((link) => (
           <div
            key={link.id}
            className="flex justify-center  w-fit h-fit mx-2 my-3 lg:invisible"
          > <a
              href={link.href ? link.href : "/"}
              className=" text-white font-semibold"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            ><div className="flex justify-center">{link.child}</div><div className="text-xs flex justify-center">{link.name}<span className="group-hover:scale-125">
            <LiaExternalLinkSquareAltSolid />
            </span></div></a>
          </div>
        ))}
        <button className="absolute top-[50%] left-[42%] text-white"   onClick={handlelinkbar}><span className="group-hover:scale-125"><ImCross size={12}/></span></button>
      </div>
          </div>
        </div></div>: " "}
    </>);
};

export default SocialLinks;