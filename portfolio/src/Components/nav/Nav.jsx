import React from 'react'
import "./nav.css"
import { BiHomeAlt } from "react-icons/bi"
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <nav>
            <a href="#" className='active'><BiHomeAlt /></a>
            <a href="#about"><BiHomeAlt /></a>
            <a href="#experience"><BiHomeAlt /></a>
            <a href="#services"><BiHomeAlt /></a>
            <a href="#contact"><BiHomeAlt /></a>
        </nav>
    )
}

export default Nav