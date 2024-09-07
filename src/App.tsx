import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header/Header';
import Meet from './components/header/main/meet/meet/Meet';
import About from './components/header/main/about/About';
import Services from './components/header/main/services/Services';
import Project from './components/header/main/project/Project';
import Testimonials from './components/header/main/testimonials/Testimonials';
import Contact from './components/header/main/contact/Contact';
import Footer from './components/header/main/footer/Footer';
import { useTheme } from './context/ThemeContext';


const App: React.FC = () => {

  const { theme } = useTheme();

  return (
    <>
      <div className={`${'app'} ${theme}`}>
        <Header/>
        <Meet/>
        <About/>
        <Services/>
        <Project/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
