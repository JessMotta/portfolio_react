import React, {useState, useEffect} from 'react'

export default function Portfolio() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("./database.json", {
        headers:{
            Accept: "application/json"
        }
    }).then(res => res.json())
    .then(res => {
        setProject(res.data)
         })
       
   }, []);
   
  return (
    <section id="portfolio" className="mb-20">
      <h2 className="my-40 text-english-violet text-4xl font-bold text-center md:mb-20">
        Portfólio
      </h2>

      
      <div className="flex justify-between flex-wrap mx-2 space-y-4 md:space-y-px">
        {project.map((proj,index) =>(
          <div key={index} className="w-80 h-auto bg-english-violet py-5 px-3 rounded-lg md:mb-4 lg:flex lg:justify-center lg:items-center lg:w-1/2 lg:h-fit">
          <div className="lg:w-1/2 lg:mr-2">
              <img
                className="w-80 lg:h-full"
                src={proj.image.link}
                alt={proj.image.alt}
              />
          </div>
          <div className="lg:w-1/2">
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3 lg:text-2xl">
              {proj.title}
              </h2>
              <p className="text-white font-xl mt-4">{proj.description}</p>
              <div className="flex justify-between items-end mt-8 text-misty-rose text-xl">
                <div className="hover:text-white">
                <i class="fa-solid fa-link "></i>
                <a className="ml-2 font-bold" href={proj.site.link} aria-label={proj.site.label}>Site</a>
                </div>
                <div className="hover:text-white">
                <i class="fa-solid fa-code-branch"></i>
                <a className="ml-2 font-bold" href={proj.repository.link} aria-label={proj.repository.label}>Repositório</a>
                </div>
              </div> 
            </div>
        </div>
        ))}
        
        </div>
    </section>
  );
}
