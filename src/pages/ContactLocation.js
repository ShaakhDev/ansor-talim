import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaTelegram, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { YMaps, Map } from 'react-yandex-maps'
import './css/ContactLocation.css'

export default function ContactLocation() {

    const MapLocation = () => {
        return (
            <YMaps width="100%" height="100%">
                <Map
                    style={window.screen.width < 480 ? { width: '100%', height: '100%' } : { width: '100', height: '100%' }}
                    defaultState={{ center: [41.29114, 69.25800], zoom: 14 }}
                />
            </YMaps>
        )
    }

    return (
        <section className="contact-location" id="contact-location">
            <div className="contact-location__box box">
                <div className="contact-location__text-content">
                    <div className="contact-location__heading">
                        <h2>Biz bilan bog'lanish</h2>
                    </div>
                    <p><span><FiMapPin /></span> Toshkent shahri, Yunusobod tumani Shota Rustaveli ko'chasi, 23-a uy</p>
                    <p><span><FiPhone /></span> +998 90 123 45 67</p>
                    <p><span><FiMail /></span> ansortalim@gmail.com</p>
                    <p className="socials">Bizning ijtimoiy tarmoqlar</p>
                    <a href="https://telegram.org"><FaTelegram /></a>
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://instagram.com"><AiFillInstagram /></a>
                </div>
            </div>
            <div className="contact-location__map">
                <MapLocation />
            </div>
        </section>
    )
}