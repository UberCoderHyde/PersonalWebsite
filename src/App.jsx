import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ContactMe from "./components/ContactMe"
import {library} from '@fortawesome/fontawesome-svg-core';
import Experience from "./components/Experience"
import {fab} from "@fortawesome/free-brands-svg-icons";
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'



library.add(fab);
function App() {
  useEffect(() =>{
    AOS.init({
      duration:1000,
    });
  },[]);
  return (
    <div className="dark:bg-gray-600">
      <Header />
      <Profile />
      <About /> 
      <Projects />
      <Experience />
      <Skills />
      <ContactMe />
    <Footer></Footer>
    </div>
  );
}

export default App;
