

export default function About() {
  return (
    
    <div className="bg-stone-50 shadow-inner rounded-sm p-8 flex-1 border border-stone-200 flex flex-col justify-center">
      <div className="border-l-2 border-amber-800 pl-6">
      <h2 className="text-3xl font-serif mb-6 text-gray-900">
        About the<span className="text-amber-800 italic"> Gallery</span>
      </h2>
     <p className="text-gray-600 text-base leading-loose font-light">
          Welcome to our Art Gallery Portfolio. This platform is a <span className="font-semibold text-gray-800">vibrant community</span> where artists showcase their soul's work. 
        </p>
        <p className="mt-4 text-gray-600 text-base leading-loose font-light">
          Whether you're a painter, sculptor, or digital creator, this is the place to share your vision with the world. Join us in celebrating the beauty of creation.
        </p> 
       <div className="mt-8 flex justify-center items-center gap-14 w-full ">
          <div className="bg-amber-800 text-italic text-sm font-light"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-900 font-bold w-full">@Ihomba.92</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-900 font-bold w-full">Est. 2026</span>
        </div>
      </div>
    </div>
  );
}
