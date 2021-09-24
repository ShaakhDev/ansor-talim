import React from 'react';
import NewsCard from '../components/NewsCard'
import NewsImg1 from '../assets/images1x/news1.webp'
import NewsImg2 from '../assets/images1x/news2.webp'
import NewsImg3 from '../assets/images1x/news3.webp'
import './News.css'

export default function Courses() {


    const CardRow = () => {
        return (
            <div className="card__row">
                <NewsCard img={NewsImg1} />
                <NewsCard img={NewsImg2} />
                <NewsCard img={NewsImg3} />
            </div>
        )
    }


    return (
        <section id="news" className="news">
            <div className="news__box">
                <div className="news__box-heading">
                    <h2>Yangiliklar</h2>
                    <h5><a style={{ color: "#043353" }} href="#">Barcha yangiliklar</a></h5>
                </div>
                <CardRow />
            </div>
        </section>
    )
}