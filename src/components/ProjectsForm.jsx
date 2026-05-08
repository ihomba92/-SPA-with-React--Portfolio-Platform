import { useState } from "react";

export default function ProjectForm({ onSave }) {

  // State for form fields
  const [portfolio, setPortfolio] = useState({title:'', description:'', image:''});
  
     
  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Prevent empty inputs
    if (!portfolio.description || !portfolio.title || !portfolio.image) {
      alert("Please fill all fields");
      return;
    }

    // Create new project object
    const newProject = {
      id: Date.now(),
      title: portfolio.title,
      description: portfolio.description,
      image: portfolio.image
    
    };
    // Send project to parent component

    onSave(newProject);

    // Clear form
    setPortfolio({title:'', description:'', image:''});
  }
 
  return (
    <div className="bg-white shadow-xl rounded-sm p-8 flex-1 border-t-4 border-amber-800">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-serif italic mb-6 text-amber-900 text-center leading-tight">
          Add your project to the gallery
        </h2>

        <div className="space-y-5 flex-grow:1 flex flex-col">
          <div>
          <label className="text-xs uppercase tracking-widest font-semibold text-gray-600 block mb-1">
            Title </label>
            <input
            className="border-b border-gray-300 focus:border-amber-800 outline-none p-2 w-full transition-colors font-serif text-lg"            type="text"
            placeholder="Enter project title"
            value={portfolio.title}
            onChange={(e) => setPortfolio({...portfolio, title: e.target.value})}
          />
            </div>
        </div>
        <div className="mb-4">
          <label className="text-xs uppercase tracking-widest font-semibold text-gray-600 block mb-1">
            Description
          </label>
          <textarea
          className="border border-gray-200 focus:border-amber-800 outline-none p-3 w-full rounded-sm h-32 resize-none text-sm text-gray-700"            placeholder="Enter project description"
            value={portfolio.description}
            onChange={(e) => setPortfolio({...portfolio, description: e.target.value})}/>
        </div>
        <div  className="mb-4">
          <label className="text-xs uppercase tracking-widest font-semibold text-gray-600 block mb-1">
           Image  </label>
            <input
            className="border p-2 rounded w-full"
            type="text"
            placeholder="Enter project image URL"
            value={portfolio.image}
            onChange={(e) => setPortfolio({...portfolio, image: e.target.value})}
          />
           
        </div>

        <button
        type="submit"
         className="mt-8 bg-gray-900 text-white text-xs uppercase tracking-[0.2em] font-bold py-4 px-5 hover:bg-amber-900 transition-all duration-300 shadow-lg"          type="submit">
          Add to Gallery
        </button>
      </form>
    </div>
  );
}