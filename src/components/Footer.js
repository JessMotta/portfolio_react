import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-english-violet text-white h-50 flex flex-col justify-center">
      <h3 className="text-center font-bold text-2xl pt-8">
        Você pode se conectar comigo através das minhas redes sociais!
      </h3>
      <div className="flex justify-center mt-8">
        <a className="px-4"  href="https://github.com/JessMotta">
          <i class="fa-brands fa-github fa-2xl"></i>{" "}
        </a>
        <a className="px-4" href="https://api.whatsapp.com/send?phone=5571992627617&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20or%C3%A7amento%20de%20projeto%20para%20meu%20site!">
          <i class="fa-brands fa-whatsapp fa-2xl"></i>
        </a>
        <a className="px-4" href="https://www.linkedin.com/in/jessicamotta17/">
          <i class="fa-brands fa-linkedin fa-2xl"></i>
        </a>
      </div>
      <p className="text-center mt-8 mb-4"> &copy; Todos os direitos reservados. Desenvolvido por Jéssica Motta.</p>
    </footer>
  );
}
