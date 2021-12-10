//* Dependencies imports
import { Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

//* Style Import
import './App.scss';

//* Component imports
import Topbar from './components/Topbar/index.js';
import Skills from './components/Skills/index.js';
import Intro from './components/Intro/index.js';
import Contact from './components/Contact/index.js';
import Portfolio from './components/Portfolio/index.js';
import Footer from './components/Footer/index.js';
import Legals from './components/Legals/index.js';


//* App Component
const App = () => {

  //* Dark Mode State
  const isDarkModeActive = useSelector((state) => state.darkMode);

  //* JSX Start
  return(
    <div className={isDarkModeActive ? "app dark" : "app"}>
      <Topbar />
        <Routes>
          <Route path="/" element={<Intro/>} /> 
          <Route path="/skills" element={<Skills/>} /> 
          <Route path="/portfolio" element={<Portfolio/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/legals" element={<Legals/>} /> 
        </Routes>
      <Footer />
    </div>
  )
};

//* Component export
export default App;
