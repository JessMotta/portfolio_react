import React from "react";

export default function About() {
  return (
    <section className="flex justify-evenly h-full my-5">
      <img src="./assets/aboutImage.png" alt="" className="w-96"></img>

      <div className="w-96 flex flex-col justify-start">
        <h2 className="mt-8 text-english-violet text-4xl font-bold">
          Sobre mim
        </h2>
        <p className="mt-4 text-xl">
          Oi, sou Jéssica Motta, sou Desenvolvedora Front-end com conhecimentos
          de UX/UI Design, Design Responsivo e Acessibilidade. Realizo a
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
    </section>
  );
}
