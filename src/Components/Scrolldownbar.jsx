import React from 'react'
import {MdOutlineKeyboardDoubleArrowUp,MdOutlineKeyboardDoubleArrowDown} from "react-icons/md";
import { Link } from "react-scroll";

const Scrolldownbar = ({uparrow,downarrow,uparrowname,downarrowname}) => {
  return (
    <div>
       {uparrow &&   <Link
    to={uparrowname}
    smooth
    duration={800}
    className="group text-white w-fit mx-2 px-2 py-2  flex items-center rounded-md  cursor-pointer"
  ><MdOutlineKeyboardDoubleArrowUp size={30}/></Link> } 
       {downarrow &&   <Link
    to={downarrowname}
    smooth
    duration={800}
    className="group text-white w-fit mx-2 px-2 py-2  flex items-center rounded-md  cursor-pointer"
  ><MdOutlineKeyboardDoubleArrowDown size={30}/></Link>}</div>
  )
}

export default Scrolldownbar;