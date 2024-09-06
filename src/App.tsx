import React from 'react';
import './App.css';
import Header from './components/header/header/Header';
import Meet from './components/header/main/meet/meet/Meet';
import About from './components/header/main/about/About';
import Services from './components/header/main/services/Services';
import Project from './components/header/main/project/Project';
import Testimonials from './components/header/main/testimonials/Testimonials';


const App: React.FC = () => {
  return (
    <>
      <div className='app'>
        <Header/>
        <Meet/>
        <About/>
        <Services/>
        <Project/>
        {/* <Testimonials/> */}
      </div>
    </>
  )
}

export default App;
