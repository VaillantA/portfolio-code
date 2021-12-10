//* Dependencies imports
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* Style Import
import './style.scss';

//* Skills Component
const Skills = () => {

  //* States Toogles Open/Close
  const isClicked = useSelector((state) => state.openFront);
  const isClicked2 = useSelector((state) => state.openBack);

  //* Dark Mode State
  const isDarkModeActive = useSelector((state) => state.darkMode);

  //* Actions to dispatch
  const dispatch = useDispatch();
  const handleClickFront = () => {
    dispatch({
      type: 'TOOGLE_OPEN_FRONT',
    });
  };
  const handleClickBack = () => {
    dispatch({
      type: 'TOOGLE_OPEN_BACK',
    });
  };

    //* JSX Start
    return(
      <div className={isDarkModeActive ? ' skills dark' : 'skills'}  id="skills">
        <div className="skills__section">
          <h2 className={isDarkModeActive ? ' skills__title--main dark' : 'skills__title--main'}>My skills</h2>
          <h3 className={isDarkModeActive ? ' skills__subtitle--second dark' : 'skills__subtitle--second'}>My technical level</h3>
          <div className="skills__container container">
              <div className="skills__main--container">
                <div onClick={handleClickFront} className={isClicked ? 'skills__content skills__open' : 'skills__content skills__close'}>
                  <div className="skills__header">
                    <i className={isDarkModeActive ? 'uil uil-brackets-curly skills__icon dark' : 'uil uil-brackets-curly skills__icon' }></i>

                    <div>
                      <h1 className={isDarkModeActive ? ' skills__title dark' : 'skills__title'} >Frontend developer</h1>
                      <span className={isDarkModeActive ? "skills__subtitle dark" : "skills_subtitle"}>6 months</span>
                    </div>
                    <i className={isClicked ? 'uil uil-angle-down skills__arrow dark-change' : 'uil uil-angle-up skills__arrow'}></i>
                  </div>
                  <div className="skills__list grid">
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className={isDarkModeActive ? ' skills__name dark' : 'skills__name'} >HTML</h3>
                        <span className={isDarkModeActive ? ' skills__number dark' : 'skills__number'}>90%</span>
                      </div>
                      <div className={isDarkModeActive ? ' skills__bar dark' : 'skills__bar'}>
                        <span className={isDarkModeActive ?  'skills__percentage skills__html dark' : 'skills__percentage skills__html'}></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className={isDarkModeActive ? ' skills__name dark' : 'skills__name'}>CSS/SCSS</h3>
                        <span className={isDarkModeActive ? ' skills__number dark' : 'skills__number'}>80%</span>
                      </div>
                      <div className={isDarkModeActive ? ' skills__bar dark' : 'skills__bar'}>
                        <span className={isDarkModeActive ?  'skills__percentage skills__css dark' : 'skills__percentage skills__css'}></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className={isDarkModeActive ? ' skills__name dark' : 'skills__name'}>React.JS</h3>
                        <span className={isDarkModeActive ? ' skills__number dark' : 'skills__number'}>70%</span>
                      </div>
                      <div className={isDarkModeActive ? ' skills__bar dark' : 'skills__bar'}>
                        <span className={isDarkModeActive ?  'skills__percentage skills__react dark' : 'skills__percentage skills__react'}></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className={isDarkModeActive ? ' skills__name dark' : 'skills__name'}>JavaSript</h3>
                        <span className={isDarkModeActive ? ' skills__number dark' : 'skills__number'}>60%</span>
                      </div>
                      <div className={isDarkModeActive ? ' skills__bar dark' : 'skills__bar'}>
                        <span className={isDarkModeActive ?  'skills__percentage skills__js dark' : 'skills__percentage skills__js'}></span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* //! SKILLS section 2 */}
                <div onClick={handleClickBack} className={isClicked2 ? 'skills__content skills__open' : 'skills__content skills__close'}>
                  <div className="skills__header">
                  <i className={isDarkModeActive ? "uil uil-server-network skills__icon dark" : "uil uil-server-network skills__icon"}></i>

                    <div>
                      <h1 className={isDarkModeActive ? ' skills__title dark' : 'skills__title'} >Backend developer</h1>
                      <span className={isDarkModeActive ? "skills__subtitle dark" : "skills_subtitle"}>6 months</span>
                    </div>
                    <i className={isClicked2 ? 'uil uil-angle-down skills__arrow dark-change' : 'uil uil-angle-up skills__arrow'}></i>
                  </div>
                  <div className="skills__list grid">
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className={isDarkModeActive ? ' skills__name dark' : 'skills__name'}>PHP</h3>
                        <span className={isDarkModeActive ? ' skills__number dark' : 'skills__number'}>50%</span>
                      </div>
                      <div className={isDarkModeActive ? ' skills__bar dark' : 'skills__bar'}>
                        <span className={isDarkModeActive ?  'skills__percentage skills__php dark' : 'skills__percentage skills__php'}></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className={isDarkModeActive ? ' skills__name dark' : 'skills__name'}>Adminer</h3>
                        <span className={isDarkModeActive ? ' skills__number dark' : 'skills__number'}>50%</span>
                      </div>
                      <div className={isDarkModeActive ? ' skills__bar dark' : 'skills__bar'}>
                        <span className={isDarkModeActive ?  'skills__percentage skills__css dark' : 'skills__percentage skills__admin'}></span>
                      </div>
                    </div>
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className={isDarkModeActive ? ' skills__name dark' : 'skills__name'}>MVC Architecture</h3>
                        <span className={isDarkModeActive ? ' skills__number dark' : 'skills__number'}>40%</span>
                      </div>
                      <div className={isDarkModeActive ? ' skills__bar dark' : 'skills__bar'}>
                        <span className={isDarkModeActive ?  'skills__percentage skills__mvc dark' : 'skills__percentage skills__mvc'}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div> 
          <div>

          </div>
        </div>
      </div>
  )
};

//* Component export
export default Skills;


