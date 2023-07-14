import React from 'react';
import { BiCalendar } from "react-icons/bi";
import './Components.css';

const Educationbackground = () => {
  return (<>
     <div  className="mt-10 text-center">
              <p className="text-4xl font-Titles font-bold inline border-b-4 border-red-500 text-center">
                Education
              </p>
            </div>
            <div className='w-250 h-2/3 mt-5  flex justify-center'>
               
<div class="max-w-sm rounded overflow-hidden shadow-md shadow-gray-600 bg-fuchsia-500">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">B.E Aeronautical Engineering </div>
    <div class="text-white text-base">
      Rajalakshmi Engineering College.
    </div>
    <div class="text-white text-base">
      Chennai.
    </div>
    <div class="text-white text-base flex mt-1">
      <BiCalendar size={25}/><span className='ml-2'>2018 - 2022</span>
    </div>
  </div>
  <div class="px-6 pt-1 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RC Aircraft</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#3D Modelling</span>
  </div>
</div>
            </div>
            <div className='w-250 h-2/3 mt-2 flex justify-center'>
            <div class="max-w-sm rounded overflow-hidden shadow-md shadow-gray-600 bg-fuchsia-500">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Higher Secondary School</div>
    <div class="text-white text-base">
      Arignar Anna Boys School.
    </div>
    <div class="text-white text-base">
      Chennai.
    </div>
    <div class="text-white text-base flex mt-1">
      <BiCalendar size={25}/><span className='ml-2'>2016 - 2018</span>
    </div>
  </div>
  <div class="px-6 pt-1 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Computer Science</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#C Language</span>
  </div>
</div>
                        </div>                  
  </>)
}

export default Educationbackground;