import React from "react";


export default function ProjectsList({ projects }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 w-full mt-10 px-4 items-stretch">
      {projects.map((project) => (
        <div
        className="flex flex-col group h-full"
          key={project.id}  
        >
        <div className="h-64 sm:h-80 md:h-96 relative overflow-hidden bg-white p-2 shadow-sm border border-gray-200 w-full rounded-sm">
          <img  src={project.image} alt={project.title} 
          className="w-full h-full object-cover grayscale-(20%) group-hover:grayscale-0 transition-all duration-500 hover:scale-105" />
           </div>
           <div className="flex flex-col flex-grow mt-4">
          <h2 className="mt-4 text-xl font-serif italic tracking-wide text-gray-900 border-b border-transparent group-hover:border-gray-400 transition-all w-fit truncate max-w-full">
            {project.title}
          </h2>
          <p className="line-clamp-3 mt-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-light leading-relaxed flex-grow">
            {project.description}
          </p>
          </div>
        </div>
      ))}
    </div>
  );
}

