import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from './Navlinks';
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
        link: "home",
      },
      {
        id: 2,
        link: "about",
      },
      {
        id: 3,
        link: "Works",
      },
      {
        id: 4,
        link: "skills",
      },
      {
        id: 5,
        link: "contact",
      },
    ];


  return (
    <div className="flex justify-between items-center w-full h-auto p-2  bg-orange-400 text-white fixed top-0" 
    //  data-aos="fade-down"
     >
      <ul className="hidden md:flex">
      {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className={activeLink === link ? "px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200" : "px-4 cursor-pointer capitalize font-medium text-slate-300 hover:scale-105 duration-200"}
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
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
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