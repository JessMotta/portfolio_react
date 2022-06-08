import AOS from 'aos';
import 'aos/dist/aos.css';
import "./global.css"
import React, {useEffect} from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Github from "./components/Github";
import Footer from "./components/Footer";



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Portfolio/>
      <Github/>
      <Footer/>
    </>
  );
}

export default App;
