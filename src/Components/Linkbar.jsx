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
  const [speeddial, setSpeeddial] = useState(false);
const handlelinkbar=()=>{
  setLinkbar(!linkbar);
}
// document.getElementById("speed-dial-menu-click").addEventListener("wheel", handlespeeddial);
// const handlespeeddial=()=>{
//   setSpeeddial(false);
// }
  return (<>
 
 <div className="flex-col top-[35%] left-0 fixed lg:flex">
    <button
    onClick={handlelinkbar}
              smooth
              duration={500}
              className="justify-between text-white w-fit h-fit duration-300 flex items-center opacity-50 visible  md:invisible bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer rounded-md"
            >
 <span className="">
             <FaCircleDot className="text-5xl p-1"/>
              </span>
            </button>
</div>

{/* <div data-dial-init class="fixed right-6 bottom-6 group invisible md:visible">

  { speeddial && <div id="speed-dial-menu-click" class="flex flex-col items-center  mb-4 space-y-2">
        <a href="https://www.linkedin.com/in/mohammed-imran-831232241/"  target="_blank" type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="relative flex justify-center items-center w-[52px] h-[52px] text-white hover:text-gray-900 bg-orange-500 rounded-full border border-orange-800 ">
        <FaLinkedin size={30} />
            <span class="sr-only" >LinkedIn</span>
        </a>
        <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-orange-500 rounded-lg shadow-sm opacity-0 tooltip">
        LinkedIn
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a  href="https://github.com/MohammedImran03" target="_blank" type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-white hover:text-gray-900 bg-orange-500 rounded-full border border-orange-800">
        <FaGithub size={30} />
            <span class="sr-only">Git Hub</span>
        </a>
        <div id="tooltip-print" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-orange-500 rounded-lg shadow-sm opacity-0 tooltip ">
        GitHub
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a href="mailto:mohammedimran1407.mi@gmail.com" target="_blank" type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-white hover:text-gray-900 bg-orange-500 rounded-full border border-orange-800 ">
        <HiOutlineMail size={30} />
            <span class="sr-only">Mail</span>
        </a>
        <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-orange-500 rounded-lg shadow-sm opacity-0 tooltip ">
            Email
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a  href="https://drive.google.com/file/d/19qKtNfZiN755WvokmYG0tN3hwrx_TDvD/view?usp=sharing" target="_blank" type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left" class="flex justify-center items-center w-[52px] h-[52px] text-white hover:text-gray-900 bg-orange-500 rounded-full border border-orange-800 ">
        <BsFillPersonLinesFill size={30} />
            <span class="sr-only">Resume</span>
        </a>
        <div id="tooltip-copy" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-orange-500 rounded-lg shadow-sm opacity-0 tooltip ">
            Resume
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>}
    <button onClick={()=>{setSpeeddial(!speeddial)}} type="button" data-dial-toggle="speed-dial-menu-click" data-dial-trigger="click" aria-controls="speed-dial-menu-click" aria-expanded="false" class="flex items-center justify-center text-white hover:text-gray-900 bg-orange-500 rounded-full border border-orange-400  w-14 h-14   hover:focus:ring-2 hover:focus:ring-white focus:outline-none d">
        <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
        <span class="sr-only">Open actions menu</span>
    </button>
</div> */}




    {/* <div className="flex-col top-[35%] left-0 fixed lg:flex">
    <button
    onClick={handlelinkbar}
              smooth
              duration={500}
              className="justify-between text-white w-fit h-fit duration-300 flex items-center opacity-50 visible  lg:invisible bg-gradient-to-r from-orange-500 to-yellow-500 cursor-pointer rounded-md"
            >
 <span className="">
             <FaCircleDot className="text-5xl p-1"/>
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
    </div> */}

{linkbar ? <div className="flex justify-center lg:invisible"><div
          className="flex-col top-[40%] fixed "
        >
<div className="flex flex-col justify-center w-fit h-fit bg-orange-500 rounded-xl ">
<div className="grid grid-cols-2 sm:grid-cols-2 mx-2 relative">
        {minlinks.map((link) => (
           <div
            key={link.id}
            className="flex justify-center  w-fit h-fit mx-2 my-4 lg:invisible"
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
        <button className="absolute top-[49%] left-[44%] text-white"   onClick={handlelinkbar}><span className="group-hover:scale-125"><ImCross size={15}/></span></button>
      </div>
          </div>
        </div></div>: " "}
    </>);
};

export default SocialLinks;