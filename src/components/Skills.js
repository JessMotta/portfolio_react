import React from "react";

export default function Skills() {
  return (
    <section className="flex flex-col justify-evenly my-40">
      <h2 className=" text-english-violet text-4xl font-bold text-center pt-10">
        Habilidades
      </h2>
      <div className="flex justify-around mt-20 text-white text-center">
        
        <div>
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-brands fa-js fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold text-2xl mt-4">
              JavaScript
            </h3>
          </div>
        </div>

        <div>
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-brands fa-react fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold text-2xl mt-4">React</h3>
          </div>
        </div>

        <div>
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-brands fa-figma fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold text-2xl mt-4">Figma</h3>
          </div>
        </div>

        <div>
          <div className="bg-english-violet p-8 rounded-md text-center w-32 shadow-2xl">
            <i class="fa-solid fa-comments fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold text-2xl mt-4">
              Comunicação
            </h3>
          </div>
        </div>

        <div>
          <div className="bg-english-violet p-8 rounded-md text-center w-32">
            <i class="fa-solid fa-people-group fa-3x"></i>
          </div>
          <div>
            <h3 className="text-dark-purple font-bold text-2xl mt-4 w-32">
              Trabalho em equipe
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
