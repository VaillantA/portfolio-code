//* Dependencies imports
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link} from 'react-router-dom';
import React from 'react';

//* Style imoort
import './style.scss';


//* Topbat Component
const Topbar = () => {

  //* Burger open state 
  const isClicked = useSelector((state) => state.burgerOpen);

  //* Dark Mode state
  const isDarkModeActive = useSelector((state) => state.darkMode);

  //* Actions to dispatch
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'BURGER_OPEN',
    });
  };
  const handleClickDark = () => {
    dispatch({
      type: 'TOOGLE_DARK_MODE',
    });
  };

  //* JSX start
  return (
    <nav className="NavbarItems">
      <Link to="/"><h1 className="navbar-logo">Antoine <i class="fas fa-laptop-code"></i></h1></Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <NavLink className="nav-links--link" to="/" exact >Intro</NavLink>
        </li>
        <li>
          <NavLink className="nav-links--link" to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink className="nav-links--link" to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink className="nav-links--link" to="/contact" >Contact</NavLink>
        </li>
        <div class="nav__btns">
          <i onClick={handleClickDark} class={isDarkModeActive ? 'uil uil-sun' : 'uil uil-moon' }></i>
        </div>
      </ul>
    </nav>
  );
}

export default Topbar;
