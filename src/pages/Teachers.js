import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { TeachersData } from '../services/FetchData';
import "swiper/swiper-bundle.min.css";
import "./css/Teachers.css";

export default function Teachers() {
    SwiperCore.use([Autoplay, Pagination]);




    const Card = () => {
        return TeachersData.slice(0, window.screen.width < 769 ? (window.screen.width < 480 ? 1 : 2) : 3).map(item => {
            return (
                <div key={item.id} className="card"  >
                    <div className="ruler">

                        <div className="card__tutor-img">
                            <img src={item.img} alt="avatar" />
                        </div>
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
            <div className="teachers__box box">
                <div className="teachers__box-heading">
                    <h2>Ustozlar</h2>
                </div>
                <Swiper spaceBetween={30} autoplay={{
                    "delay": 4500,
                    "disableOnInteraction": true
                }} pagination={{

                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide><TeachersCardRow /></SwiperSlide>
                    <SwiperSlide><TeachersCardRow /></SwiperSlide>
                    <SwiperSlide><TeachersCardRow /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
