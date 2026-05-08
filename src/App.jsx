import { useState, useEffect } from "react";
import ProjectForm from "./components/ProjectsForm";
import ProjectsSearch from "./components/ProjectsSearch";
import ProjectsCard from "./components/ProjectsCard";
import About from "./components/About";
import { featuredProjects } from "./components/StaticProjects";

function App() {

  // Main state that stores all projects

  // Load projects from localStorage on initial render
 
const [projects, setProjects] = useState(() => {
  const saved = localStorage.getItem("gallery_projects");
  const userProjects = saved ? JSON.parse(saved) : [];
   //this filters the projects to make sure not one project share the same id, 
   
 const GetFeaturedProjects = userProjects.filter((up) => 
  !featuredProjects.some((fp) => fp.id === up.id));

   return [...featuredProjects, ...GetFeaturedProjects];
     }); 

  // State for search input
  const [search, setSearch] = useState("");

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("gallery_projects", JSON.stringify(projects));
  }, [projects]);

  // Function to add a new project
  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  // Filter projects based on search text
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col gap-3">
      <div className="flex flex-col items-center mb-16 mt-10">
    <span className="text-xs uppercase tracking-[0.5em] text-amber-800 font-semibold mb-2">
    @Ihomba.92 Collections
    </span>
    <h1 className="text-4xl font-serif tracking-tighter text-gray-900 flex items-center gap-2">
    LEO <span className=" bg-gray-900"></span> GALLERY
   </h1>
     </div>
      <ProjectsSearch  search={search} setSearch={setSearch} />
      <div className=" w-full">
       <ProjectsCard projects={filteredProjects} />
      </div>
      <hr className="my-10" />
      
      <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center w-full max-w-6xl mx-auto px-4 mb-20">
      <h3 ><span className="text-xs uppercase tracking-[0.5em] text-amber-800 font-semibold mb-2">
       Join our community 
       </span></h3>
      <ProjectForm onSave={addProject} />
      <About />
      </div>  
    </div>
  );
}

export default App;