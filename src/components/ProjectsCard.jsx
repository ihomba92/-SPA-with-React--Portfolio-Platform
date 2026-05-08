import React from "react";


export default function ProjectsList({ projects }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-10 px-4">
      {projects.map((project) => (
        <div
        className="flex flex-col group"
          key={project.id}  
        >
        <div className="overflow-hidden bg-white p-2 shadow-sm border border-gray-200">
          <img  src={project.image} alt={project.title} 
        
          className="w-full h-auto grayscale-(20%) group-hover:grayscale-0 transition-all duration-500" />
           </div>
          <h2 className="mt-4 text-xl font-serif italic tracking-wide text-gray-900 border-b border-transparent group-hover:border-gray-400 transition-all w-fit">
            {project.title}
          </h2>
         
          <p className="line-clamp-3 mt-2 text-xs uppercase tracking-[0.2em] text-gray-500 font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}

