import React from 'react';
import HomeImg from '../assets/images1x/home-img.webp';
import Button from '../components/Button'



export default function Home() {





    return (
        <section className="home" id="home">
            <div className="home__text-content">
                <h1>Abituriyentlikdan studentlik tomon</h1>
                <p>Uyda qoling, online ta'lim oling. At massa at dictumst odio sapien tortor auctor sollicitudin.</p>
                <Button home={"Kursga a'zo bo'ling"}></Button>
            </div>
            <div className="home__img">
                <picture>
                    <img src={HomeImg} alt="home" />
                </picture>
            </div>
        </section>
    )
}
