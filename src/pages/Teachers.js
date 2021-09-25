import React from 'react';
import './Teachers.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import "./Teachers.css";

import { TeachersData } from '../services/FetchData';


function Teachers() {
    SwiperCore.use([Autoplay, Pagination, Navigation]);

    const Card = () => {
        return TeachersData.map(item => {
            return (
                <div key={item.id} className="card" >
                    <div className="card__tutor-img">
                        <img src={item.img} alt="avatar" />
                    </div>
                    <h4 className="tutor__name">{item.name} </h4>
                    <p className="tutor__speciality">{item.speciality}</p>
                    <p className="about__tutor">{item.about}</p>
                </div >
            )
        })
    }

    const TeachersCardRow = () => {
        return (
            <div className="teachers__row">
                <Card />
            </div>
        )
    }

    return (
        <section className="teachers" id="teachers">
            <div className="teachers__box">
                <div className="teachers__box-heading">
                    <h2>Ustozlar</h2>
                </div>
                <Swiper spaceBetween={30} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{

                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide><TeachersCardRow /></SwiperSlide>
                    <SwiperSlide><TeachersCardRow /></SwiperSlide>
                    <SwiperSlide><TeachersCardRow /></SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default Teachers;