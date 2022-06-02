import React from 'react'
import "./experience.css"
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaBootstrap, FaPython, FaLinux } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiJavascript, SiCplusplus } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Web Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHtml5 className='experience_details_icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaCss3Alt className='experience_details_icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiJavascript className='experience_details_icon' />
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaReact className='experience_details_icon' />
                            <div>
                                <h4>React Js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <DiMongodb className='experience_details_icon' />
                            <div>
                                <h4>MONGODB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaBootstrap className='experience_details_icon' />
                            <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Coding</h3><div className="experience_content">
                        <article className='experience_details'>
                            <FaJava className='experience_details_icon' />
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiCplusplus className='experience_details_icon' />
                            <div>
                                <h4>C++</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaPython className='experience_details_icon' />
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaLinux className='experience_details_icon' />
                            <div>
                                <h4>LINUX</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsGithub className='experience_details_icon' />
                            <div>
                                <h4>GITHUB</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>



                    </div>

                </div>

            </div>
        </section>
    )
}

export default Experience