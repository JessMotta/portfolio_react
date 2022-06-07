import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Github() {
  const [userGit, setUserGit] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getApiGit();
    getApiGitRepos();
  }, []);

  function getApiGit() {
    axios
      .get("https://api.github.com/users/jessmotta", {})
      .then(function (response) {
        setUserGit(response.data);
        // console.log(response);/*  */
      })
      .catch(function (error) {
        // console.log(error);

      });
  }

  function getApiGitRepos() {
    axios
      .get("https://api.github.com/users/JessMotta/repos", {})
      .then(function (response) {
        setProjects(response.data);
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }

  return (
    <section className="bg-github-section flex flex-col justify-evenly my-40">
      <h2 className=" text-misty-rose text-4xl font-bold text-center pt-10">
        Github
      </h2>
      <div className="flex justify-around mt-20">
      <div>
        <img
          className="rounded-full w-80 border-4 border-solid border-wisteria"
          src={userGit.avatar_url}
          alt="Foto de Jéssica do perfil do Github"
        />
      </div>

      <div>
        {projects.slice(0, 5).map((project) => (
          <div key={project.id} className="bg-misty-rose mb-6 px-6 py-4 text-english-violet rounded-lg hover:bg-[#CCBCBC] transition ease-in-out duration-150">
            <a href={project.html_url} target="_blank" rel="noreferrer">
              <h3 className="font-bold text-xl">{project.name}</h3>
              <p className="text-lg mt-2">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
      </div>
   
    </section>
  );
}
