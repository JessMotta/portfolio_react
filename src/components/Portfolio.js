import React, { useEffect, useState } from "react";


export default function Portfolio() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("./database.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => projects(data));
  }, []);

  function projects(data) {
    setProject(data);
    console.log(data);
  }

  return (
    <section className="mx-8">
      <h2 className="my-40 text-english-violet text-4xl font-bold text-center">
        Portfólio
      </h2>
      <div className="flex justify-between">
      <div className="w-80 bg-english-violet py-5 px-3 rounded-lg">
        <a
          href="#"
          aria-label="link para o site da Agatha Christie"
        >
          <div>
            <img
              className="w-80"
              src="https://i.postimg.cc/Hx8HLBNj/agatha-christie.png"
              alt="imagem do site da Agatha Christie"
            />
            <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
              Desafio do Dia das Mulheres da FCamara
            </h2>
          </div>
        </a>
      </div>

      <div className="w-80 bg-english-violet py-5 px-3 rounded-lg">
        <a
          href="https://jessmotta.github.io/agathaChristie_challengeFCamara/"
          aria-label="link para o site da Agatha Christie"
        >
          <div>
            <img
              className="w-80"
              src="https://i.postimg.cc/Hx8HLBNj/agatha-christie.png"
              alt="imagem do site da Agatha Christie"
            />
            <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
              Desafio do Dia das Mulheres da FCamara
            </h2>
          </div>
        </a>
      </div>

      <div className="w-80 bg-english-violet py-5 px-3 rounded-lg">
        <a
          href="https://jessmotta.github.io/agathaChristie_challengeFCamara/"
          aria-label="link para o site da Agatha Christie"
        >
          <div>
            <img
              className="w-80"
              src="https://i.postimg.cc/Hx8HLBNj/agatha-christie.png"
              alt="imagem do site da Agatha Christie"
            />
            <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
              Desafio do Dia das Mulheres da FCamara
            </h2>
          </div>
        </a>
      </div>

      <div className="w-80 bg-english-violet py-5 px-3 rounded-lg">
        <a
          href="https://jessmotta.github.io/agathaChristie_challengeFCamara/"
          aria-label="link para o site da Agatha Christie"
        >
          <div>
            <img
              className="w-80"
              src="https://i.postimg.cc/Hx8HLBNj/agatha-christie.png"
              alt="imagem do site da Agatha Christie"
            />
            <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
              Desafio do Dia das Mulheres da FCamara
            </h2>
          </div>
        </a>
      </div>

      </div>
    
    </section>
  );
}
