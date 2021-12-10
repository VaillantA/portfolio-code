//* Dependencies imports
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//* Style Import
import './style.scss';

//* App Component
const Footer = () => {

  //* Dark Mode State
  const isDarkModeActive = useSelector((state) => state.darkMode);

  //* JSX Start
  return (
    <div className="footer--separateur">
      <div className={isDarkModeActive ? "footer dark" : "footer"}>
        <Link to="/contact" className="footerItem">
          Contact me
        </Link>
        <Link to="/legals" className="footerItem">
          Legales mentions
        </Link>
      </div>
    </div>
  )
};

//* Component export
export default Footer;
