export default function ProjectsSearch   
({ search, setSearch }) {

  return (
    <div className="">

      <input
        className="bg-white border-b-2 border-gray-200 focus:border-amber-800 
        transition-colors py-2 px-2 mx-auto ml-3 w-1/3 max-w-lg rounded-sm
        outline-none font-serif italic text-lg shadow-sm"    
        type="text"
        placeholder="Search projects... 🔍"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}