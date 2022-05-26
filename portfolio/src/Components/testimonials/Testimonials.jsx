import React from 'react'
import './testimonials.css'
import img1 from '../../assets/avatar1.jpg'
import img2 from '../../assets/avatar2.jpg'
import img3 from '../../assets/avatar3.jpg'
import img4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: img1,
        name: 'Adwaita',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam earum. Possimus, numquam animi sequi rerum reiciendis vel placeat itaque.'
    },
    {
        avatar: img2,
        name: 'Adwaita',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam earum. Possimus, numquam animi sequi rerum reiciendis vel placeat itaque.'
    },
    {
        avatar: img3,
        name: 'Adwaita',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam earum. Possimus, numquam animi sequi rerum reiciendis vel placeat itaque.'
    },
    {
        avatar: img4,
        name: 'Adwaita',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, magnam earum. Possimus, numquam animi sequi rerum reiciendis vel placeat itaque.'
    }
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Adwaita</h5>
            <h2>Modak</h2>
            <Swiper className="container testimonials_container"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide className="testimonial" key={index}>
                                <div className="client_avatar">
                                    <img src={avatar} alt="" />

                                </div>
                                <h5 className="client_name">{name}</h5>
                                <small className="client_review">{review}</small>

                            </SwiperSlide>)
                    })
                }

            </Swiper>
        </section >
    )
}

export default Testimonials