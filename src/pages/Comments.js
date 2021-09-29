import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { CommentsData } from '../services/FetchData'
import "swiper/swiper-bundle.min.css";
import './css/Comments.css'


export default function Comments() {
    SwiperCore.use([Autoplay, Pagination])

    return (
        <section className="comments" id="comments">
            <div className="comments__box box">
                <div className="comments__box-heading">
                    <h2>Izohlar</h2>
                </div>
                <Swiper
                    breakpoints={{
                        "799": {
                            slidesPerView: 3
                        },
                        "520": {
                            slidesPerView: 2
                        }
                    }}
                    loop={true}
                    spaceBetween={30}
                    autoplay={{
                        "delay": 4500,
                        "disableOnInteraction": true
                    }} pagination={{
                        "clickable": true
                    }}
                    navigation={true}
                    className="mySwiper"
                >
                    {CommentsData.map(item => {
                        return (
                            <>
                                <SwiperSlide>
                                    <div key={item.id} className="card" >
                                        <div className="ruler">
                                            <div className="card__tutor-img">
                                                <img src={item.img} alt="avatar" />
                                            </div>
                                        </div>
                                        <h4 className="tutor__name">{item.name} </h4>
                                        <p className="tutor__speciality">{item.speciality}</p>
                                        <p className="about__tutor">{item.comment}</p>
                                    </div >
                                </SwiperSlide>
                            </>
                        )
                    })
                    }
                </Swiper>
            </div>
        </section>
    )
}