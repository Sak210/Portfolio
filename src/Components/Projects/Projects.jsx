import React from 'react';
import ProjectCard from './ProjectCard';
import osmMap from "../../assets/OSMmaps.webp";

const Projects = () => {
  return (
    <div id="Projects" className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl texxt-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <ProjectCard 
                title="webGeo - Here Maps & OSM Maps" 
                main="webGeo is an interactive map application built with JavaScript, React.js, and ASP.NET, leveraging the 
                OpenLayers library to provide advanced geospatial visualization. It features customizable markers, tile layers, different choropleths
                and enhanced map interactions for an improved user experience."
            />
            <ProjectCard 
                title="Restaurant Ordering System" 
                main="Built a restaurant management system using ASP.NET Core MVC & Entity Framework Code First. Implemented CRUD functionality for menu items & user orders, along with a
                shopping cart feature for order processing. Developed a user-friendly front end to manage restaurant operations efficiently."
            />
            <ProjectCard 
                title="Real Time Face Recognition app" 
                main="Led facial recognition project from inception to completion, overseeing face detection and training phases utilizing Python,
                    OpenCV library, and HaarCascade classifier. Achieved 94% accuracy in face detection during training phase, leveraging
                    advanced algorithms to process 150 images with 6000 pixels each."
            />
        </div>
      
    </div>
  )
}

export default Projects
