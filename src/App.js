import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './Styles.css';

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
