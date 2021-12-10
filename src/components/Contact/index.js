//* Dependencies imports
import { useSelector } from 'react-redux';
import { useState } from "react";

//* Style Import
import './style.scss';

//* Images import
import myFile from "../../static/vf.pdf"
import myFile2 from "../../static/EV.pdf"
import shake from "./image/shake.svg"
import france from "./image/france.png"
import uk from "./image/uk.png"

//* Contact Component
const Contact = () => {
  
  //* Dark Mode State
  const isDarkModeActive = useSelector((state) => state.darkMode);

  //* Play Message State
  const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true)
    }

    //* JSX Start
    return(
        <div className={isDarkModeActive ? ' contact dark' : 'contact'}  id="contact">
          <div className={isDarkModeActive ? "contact__container dark" : "contact__container"}>
            <div className="left">
              <img src={shake} alt="" />
            </div>
            <div className={isDarkModeActive ? "right dark" : "right"}>
              <h2 className={isDarkModeActive ? "main--title dark" : "main--title"}>Contact.</h2>
                <form  action="https://formsubmit.co/antoine-vaillant@hotmail.com" method="POST">
                <input type="text" placeholder="Email" name="email" required/>
                <textarea placeholder="Message" name="text" required></textarea>
                <button className={isDarkModeActive ? "button-send dark" : "button-send"} type="submit" onSubmit={handleSubmit}>Send</button>
                {message && <span>Thanks for your message, I will reply ASAP</span>}
              </form>
              <h2 className={isDarkModeActive ? "main--title dark" : "main--title"}>Download my CV.<i class="uil uil-arrow-down"></i></h2>
              <div className="container__flag">
                <a  download ="CV-Antoine-Vaillant" href={myFile}><img src={france} alt="" className="logo_countries"/></a>
                <a download="CV-Antoine-Vaillant" href={myFile2}> <img src={uk} alt=""  className="logo_countries"/></a>
              </div>
              <div className={isDarkModeActive ? "information__container dark" : "information__container"}>
                <h2 className={isDarkModeActive ? "main--title dark" : "main--title"}>Contact Me.</h2>
                <div className="container">
                  <div className="contact__information">
                    <i className={isDarkModeActive ? "uil uil-phone contact__icon dark" : "uil uil-phone contact__icon"}></i>
                    <div className="information">
                      <h3 className={isDarkModeActive ? "information--title dark" : "information--title"}>
                        Call Me
                      </h3>
                      <span className={isDarkModeActive? "information--subtitle dark" : "information--subtitle"}>06-76-32-66-89</span>
                    </div>
                  </div>
                  <div className="contact__information">
                    <i className={isDarkModeActive ? "uil uil-envelope contact__icon dark" : "uil uil-envelope contact__icon"}></i>
                    <div className="information">
                      <h3 className={isDarkModeActive ? "information--title dark" : "information--title"}>
                        Email
                      </h3>
                      <span className={isDarkModeActive? "information--subtitle dark" : "information--subtitle"}>antoine-vaillant@hotmail.com</span>
                    </div>
                  </div>
                  <div className="contact__information">
                    <i className={isDarkModeActive ? "uil uil-map-pin contact__icon dark" : "uil uil-map-pin contact__icon"}></i>                <div className="information">
                      <h3 className={isDarkModeActive ? "information--title dark" : "information--title"}>
                        Location
                      </h3>
                      <span className={isDarkModeActive? "information--subtitle dark" : "information--subtitle"}>Toulouse (France)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
    )
}

//* Component export
export default Contact;
