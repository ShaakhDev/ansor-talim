import React from 'react';
import { GalleryItems } from '../services/FetchData'
import { AiOutlineZoomIn } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Fancybox from "../components/Fancy";
import "swiper/swiper-bundle.min.css";
import './css/Gallery.css'

export default function Gallery() {
    SwiperCore.use([Autoplay, Pagination, Navigation])

    const GalleryItem = () => {
        return GalleryItems.slice(0, window.screen.width < 350 ? 4 : 6).map(item => {
            return (
                <Fancybox>
                    <div key={item.id} className="gallery__item-wrapper">
                        <a data-fancybox="gallery" href={item.img3x}>
                            <div className="gallery__item-overlay">
                                <AiOutlineZoomIn />
                            </div>
                        </a>
                        <img src={item.img1x} alt="item" />
                    </div>
                </Fancybox>
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
            <div className="gallery__box box">
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