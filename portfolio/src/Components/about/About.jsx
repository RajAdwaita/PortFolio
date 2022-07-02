import React from 'react'
import "./about.css"
import img from "../../assets/me-about.jpeg"
import { SiMaterialdesignicons } from 'react-icons/si'
import { IoMdFootball } from 'react-icons/io'
import { ImBooks } from 'react-icons/im'
const About = () => {
    return (
        <section id='about'>
            <h5>Know More</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={img} alt="About Image" className='iimg' />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <SiMaterialdesignicons className='about_icon' />
                            <h5>Experience</h5>
                            <small>Still Learning</small>
                        </article>
                        <article className="about_card">
                            <IoMdFootball className='about_icon' />
                            <h5>Love </h5>
                            <small>Football</small>
                        </article>
                        <article className="about_card">
                            <ImBooks className='about_icon' />
                            <h5>CGPA</h5>
                            <small>9.07</small>
                        </article>
                    </div>

                    <p>Junior at VIT Vellore, B.TECH in CSE with spl. in Blockchain Technology. Love to register for hackathons. Love to play EFootball. Happy to have found so many good friends in College.</p>
                    <a href="#contact" className='btn btn-primary'>Get In Touch</a>

                </div>
            </div>
        </section>
    )
}

export default About