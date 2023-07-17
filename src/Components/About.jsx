import React from 'react'
import './Components.css';
import Educationbackground from "./Educationbackground";
import "./Components.css";
import Hireme from "./Hireme";

const About = () => {
    return (<>
        <div
          id="about"
          className="w-full text-white"
        >
<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
            <div className="pt-7 text-center ">
              <p className="text-4xl font-Titles font-bold inline border-b-4 border-orange-500 text-center">
                About
              </p>
            </div>
            <div className='flex justify-center'>
            <div className='text-justify space-y-4 max-w-[80ch] tracking-wide'>
            <div className='mt-1'>Hello there,</div>
            <div className='mb-2'>Iam Mohammed Imran</div>
            <div className="paragraghtext">
            As an Engineering graduate equipped with a strong foundation in web development, including proficiency in HTML, CSS, and JavaScript, I possess the necessary skills to create engaging and user-friendly websites. With expertise in popular library such as React, also popular in Node.js, and MongoDB. I am well-versed in building dynamic and scalable applications. 
            </div>
            <br />
            <div className="paragraghtext">
            With a passion for web development, I'm eager to leverage my skills for complex projects, delivering high-quality solutions. With hands-on experience and continuous learning, I create innovative web applications. Joining a dynamic team, I aim to collaborate, exchange ideas, and stay updated with industry trends.
            </div></div>
            </div>
            <Educationbackground/>
            <Hireme/>
          </div>
        </div>
        </> );
}

export default About;