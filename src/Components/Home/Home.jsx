import React from 'react';
import avatarImage from "../../assets/7358602-removebg-preview.png"
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
         <TextChange/>
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
        Skilled professional with 1.5 years of hands-on experience in React.js, .NET, C#, ASP.NET, MVC, 
        JavaScript, HTML, CSS, and SQL Server. Demonstrated proficiency in developing and maintaining 
        robust web applications. Committed to continuous learning and growth within the dynamic field 
        of web development. Open to new challenges and collaborative opportunities to further enhance 
        skills and contribute to innovative solutions.
        </p>
        <a href="#Footer">
          <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
           duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
           Contact Me
          </button>
        </a>
      </div>
      {/*ADDING IMAGE HERE FOR HOME SECTION*/}
      <div><img className = '' src={avatarImage} alt="" /></div>
    </div>
  )
}

export default Home
