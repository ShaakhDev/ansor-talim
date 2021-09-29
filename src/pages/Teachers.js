import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { TeachersData } from '../services/FetchData';
import "swiper/swiper-bundle.min.css";
import "./css/Teachers.css";

export default function Teachers() {
    SwiperCore.use([Autoplay, Pagination]);

    return (
        <section className="teachers" id="teachers">
            <div className="teachers__box box">
                <div className="teachers__box-heading">
                    <h2>Ustozlar</h2>
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
                    spaceBetween={20}
                    autoplay={{
                        "delay": 4500,
                        "disableOnInteraction": true
                    }}
                    pagination={{

                        "clickable": true
                    }}
                    className="mySwiper"
                >
                    {
                        TeachersData.map(item => {
                            return (
                                <>
                                    <SwiperSlide>

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
