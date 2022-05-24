import React from 'react'
import "./experience.css"
import { FaReact } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skills</h5>
            <h2>Experience</h2>

            <div className="container container_experience">
                <div className="experience_frontend">
                    <h3>FroneEnd Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaReact />
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <FaReact />
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <FaReact />
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <FaReact />
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <FaReact />
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>

                    </div>
                    <div className="experience_backend">
                        <h3>BackEnd Development</h3><div className="experience_content">
                            <article className='experience_details'>
                                <DiMongodb />
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </article>
                            <article className='experience_details'>
                                <DiMongodb />
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </article>
                            <article className='experience_details'>
                                <DiMongodb />
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </article>
                            <article className='experience_details'>
                                <DiMongodb />
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </article>
                            <article className='experience_details'>
                                <DiMongodb />
                                <h4>MongoDb</h4>
                                <small className='text-light'>Noob</small>
                            </article>



                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience