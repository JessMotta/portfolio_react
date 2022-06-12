import React from "react";

export default function About() {
  return (
    <section id="about" className="h-max my-5 ">
      <div className="flex items-center flex-col mx-10 md:flex-row md:justify-evenly md:mx-0">
      <img src="./assets/aboutImage.png" alt="" className="lg:w-96 md:w-80"></img>
      

      <div className=" lg:w-96 md:w-64 flex flex-col justify-start">
        <h2 className="mt-8 text-english-violet text-4xl font-bold">
          Sobre mim
        </h2>
        <p className="mt-4 text-xl">
          Oi, sou Jéssica Motta, sou Desenvolvedora Front-end e aplico
           UX/UI Design, Design Responsivo e Acessibilidade nos projetos. Além disso, realizo a
          prototipação do projeto no Figma antes da aprovação para a produção!
        </p>

        <a
          href="./assets/Jessica_Lima_Motta_CV_pt.pdf"
          download={true}
          className="w-fit mt-8 bg-dark-purple px-3 py-3 text-center rounded-md text-misty-rose font-bold text-lg hover:bg-[#62344F] transition ease-in-out duration-150"
        >
          Download do CV
        </a>
      </div>
      </div>
    </section>
  );
}
