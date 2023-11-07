import React from "react";
import Contactinfo from "./Contactinfo";
import {MdOutlineKeyboardDoubleArrowUp} from "react-icons/md";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Contact = () => {
  return (
    <div
    name="contact"
    className="w-full text-white"
  ><div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    <div className="pt-12 text-center pb-5">
        <p className="text-4xl font-Titles font-bold inline border-b-4 border-orange-500 text-center">
          Contact
        </p>
      </div>
      <div className="w-full grid grid-cols-1 justify-center lg:grid-cols-2 gap-4 text-center py-3  px-3 sm:px-0">
        <div><Contactinfo/></div>
        <div className=" "> 
        <p className="p-2 mt-4 md:mt-0">Submit the form below to get in touch with me </p>
          <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/f557a96b-d274-4128-8ab3-420c14b2b9a8"
            method="POST"
            className="flex flex-col w-full"
          ><div className="flex justify-start m-1 text-lg font-Titles">Name</div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            /><div className="flex justify-start m-1 text-lg font-Titles mt-4">Email</div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            /><div className="flex justify-start m-1 text-lg font-Titles mt-4">Message</div>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-orange-500 to-yellow-500 px-2 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="h-16 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 font-Titles">
      <div  className=" relative ">
      Mohammed Imran © 2023
      <div className="absolute bottom-6 left-20  cursor-pointer animate-bounce">
    <Link
              to="home"
              smooth
              duration={1000}
              >
      <span><MdOutlineKeyboardDoubleArrowUp size={32} className="m-1"/></span></Link></div>    
      
      </div>
    </div>
  </div>
  );
};

export default Contact;