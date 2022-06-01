import React from 'react'
import "./nav.css"
import { BiHomeAlt } from "react-icons/bi"
import { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { GrBarChart } from "react-icons/gr"
import { GoGraph } from "react-icons/go"
import { GrProjects } from "react-icons/gr"
const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GoGraph /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail /></a>
        </nav>
    )
}

export default Nav