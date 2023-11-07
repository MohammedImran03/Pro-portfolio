import React from "react";
import {LiaExternalLinkSquareAltSolid} from "react-icons/lia";
import {BiSolidUser} from "react-icons/bi";
import {RiLockPasswordLine,RiOpenSourceLine} from "react-icons/ri";
import { FaGithub} from "react-icons/fa";
import {portfoliosdata} from "../data/data";
import "./Components.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {
      return (<>
        <div   name="Works"
          className="text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pt-12 text-center">
            <p className="text-4xl font-Titles font-bold inline border-b-4 border-orange-500 text-center">
               My Projects
              </p>
            </div>
            <div className='flex justify-center'>
<div className='flex:none grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-0 lg:grid-cols-none '>
{portfoliosdata.map(({id,src,title,description,live,client,server,demokey,demopass,projectsrc})=>(
       <div key={id} class="max-w-sm w-full lg:max-w-full lg:flex my-10 h-auto lg:h-auto shadow-lg bg-slate-900 lg:bg-transparent"> 
             <div class="border-r border-b border-2 border-gray-400 lg:border--0 lg:border-t lg:border-gray-400  rounded-t lg:rounded-r-none lg:rounded-l p-2 flex flex-col justify-between leading-normal">
    <div class="m-1 h-40">
      <div class=" font-bold text-2xl uppercase mb-1">{title}</div>
      <p class=" text-base text-justify"><span className="text-orange-500"><b>Description:</b></span> {description}</p>
    </div>
  </div>
    <img src={src}
    //  data-aos="zoom-in" data-aos-duration="1000"
                    alt={title}
                    className="h-48 w-96 lg:h-auto lg:w-96 flex-none bg-cover  text-center overflow-hidden duration-200 hover:scale-105 border-8 border-gray-600"
                  />
  <div class="border-r border-b border-2 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-1 flex flex-col justify-between leading-normal">
    <div class="items-center">
        <div className='flex gap-1 flex-wrap items-center justify-center'>
   {projectsrc.map((val,ind)=>{return(
    <div key={ind} className='flex justify-center align-middle m-1 bg-fuchsia-500 rounded-lg' title={val.title}
    //  data-aos="flip-left"
    // data-aos-easing="ease-out-cubic"
    // data-aos-duration="1000"
    >
    <img class="w-10 h-10 hover:scale-105 p-1" src={val.logo} alt="html" /></div>
    );})}
    </div>
        <div class="flex justify-center align-bottom mt-2">
      <div class="flex justify-center p-1">
      <a className="p-1 m-1 bg-gray-500 transition-dark 
            rounded-lg flex items-center gap-2 hover:ring-4 ring-blue-600"
            href={live}
            target="_blank"
            >Live<span>
            <LiaExternalLinkSquareAltSolid size={20} className="m-1" />
            </span>
        </a>
        <a className="p-1 m-1 bg-gray-500 transition-dark 
            rounded-lg flex items-center gap-2 hover:ring-4 ring-blue-600"
            href={client}
            target="_blank">Client<span>
            <FaGithub size={20}  className="m-1" />
            </span>
        </a>
        <a className="p-1 m-1 bg-gray-500 transition-dark 
            rounded-lg flex items-center gap-2 hover:ring-4 ring-blue-600"
            href={server}
            target="_blank">server<span>
            <FaGithub size={20}  className="m-1" />
            </span>
        </a>
      </div>
    </div>
    <div className="flex justify-center text-xs">
    {demokey && demopass ? <>
    <a className="p-1 m-1  transition-dark 
            rounded-lg flex items-center gap-2 cursor-text"
            ><span>
            <BiSolidUser size={15}/>
            </span>{demokey}
        </a>
        <a className="p-1 m-1  transition-dark 
            rounded-lg flex items-center gap-2 cursor-text"
            ><span>
            <RiLockPasswordLine size={15}/>
            </span>{demopass}
        </a></>: <span><a className="p-1 m-1  transition-dark 
            rounded-lg flex items-center gap-2 cursor-text"
            ><span>
            <RiOpenSourceLine size={15}/>
            </span>Open Source
        </a></span>}
    </div>
    </div>
  </div>
</div>
   ))} 
</div>
</div>
          </div>
        </div>
        
      </>);
}

export default Projects;