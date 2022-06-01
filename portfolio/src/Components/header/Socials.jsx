import React from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
const Socials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/adwaita-raj-modak-5b435a203/" target=";blank"><GrLinkedin /></a>
            <a href="https://twitter.com/adwaitaraj001" target="blank"><BsTwitter /></a>
            <a href="https://www.instagram.com/bablu_bodmash._/" target="blank"><BsInstagram /></a>
        </div>
    )
}

export default Socials