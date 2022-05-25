import React from 'react'
import "./experience.css"
import { FaReact } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>FroneEnd Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaReact className='experience_details_icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaReact className='experience_details_icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaReact className='experience_details_icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaReact className='experience_details_icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaReact className='experience_details_icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>
                <div className="experience_backend">
                    <h3>BackEnd Development</h3><div className="experience_content">
                        <article className='experience_details'>
                            <DiMongodb className='experience_details_icon' />
                            <div>
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <DiMongodb className='experience_details_icon' />
                            <div>
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <DiMongodb className='experience_details_icon' />
                            <div>
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <DiMongodb className='experience_details_icon' />
                            <div>
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <DiMongodb className='experience_details_icon' />
                            <div>
                                <h4>MongoDb</h4>
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