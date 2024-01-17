import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {FaCircleDot} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {LiaExternalLinkSquareAltSolid} from "react-icons/lia";
import myimage from "../assets/html.png";
import { Link } from "react-scroll";
import myphoto from "../assets/myphoto.png";
import Navbar from "./Navbar";
import "./Components.css";

const Home = () => {

  const links = [
    {
      id: 1,
      child: <FaLinkedin size={40} />,
      href: "https://www.linkedin.com/in/mohammed-imran-831232241/",
    },
    {
      id: 2,
      child: <FaGithub size={40} />,
      href: "https://github.com/MohammedImran03",
    },
    {
      id: 3,
      child:<HiOutlineMail size={40} />,
      href: "mailto:mohammedimran1407.mi@gmail.com",
    },
    {
      id: 4,
      child:<BsFillPersonLinesFill size={40} />,
      href: "https://drive.google.com/file/d/1YpTSNj0xHpWYp7LyW_ZbOUSCz8dik8hh/view?usp=sharing",
      // download: true,
    },
  ];

  return (<>
    <div
      name="home"
      className="homescreenanimation w-full h-screen "
    >
      <Navbar/>
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full  px-4">
        <div className="flex flex-col justify-center ml-4 h-96">
            {/* <h1 className="text-3xl sm:text-4xl font-bold text-white">Hi there,</h1> */}
          <h4 className="text-xl sm:text-4xl font-bold text-white">
          Hello, I'm Mohammed Imran. 
          </h4>
          <h4 className="text-xl sm:text-4xl font-bold text-white">
          I'm a full-stack web Developer.
          </h4>
          <p className="text-white text-sm py-2 max-w-md">
          As an  Engineering graduate proficient in web development seeking a challenging developer role to contribute and grow. &#128522;
          </p>
          <div className="flex justify-center my-2">
          {links.map((link) => (
           <div className="border-2 shadow-md shadow-white mx-1 md:mx-2 md:p-1 rounded-full hover:bg-black"
            key={link.id}> <a
              href={link.href ? link.href : "/"}
              className=" text-white font-semibold"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            ><div className="flex justify-center mx-2">{link.child}</div></a>
          </div>
        ))}
          </div>
          <div className="flex gap-1 flex-wrap justify-center px-4">
          {/* <a
              smooth
              duration={500}
              className="shadow-md shadow-white group text-xs md:text-xl lg:font-semibold text-white w-fit px-2 py-1 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-yellow-300 cursor-pointer"
              href="https://drive.google.com/file/d/19qKtNfZiN755WvokmYG0tN3hwrx_TDvD/view?usp=sharing" target="_blank"
            // style={{fontSize:"0.5rem"}}
            > My Resume
              <span className="group-hover:scale-125">
              <LiaExternalLinkSquareAltSolid className="ml-1" />
              </span>
            </a> */}
            <Link
              to="about"
              smooth
              duration={500}
              className="shadow-lg shadow-white group text-xs md:text-xl lg:font-semibold  text-white w-fit mx-3 px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-yellow-300 cursor-pointer"
            >
            View my work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>

          </div>
        </div>
        {/* <div className="sm:ml-10 flex justify-center align-middle mt-4">
          <img
            src={myimage}
            alt="my Profile"
            className="shadow-md  shadow-white rounded-2xl mx-auto w-2/3 md:w-full  p-2"
          />
        </div> */}
      </div>
    </div>
    </>)
}

export default Home;