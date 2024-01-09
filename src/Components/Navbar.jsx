import React, { useState } from "react";
import { FaBars, FaTimes,FaListOl,FaLightbulb } from "react-icons/fa";
import {AiTwotoneHome,AiFillExclamationCircle} from "react-icons/ai";
import {BiSolidContact} from "react-icons/bi";
import NavLinks from './Navlinks';
import './Components.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeLink, setActiveLink] = useState('about');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    const links = [
      {
        id: 1,
        icon:<AiTwotoneHome/>,
        link: "home",
      },
      {
        id: 2,
        icon:<AiFillExclamationCircle/>,
        link: "about",
      },
      {
        id: 3,
        icon:<FaListOl/>,
        link: "Works",
      },
      {
        id: 4,
        icon:<FaLightbulb/>,
        link: "skills",
      },
      {
        id: 5,
        icon:<BiSolidContact/>,
        link: "contact",
      },
    ];


  return (
    <div className="flex justify-between items-center w-full h-auto p-2 py-3 bg-gradient-to-r from-orange-500 to-yellow-300 text-white fixed top-0" 
    //  data-aos="fade-down"
     >
      <div className="text-2xl font-Titles">Mohammed Imran</div>
      <ul className="hidden md:flex">
      {links.map(({ id, link, icon }) => (
          <NavLinks
            key={id}
            icon={icon}
            link={link}
            className={`px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 navbarlinks cool-link ${activeLink === link ? " text-white " : " text-slate-700"}`}
            onClick={() => onUpdateActiveLink(link)}
          />
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-white-500"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center hover:scale-105 duration-200 absolute top-0 left-0 w-full h-fit bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300 text-white-500">
          {links.map(({ id, link, icon }) => (
            <NavLinks
              key={id}
              icon={icon}
              link={link}
              className={`px-3 cursor-pointer py-1 capitalize text-xl font-semibold ${activeLink === link ? 'text-white': 'text-slate-700'}`}
              onClick={() =>{ setNav(!nav); setActiveLink(link); }}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar;