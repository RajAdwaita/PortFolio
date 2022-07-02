import React from 'react'
import "./contact.css"
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
const Contact = () => {
    return (
        <section id='contact'>
            <h5>Contact</h5>
            <h2>Modak</h2>

            <div className="container contact_container ">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option_icon' />
                        <h4>Email</h4>
                        <h5>adwaitaraj@gmail.com</h5>
                        <a href="mailto:adwaitaraj@gmail.com" target="_blank">Send Mail</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option_icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91-9330554877</h5>
                        <a href="mailto:adwaitaraj@gmail.com" target="_blank">Send Mail</a>
                    </article>
                    <article className="contact_option">
                        <BsLinkedin className='contact_option_icon' />
                        <h4>LinkedIn</h4>
                        <h5>Adwaita</h5>
                        <a href="https://www.linkedin.com/in/adwaita-raj-modak-5b435a203/" target="_blank">Send Mail</a>
                    </article>

                </div>

                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" id="" rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact