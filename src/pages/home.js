import React from 'react';
import './Home.css'
import HomeImg from '../assets/images1x/home-img.webp'
export default function Home() {
    const Button = ({ home }) => {
        return (
            <button className="button">{home}</button>
        )
    }
    return (
        <section id="home" className="home">
            <div className="home__box">
                <div className="home__box_text-content">
                    <h1>Abituriyenlikdan studentlik tomon</h1>
                    <p>Uyda qoling, online ta'lim oling. At massa at dictumst odio sapien tortor auctor sollicitudin. </p>
                    <div className="div">
                        <Button home="Kursga a'zo bo'lish" />
                    </div>
                </div>
                <div className="home__box_img">
                    <img src={HomeImg} alt="home-img" />
                </div>
            </div>
        </section>
    )
}