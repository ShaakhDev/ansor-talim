import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import "swiper/swiper-bundle.min.css";
import './css/Comments.css'


import { CommentsData } from '../services/FetchData'


export default function Comments() {
    SwiperCore.use([Autoplay, Pagination, Navigation])

    const Card = () => {
        return CommentsData.map(item => {
            return (
                <div key={item.id} className="card" >
                    <div className="card__tutor-img">
                        <img src={item.img} alt="avatar" />
                    </div>
                    <h4 className="tutor__name">{item.name} </h4>
                    <p className="tutor__speciality">{item.speciality}</p>
                    <p className="about__tutor">{item.comment}</p>
                </div >
            )
        })
    }


    const CommentCardRow = () => {
        return (
            <div className="comments__row">
                <Card />
            </div>
        )
    }

    return (
        <section className="comments" id="comments">
            <div className="comments__box box">
                <div className="comments__box-heading">
                    <h2>Izohlar</h2>
                </div>
                <Swiper spaceBetween={30} autoplay={{
                    "delay": 4500,
                    "disableOnInteraction": false
                }} pagination={{

                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide><CommentCardRow /></SwiperSlide>
                    <SwiperSlide><CommentCardRow /></SwiperSlide>
                    <SwiperSlide><CommentCardRow /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}