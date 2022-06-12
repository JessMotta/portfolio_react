import AOS from "aos";
import "aos/dist/aos.css";
import "./global.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Github from "./components/Github";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Teste from "./components/Teste";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Github />
        <Portfolio />
        <Teste/>
      </main>
      <Footer />
    </>
  );
}

export default App;
