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
      <h2 className="mt-40 mb-20 text-english-violet text-4xl font-bold text-center">
        Portfólio
      </h2>

      
      <div className="flex justify-between flex-wrap mx-2 lg:justify-around">
        {project.map((proj,index) =>(
          <div key={index} className="grid grid-cols-1 gap-4 content-between w-80 h-auto mt-4 bg-english-violet py-5 px-3 rounded-lg md:mb-4 lg:w-2/5 lg:content-center">
          <div className='text-center'>
              <img
                className="w-80 lg:h-max lg:mx-auto"
                src={proj.image.link}
                alt={proj.image.alt}
              />
          </div>
          <div>
              <h2 className="text-misty-rose text-center text-xl font-bold mt-8  lg:text-2xl">
              {proj.title}
              </h2>
              <p className="text-white mt-4 lg:text-lg">{proj.description}</p>

        </div>
            <div className=" text-misty-rose text-xl mt-4 flex justify-between">
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
        ))}
        
        </div>
    </section>
  );
}
