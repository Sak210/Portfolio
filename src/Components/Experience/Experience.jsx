import React from 'react';
import {FaCss3, FaHtml5, FaJs, FaReact} from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbSql } from "react-icons/tb";
import {DiMsqlServer} from "react-icons/di";
import ExpImg from "../../assets/Oatilogo.png";
import { TbBrandCSharp } from "react-icons/tb";

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
      <div className='flex flex-wrap items-center justify-around'>
        <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <TbBrandCSharp color = "#E34F26" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs color = "#F7DF1E" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color = "#61DAFB" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <AiOutlineDotNet color = "#FF4438" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <BiLogoJquery color = "#F24E1E" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <DiMsqlServer color = "#47A248" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <TbSql color = "#FF4438" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color = "#1572b6" size={50} />
            </span>
            <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color = "#E34F26" size={50} />
            </span>

        </div>
        <div>
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img className='md:h-20 w-20 mt-[-63px]' src={ExpImg} alt="About img"/>
            <span className='text-white'>
                <h2 className='leading-tight'>Associate Software Developer, OATI</h2>
                <p className='text-sm leading-tight font-thin'>Jul 2023 - Apr 2024</p>
                <ul className='text-sm p-2 w-119 break-words whitespace-normal'>
                    <li>- Worked as a Full Stack .Net Developer.</li>
                    <li>- Developed an interactive maps web application using OpenLayers and HERE Maps APIs, integrating geospatial data visualization with React.js, JavaScript, C#, ASP.NET MVC, and SQL, while optimizing stored procedures for efficient data management.</li>

                </ul>
            </span>
        </div>

        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
            <img className='md:h-20 w-20 mt-[-63px]' src={ExpImg} alt="About img"/>
            <span className='text-white'>
                <h2 className='leading-tight'>Software Trainee, OATI</h2>
                <p className='text-sm leading-tight font-thin'>Jan 2023 - Jun 2023</p>
                <ul className='text-sm p-2 w-119 break-words whitespace-normal'>
                    <li>- Worked as a Full Stack .Net Developer.</li>
                    <li>- Refined debugging skills and mastered full-stack development through training, implemented custom OpenLayers & HERE Maps features using JavaScript, C#, and SQL Server, and collaborated on project execution.</li>
                </ul>
            </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
