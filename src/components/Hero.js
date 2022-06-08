import React from "react";

export default function index() {
  return (
    <section id="hero" className="flex justify-center items-center flex-col bg-hero-pattern bg-blend-luminosity bg-cover lg:h-screen text-white text-center py-10 m-auto md:max-h-[700px] md:py-32">
      <h1 data-aos="fade-up" data-aos-duration="3000" className=" text-3xl md:text-6xl font-bold w-2/3 mx-auto">Oi, meu nome é Jéssica, sou Desenvolvedora Front-end</h1>
      <h2 data-aos="fade-up" data-aos-duration="3000" className=" pt-10 text-2xl md:text-4xl w-56 mx-auto md:w-1/2">E transformo seus projetos em aplicações reais, web ou mobile!</h2> 
      <a data-aos="fade-up" data-aos-duration="3000" className="mt-10 bg-wisteria px-5 py-3 rounded-md text-dark-purple font-bold text-lg hover:bg-[#9380A9] transition ease-in-out duration-150" href="https://api.whatsapp.com/send?phone=5571992627617&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20or%C3%A7amento%20de%20projeto%20para%20meu%20site!">Contatar-me</a>
    </section>
  );
}
      