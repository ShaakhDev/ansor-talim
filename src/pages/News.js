import React, { useState } from 'react';
import { CardData } from '../services/FetchData';
import './News.css'

export default function News() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }


    const Card = () => {
        return CardData.slice(0, click ? 6 : 3).map(item => {
            return (
                <div key={item.id} className="card">
                    <div className="card__img">
                        <a href="https://www.texnoman.uz/post/dasturlashni-organishdagi-8-ta-xato.html">
                            <div className="card__img-overlay">
                                <p >{item.date}</p>
                                <p>{item.title}</p>
                            </div>
                        </a>
                        <img src={item.img} alt="card-img" />
                    </div>
                    <p>{item.desc}</p>
                </div>
            )
        })
    }


    const CardRow = () => {
        return (
            <div className="card__row">
                <Card />
            </div>
        )
    }


    return (
        <section id="news" className="news">
            <div className="news__box">
                <div className="news__box-heading">
                    <h2>Yangiliklar</h2>
                    <h5><span onClick={handleClick} >Barcha yangiliklar</span></h5>
                </div>

                <CardRow />

            </div>
        </section>
    )
}