import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {CgProfile} from "react-icons/cg";


const Contactinfo = () => {
  return (<div
    className="w-full "
  ><div className="flex justify-center align-middle w-full h-full">
<div className=' text-center mt-4 md:mt-14 md:mr-8  md:pr-4'>
<div className=" group text-md md:text-xl lg:font-semibold font-Titles text-white w-fit px-2 py-1 md:my-3 flex items-center cursor-pointer"> 
              <span className="group-hover:scale-125">
              <FiPhoneCall  className="m-1 mr-2 md:mr-3 text-orange-500" />
              </span><span className='cursor-text'> +91 9360038177.</span>
            </div>
<a href='mailto:mohammedimran1407.mi@gmail.com' target='_blank'  className=" group text-md md:text-xl lg:font-semibold font-Titles text-white w-fit px-2 py-1 md:my-3 flex items-center cursor-pointer"
            > 
              <span className="group-hover:scale-125">
              <HiOutlineMail  className="m-1 mr-2 md:mr-3 text-orange-500" />
              </span><span>mohammedimran1407.mi@gmail.com</span>
            </a>
<a href='https://github.com/MohammedImran03' target='_blank'  className=" group text-md md:text-xl lg:font-semibold font-Titles text-white w-fit px-2 py-1 md:my-3 flex items-center cursor-pointer"
            > 
              <span className="group-hover:scale-125">
              <FaGithub  className="m-1 mr-2 md:mr-3 text-orange-500" />
              </span><span>https://github.com/MohammedImran03</span>
            </a>
<a href='https://www.linkedin.com/in/mohammed-imran-831232241/' target='_blank'  className=" group text-md md:text-xl lg:font-semibold font-Titles text-white w-fit px-2 py-1 md:my-3 flex items-center cursor-pointer"
            > 
              <span className="group-hover:scale-125">
              <FaLinkedin  className="m-1 mr-2 md:mr-3 text-orange-500" />
              </span><span>LinkedIn</span>
            </a>            
<a href="https://drive.google.com/file/d/1-ZI1WMCOdS12ybhf1ZLzxwb0Y0gYCxeR/view" target="_blank" className=" group text-md md:text-xl lg:font-semibold font-Titles text-white w-fit px-2 py-1 md:my-3 flex items-center cursor-pointer"
            > 
              <span className="group-hover:scale-125">
              <CgProfile className="m-1 mr-2 md:mr-3 text-orange-500" />
              </span><span>My Resume</span>
            </a>
    </div>  
    </div>
  </div>
  )
}

export default Contactinfo;