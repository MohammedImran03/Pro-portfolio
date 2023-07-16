import React from 'react'
import { Link } from "react-scroll";
import { AiOutlineSend } from "react-icons/ai";
import Collaboration from "../assets/Collaboration.svg";

const Hireme = () => {
  return (
    <div
    className="w-full text-white"
  >
<div className="max-w-screen-lg p-2 mx-auto flex justify-center w-full">
 <div className='w-auto h-36 bg-orange-400 rounded-xl mt-4 flex align-middle'>
    <div className='mt-4 ml-2 text-xl md:text-2xl font-semibold'>Interested in collaboration ?<div>
 <Link
              to="contact"
              smooth
              duration={500}
              className="group text-lg md:text-xl lg:font-semibold text-white w-fit mt-2 md:mt-6 px-1 py-1 my-1 flex items-center rounded-md bg-gradient-to-r from-black to-gray-400 cursor-pointer"
            >
              Cantact me
              <span className="group-hover:scale-125">
                <AiOutlineSend className="ml-1" size={25} />
              </span>
            </Link></div></div>
            <div className='text-end'><img src={Collaboration} className='w-40 h-40'></img></div>
 </div>
    </div>
  </div>
  )
}

export default Hireme;