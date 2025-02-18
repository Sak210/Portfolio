import React from 'react';
import AboutImg from "../../assets/7358653-removebg-preview.png";
import {IoArrowForward} from "react-icons/io5";

const About = () => {
  return (
    <div id='About' className='text-white md:flex overfloe-hidden items-center md:flex-wrap md:justify-center bg-black shadow-x1
    mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
    <div>
        <h2 className='test-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className='md:h-80' src={AboutImg} alt="About img"/>

            <ul>
                <div className='flex gap-3 py-4 duration-300 hover:scale transform transition-transform hover:scale-105 hover:shadow-lg'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                          Experienced in building interactive and responsive web applications using React.js, JavaScript, 
                          HTML, CSS, and jQuery. Skilled in integrating HERE Maps and OpenLayers APIs for geospatial applications 
                          and utilizing AJAX for seamless data fetching.  
                        </p>
                    </span>
                </div>

                <div className='flex gap-3 py-4 duration-300 hover:scale transform transition-transform hover:scale-105 hover:shadow-lg'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                         Proficient in developing scalable backend solutions with C#, .NET Framework, ASP.NET MVC, and 
                         .NET Core. Experienced in implementing authentication and authorization mechanisms, optimizing 
                         database queries, and managing data using Entity Framework and SQL Server.  
                        </p>
                    </span>
                </div>

                <div className='flex gap-3 py-4 duration-300 hover:scale transform transition-transform hover:scale-105 hover:shadow-lg'>
                    <IoArrowForward size={30} className='mt-1'/>
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Full Stack Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>
                         Expertise in developing and maintaining .NET Full Stack applications using ASP.NET MVC, C#, Entity 
                         Framework, SQL Server, and React.js for modern web solutions. Skilled in RESTful API development, 
                         authentication, and performance optimization, ensuring secure and efficient application workflows.
                        </p>
                    </span>
                </div>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default About