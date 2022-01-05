import React from "react";
import Instagram from "../imgs/instagram.png"
import Linkedin from "../imgs/linkedin.png"
import "../css/Footer.css"

function Footer (props) {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/gabriel-mesquita-635600223/"><img src={Linkedin} alt="linkedin" className="linkedin"/></a>
            <a href="https://www.instagram.com/gb.mesquita/"><img src={Instagram} alt="instagram" className="instagram"/></a>
        </footer>  
    )
}

export default Footer