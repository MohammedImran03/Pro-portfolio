import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import Bootstrap_logo from "../assets/Bootstrap_logo.svg.png";
import mui from "../assets/mui.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import express from "../assets/express.svg";
import redux from "../assets/redux.png";
import router from "../assets/router.svg";
import tailwind from "../assets/tailwind.png";
import chartjs from "../assets/chartjs.svg";
import aws from "../assets/aws.svg";
import github from "../assets/github.png";
const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "border-orange-500",
          value:"70%",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "border-blue-500",
          value:"70%",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "border-yellow-300",
          value:"70%",
        },
        {
          id: 4,
          src: react,
          title: "React",
          style: "border-sky-600",
          value:"70%",
        },
        {
          id: 5,
          src: Bootstrap_logo,
          title: "Bootstrap",
          style: "border-violet-500",
          value:"70%",
        },
        {
          id: 6,
          src: mui,
          title: "Material UI",
          style: "border-blue-400",
          value:"70%",
        },
        {
            id: 7,
            src: mongodb,
            title: "Mongo DB",
            style: "border-green-500",
            value:"70%",
        },
        {
            id: 8,
            src: mysql,
            title: "My SQL",
            style: "border-sky-400",
            value:"70%",
        },
        {
          id: 9,
          src: node,
          title: "Node Js",
          style: "border-green-300",
          value:"70%",
        },
        {
          id: 10,
          src: express,
          title: "Express",
          style: "border-gray-400",
          value:"70%",
        },
        {
          id: 11,
          src: redux,
          title: "Redux",
          style: "border-purple-400",
          value:"70%",
        },
        {
          id: 12,
          src: router,
          title: "Router",
          style: "border-red-600",
          value:"70%",
        },
        {
          id: 13,
          src: tailwind,
          title: "Tailwind Css",
          style: "border-sky-400",
          value:"70%",
        },
        {
          id: 14,
          src: chartjs,
          title: "Chart Js",
          style: "border-pink-400",
          value:"70%",
        },
        {
          id: 14,
          src: github,
          title: "Git Hub",
          style: "border-gray-400",
          value:"70%",
        },
        {
          id: 15,
          src: aws,
          title: "AWS",
          style: "border-orange-400",
          value:"70%",
        },
      ];
      return (
        <div
          name="skills"
          className="w-full text-white"
        ><div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="pt-12 text-center">
              <p className="text-4xl font-Titles font-bold inline border-b-4 border-orange-500 text-center">
                Experience
              </p>
            </div>
            <p className="pt-8 md:text-xl">These are the technologies I've worked with... </p>
            <div className=''>
            <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-3 text-center py-4  px-4 sm:px-0">
              {techs.map(({ id, src, title, style}) => (
                <div
                  key={id}
                  className={`hover:border-2 hover:scale-105 duration-300 py-2 rounded-lg ${style} bg-gray-800`}
                >
                  <img src={src} alt="" className="w-10 mx-auto" />
                  <p className="mt-2">{title}</p>
                </div>
              ))}
            </div></div>
          </div>
        </div>
      );
}

export default Experience;