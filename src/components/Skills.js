import React from "react";

export default function Skills() {
  return (
    <section className="flex flex-col justify-center my-40">
      <h2 className=" text-english-violet text-4xl font-bold text-center pt-10 mb-20">
        Habilidades
      </h2>
      <div className="flex flex-wrap text-white justify-around mx-auto md:space-x-5 lg:space-x-20">
        
        <div className="flex flex-col items-center">
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-brands fa-js fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold lg:text-2xl md:text-xl mt-4 mb-6">
              JavaScript
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-brands fa-react fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold lg:text-2xl md:text-xl mt-4 mb-6">React</h3>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-brands fa-figma fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold lg:text-2xl md:text-xl mt-4 mb-6">Figma</h3>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-solid fa-comments fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold lg:text-2xl md:text-xl mt-4 mb-6">
              Comunicação
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-english-violet p-8 rounded-md text-center w-32">
            <i class="fa-solid fa-people-group fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold lg:text-2xl md:text-xl mt-4 w-min text-center">
              Trabalho em equipe
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
