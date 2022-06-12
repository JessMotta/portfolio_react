import React from "react";

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
    <section id="portfolio" className="mb-20">
      <h2 className="my-40 text-english-violet text-4xl font-bold text-center md:mb-20">
        Portfólio
      </h2>
      <div className="flex justify-between flex-wrap mx-2 space-y-4 md:space-y-px">
        
        <div className="w-80 h-[612px] bg-english-violet py-5 px-3 rounded-lg md:mb-4">
          <div>
              <img
                className="w-80"
                src="https://i.postimg.cc/Hx8HLBNj/agatha-christie.png"
                alt="imagem do site da Agatha Christie"
              />
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
              Desafio do Dia das Mulheres da FCamara
              </h2>
              <p className="text-white font-xl mt-4">Esse projeto ganhou prêmio na comunidade da Orange Juice (FCamara), como um dos melhores projetos realizados para o dia das mulheres. Ele foi desenvolvido utilizando HTML, CSS e JavaScript. Na tela principal há uma breve resumo da vida e algumas obras de Agatha, e ao final há um botão onde o usuário é redirecionado para uma tela de quiz, onde encontrará 10 perguntas relacionadas ao que foi apresentado na primeira tela.</p>
              </div>
              <div className="flex justify-between items-end mt-8 text-misty-rose text-xl">
                <div className="hover:text-white">
                <i class="fa-solid fa-link "></i>
                <a className="ml-2 font-bold" href="https://jessmotta.github.io/agathaChristie_FCamara/" aria-label="link para o site da Agatha Christie">Site</a>
                </div>
                <div className="hover:text-white">
                <i class="fa-solid fa-code-branch"></i>
                <a className="ml-2 font-bold" href="https://github.com/JessMotta/agathaChristie_FCamara" aria-label="link para o repositorio da Agatha Christie">Repositório</a>
                </div>
              </div> 
        </div>
  

        <div className="w-80 h-[612px] bg-english-violet py-5 px-3 rounded-lg md:mb-4">
         <div>
              <img
                className="w-80"
                src="https://i.postimg.cc/NGztXqtF/jogo-velha.png"
                alt="imagem do site do Jogo da Velha"
              />
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
                Site do Jogo da Velha
              </h2>
              <p className="text-white font-xl mt-4">Para esse projeto foi utilizado como base o projeto do Jogo da Velha no curso do Programador BR, e foram implementadas outras funcionalidades como, colocar nomes dos jogadores, adicionar contagem de vitórias para cada jogador e um botão de resete para zerar essa pontuação, botão para reiniciar o jogo sem perder a pontuação dos jogadores e mensagem para informar o empate.</p>
             
              <div className="flex justify-between text-misty-rose text-xl">
                <div className="hover:text-white">
                <i class="fa-solid fa-link "></i>
                <a className="ml-2 font-bold" href="https://jessmotta.github.io/jogoDaVelha/"aria-label="link para o site do Jogo da Velha">Site</a>
                </div>
                <div className="hover:text-white">
                <i class="fa-solid fa-code-branch"></i>
                <a className="ml-2 font-bold" href="https://github.com/JessMotta/jogoDaVelha" aria-label="link para o repositorio do jogo da Velha">Repositório</a>
                </div>
              </div>
           
           </div>
        </div>

        <div className="w-80 h-[612px] bg-english-violet py-5 px-3 rounded-lg">
          <div>
              <img
                className="w-80"
                src="https://i.postimg.cc/pdCpwDcp/technical-share.png"
                alt="imagem do site da Technical Share"
              />
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
                Technical Share Hackathon da FCamara
              </h2>
              <p className="text-white font-xl mt-4">É uma plataforma onde pessoas da tecnologia com conhecimentos diversos estão disponíveis para tirar dúvidas sobre a área ou para orientar no aprendizado de novas habilidades.Foi desenvolvido durante o Hackathon do Programa de Formação da FCamara</p>
              <p className="text-white font-xl">Nesse projeto também foi realizado o back-end da platadorma e o repositório está disponível <a href="https://github.com/JessMotta/technicalshare.backend">aqui</a></p>
              </div>
              <div className="flex justify-between mt-8 text-misty-rose text-xl">
                <div className="hover:text-white">
                <i class="fa-solid fa-link "></i>
                <a className="ml-2 font-bold" href="https://jessmotta.github.io/technicalshare.frontend/" aria-label="link para o site da Technical Share">Site</a>
                </div>
                <div className="hover:text-white">
                <i class="fa-solid fa-code-branch"></i>
                <a className="ml-2 font-bold" href="https://github.com/JessMotta/technicalshare.frontend" aria-label="link para o repositorio da Technical Share">Repositório</a>
                </div>
            </div>           
        </div>

        <div className="w-80 h-[612px] bg-english-violet py-5 px-3 rounded-lg">
        <div>
              <img
                className="w-80"
                src="https://i.postimg.cc/fTvyt7Z5/feedwidget.png"
                alt="imagem do Feedwidget"
              />
              <h2 className="text-misty-rose text-center text-xl font-bold mt-3">
                Evento NLW Return Da Rocketseat
              </h2>
              <p className="text-white font-xl mt-4">O Feedback Widget foi desenvolvido durante o evento da NLW Return da Rocketseat. Esse widget foi construído utilizando React, TypeScript e Tailwind CSS no Front-end, no Back-end foi utilizado o TypeScript, Node.js, Prisma e o para teste o Jest. Além disso foi construída também a versão mobile utilizando o React Native com TypeScript e Tailwind CSS. </p>
          </div>
            <div className="flex justify-between mt-8 text-misty-rose text-xl">
                {/* <div className="hover:text-white">
                <i class="fa-solid fa-link "></i>
                <a className="ml-2 font-bold" ref="https://feedback-widget-frontend-theta.vercel.app/" aria-label="link para o site do Feedback Widget">Site</a>
                </div> */}
                <div>
                <i class="fa-solid fa-code-branch"></i>
                <a className="ml-2 font-bold" href="https://github.com/JessMotta/FeedbackWidget.frontend" aria-label="link para o repositorio  do Feedback Widget">Repositório</a>
                </div>
            </div>                
        </div>
      </div>
    </section>
  );
}
