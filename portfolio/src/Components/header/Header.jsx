import React, { Component } from 'react'; import ScrollButton from 'react-scroll-button';

import Cv from './Cv'
import "./header.css"
import img from "../../assets/me.png"
import Socials from './Socials'


const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h3>Wassup People!!</h3>
                <h1>I'm Adwaita</h1>
                <h3 className="text-light">No Money No Honey</h3>
                <Socials />
                <Cv />

                <div className="me">
                    <img src={img} alt="" />
                </div>

                <a href="#portfolio" className='scroll_down'><svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg> </a>


            </div>
        </header>
    )
}

export default Header