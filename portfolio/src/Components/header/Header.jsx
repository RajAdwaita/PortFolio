import React from 'react'
import Cv from './Cv'
import "./header.css"
import img from "../../assets/me.png"
import Socials from './Socials'


const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h4>Wassup People!!</h4>
                <h1>I'm Adwaita</h1>
                <h4 className="text-light">Web Developer</h4>
                <Socials />
                <Cv />

                <div className="me">
                    <img src={img} alt="" />
                </div>

                <a href="#contact" className='scroll_down'>SCROLL DOWN</a>

            </div>
        </header>
    )
}

export default Header