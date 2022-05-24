import React from 'react'
import "./about.css"
import img from "../../assets/me-about.jpg"
import { SiMaterialdesignicons } from 'react-icons/si'

const About = () => {
    return (
        <section id='about'>
            <h5>Know More</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={img} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <SiMaterialdesignicons className='about_icon' />
                            <h5>Experience</h5>
                            <small>2+ Years</small>
                        </article>
                        <article className="about_card">
                            <SiMaterialdesignicons className='about_icon' />
                            <h5>Experience</h5>
                            <small>2+ Years</small>
                        </article>
                        <article className="about_card">
                            <SiMaterialdesignicons className='about_icon' />
                            <h5>Experience</h5>
                            <small>2+ Years</small>
                        </article>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quam incidunt iusto soluta error labore ad distinctio, expedita natus eaque. Ut sint nisi reiciendis expedita!</p>
                    <a href="#contact" className='btn btn-primary'>Get In Touch</a>

                </div>
            </div>
        </section>
    )
}

export default About