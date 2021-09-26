import React from 'react';
import { GalleryItems } from '../services/FetchData'
import { AiOutlineZoomIn } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import './Gallery.css'
export default function Gallery() {
    SwiperCore.use([Autoplay, Pagination, Navigation])

    const GalleryItem = () => {
        return GalleryItems.map(item => {
            return (
                <div key={item.id} className="gallery__item-wrapper">
                    <div className="gallery__item-overlay">
                        <AiOutlineZoomIn />
                    </div>
                    <img src={item.img1x} alt="item" />
                </div>
            )
        })
    }


    const GalleryRow = () => {
        return (
            <div className="gallery__row">
                <GalleryItem />
            </div>
        )
    }

    return (
        <section className="gallery" id="gallery" >
            <div className="gallery__box">
                <div className="gallery__box-heading">
                    <h2>Darslardan lavhalar</h2>
                </div>
                <Swiper spaceBetween={30} autoplay={{
                    "delay": 4500,
                    "disableOnInteraction": true
                }} pagination={{

                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide><GalleryRow /></SwiperSlide>
                    <SwiperSlide><GalleryRow /></SwiperSlide>
                    <SwiperSlide><GalleryRow /></SwiperSlide>
                    <SwiperSlide><GalleryRow /></SwiperSlide>
                    <SwiperSlide><GalleryRow /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}