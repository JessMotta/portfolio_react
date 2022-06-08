import React, { useEffect, useState } from "react";

export default function Portfolio() {
  // const [project, setProject] = useState([]);

  // useEffect(() => {
  //   fetch("./database.json")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setProject(data);
  //     });
  // }, []);

  return (
    <section className="mx-8">
      <h2 className="my-40 text-english-violet text-4xl font-bold text-center">
        Portfólio
      </h2>
      <div className="flex justify-between max-w-8xl">
        
        <div data-aos="fade-up" data-aos-duration="2000" className="w-80 bg-english-violet py-5 px-3 rounded-lg">
          <a href="#" aria-label="link para o site da Agatha Christie">
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

        <div data-aos="fade-down" data-aos-duration="2000" className="w-80 bg-english-violet py-5 px-3 rounded-lg">
          <a
            href="#"
            aria-label="link para o site do Jogo da Velha"
          >
            <div>
              <img
                className="w-80"
                src="https://i.postimg.cc/NGztXqtF/jogo-velha.png"
                alt="imagem do site do Jogo da Velha"
              />
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
                Site do Jogo da Velha
              </h2>
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="w-80 bg-english-violet py-5 px-3 rounded-lg">
          <a
            href="https://jessmotta.github.io/technicalshare.frontend/"
            aria-label="link para o site da Agatha Christie"
          >
            <div>
              <img
                className="w-80"
                src="https://i.postimg.cc/pdCpwDcp/technical-share.png"
                alt="imagem do site da Agatha Christie"
              />
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
                Technical Share Hackathon da FCamara
              </h2>
            </div>
          </a>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className="w-80 bg-english-violet py-5 px-3 rounded-lg">
          <a
            href="https://feedback-widget-frontend-theta.vercel.app/"
            aria-label="link para o site da Agatha Christie"
          >
            <div>
              <img
                className="w-80"
                src="https://i.postimg.cc/fTvyt7Z5/feedwidget.png"
                alt="imagem do site da Agatha Christie"
              />
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
                Evento NLW Return Da Rocketseat
              </h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
