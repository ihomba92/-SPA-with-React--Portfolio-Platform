export default function ProjectsSearch   
({ search, setSearch }) {

  return (
    <div className="">

      <input
        className="bg-white border-b-2 border-gray-200 focus:border-amber-800 transition-colors py-3 px-6 mx-auto w-full max-w-lg mt-3 outline-none font-serif italic text-lg shadow-sm"        type="text"
        placeholder="Search projects... 🔍"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}