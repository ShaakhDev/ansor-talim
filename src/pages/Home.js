import React from 'react';
import HomeImg from '../assets/images1x/home-img.webp'
import './css/Home.css'

export default function Home() {

    return (
        <section id="home" className="home">
            <div className="home__box box">
                <div className="home__box_text-content">
                    <h1 className="ps">Abituriyentlikdan studentlik tomon</h1>
                    <p>Uyda qoling, online ta'lim oling. At massa at dictumst odio sapien tortor auctor sollicitudin. </p>
                    <div className="home__button">
                        <button className="button">Kursga a'zo bo'lish</button>
                    </div>
                </div>
                {window.screen.width < 711 ? "" : (

                    <div className="home__box_img">
                        <img src={HomeImg} alt="home-img" />
                    </div>
                )}
            </div>
            <div className="overlay"></div>
        </section>
    )
}