//* Dependencies imports
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

//* Style Import
import './style.scss';

//* Images import
import vaillant from './image/vaillant.png';

//*Intro Component
const Intro = () => {
 
    //* Dark Mode State
  const isDarkModeActive = useSelector((state) => state.darkMode);

  //* Ityped dependency init code
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", "Designer", "Content Creator"],
    });
  }, []);

  //* JSX Start
  return(
    <div className={isDarkModeActive ? 'intro--dark' : 'intro'} id="intro">
      <div className="intro__content">
        <h1 className="intro__content--title">
          My name is Antoine & I build things on the internet.
        </h1>
        <div className="intro__content--data">
          <div className="intro__content--container">
            <h2 className="intro__content--container-title">Hi There, I'm <span>Antoine Vaillant</span> <br />  I'm a junior <span ref={textRef} className="typed-text"></span> <br /> <a href="https://github.com/VaillantA?tab=repositories" target="_blank"><i class="uil uil-github"></i></a> <a href="https://www.linkedin.com/in/antoine-vaillant-22a50915b/" target="_blank"><i class="uil uil-linkedin"></i></a> 
            </h2>
          </div>
          
          <div className="intro__content--container-image">
            <img src={vaillant} alt="" className="image" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

//* Component export
export default Intro;

