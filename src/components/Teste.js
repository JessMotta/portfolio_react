import React, {useState, useEffect} from 'react'

export default function Teste() {
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
    <div>
        {project.map((proj, index) =>(
            <div key={index}>
                <h2>{proj.title}</h2>
             

            </div>
        ))}
    </div>
  )
}
