import computer from './image/computer.png'
import travelmate2 from './image/travelmate2.png'
import recipe from './image/recipe.png'
import website from './image/website.jpg'
import arrow from './image/arrowright.png'

import { useSelector } from 'react-redux';
import { useState } from "react";


import './style.scss';

const Portefolio = () => {

  const isDarkModeActive = useSelector((state) => state.darkMode);

  const [currentSlide, setCurrentSlide]= useState(0)
  const data = [
    {
      id: "1",
      icon: computer,
      title: "Travel Mate",
      desc:
        "End of training project at O'Clock realized in two weeks in peer programming. The objective was to create a website allowing backpackers to organize events and meet anywhere in the world ",
      img: travelmate2,
      link:"https://github.com/VaillantA/code-travel-mate"
    },
    {
      id: "2",
      icon: computer,
      title: "O'Recipe",
      desc:
        "Recipe site made with React, Redux and React router. Datas are retrieved from a local api with axios.",
      img: recipe,
      link: "https://github.com/VaillantA/O-Recipe"
        
    },
    {
      id: "3",
      icon: computer,
      title: "This Website",
      desc:
        "If you are interested in looking at the code behind this site, the code is open source. ",
      img: website,
      link: "https://github.com/VaillantA/website"
        
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

    return(
      <div className={isDarkModeActive ? 'portfolio dark' : 'portfolio'} id="portfolio">
      
          <h1 className="portfolio__title-one">Portfolio</h1>
          <h2 className="portfolio__title-two">My latest creations</h2>
          <div
              className="slider"
              style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >

            {data.map((data) => (
              <div className="container">
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={data.icon} alt="" />
                      </div>
                      <h2>{data.title}</h2>
                      <p>{data.desc}</p>
                      <div className="btn__container">
                        <button> <a href={data.link} target="_blank">Repo GitHub <i class="uil uil-arrow-right"></i></a></button>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <img className="img-right" src={data.img} alt="" />
                  </div>
                </div>
              </div>
            ))}
            </div>
          <img 
          src={arrow} 
          alt="" 
          className="arrow left" 
          onClick={() => handleClick("left")}

          />
          <img 
          src={arrow} 
          alt="" 
          className="arrow right"
          onClick={() => handleClick()}
          />
       
      </div>
    )
}


export default Portefolio;

