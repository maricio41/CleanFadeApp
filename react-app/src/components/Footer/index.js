import React from "react";
import "./Footer.css";




const Footer = () => {
    return(
        <ul className="footer__container">
            <li className="footer__liTag" ><a className="footer__infoLink" href="/about">About</a></li>
            <li className="footer__liTag" ><a className="footer__infoLink" href="https://www.linkedin.com/in/maricio-harris-0547491b9/">Linkedin</a></li>
            <li className="footer__liTag" ><a className="footer__infoLink" href="https://github.com/maricio41">GitHub</a></li>
            <li className="footer__liTag" ><a className="footer__infoLink" href="https://www.linkedin.com/in/maricio-harris-0547491b9/">Linkedin</a></li>
            <li className="footer__liTag" ><a className="footer__infoLink" href="https://github.com/maricio41" >Portfolio</a></li>
            <li className="footer__liTag" ><a className="footer__infoLink" href="https://github.com/maricio41/CleanFade">Repo</a></li>
        </ul>
    )
}

export default Footer
