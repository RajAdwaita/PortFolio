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

                </div>
            </div>
        </section>
    )
}

export default About