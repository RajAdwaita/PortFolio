import React from 'react'
import "./footer.css"
import { BsGithub, BsInstagram } from "react-icons/bs";

import { SiCodechef, SiLeetcode } from "react-icons/si";
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>

                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    {/* <li><a href="#testimonials">Testimonials</a></li> */}
                    <li><a href="#contact">Contact</a></li>

                </ul>
                <div className="footer_socials">

                    <a href=""><BsGithub /></a>
                    <a href=""><SiCodechef /></a>
                    <a href=""><SiLeetcode /></a>
                </div>
                <div className="footer_copyright">
                    <small>&copy;Modak</small>
                </div>
            </a>
        </footer>
    )
}

export default Footer