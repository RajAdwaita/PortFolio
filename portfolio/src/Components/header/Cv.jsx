import React from 'react'
import cv from "../../assets/cv.pdf"
const Cv = () => {
    return (
        <div className="cv">
            <a href={cv} download className='btn'>DOWNLOAD CV</a>
            <a href="#contact" className='btn btn-primary'>Get In Touch</a>
        </div>
    )
}

export default Cv