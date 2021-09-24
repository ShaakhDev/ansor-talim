import React from 'react';
import './NewsCard.css'

const NewsCard = ({ img }) => {
    return (
        <div className="card">
            <div className="card__img">
                <div className="card__img-overlay">
                    <p >12/06/2021</p>
                    <p>Dasturchilik orqali million?</p>
                </div>
                <img src={img} alt="card-img" />
            </div>
            <p>Dasturchilik olamiga ilk kirib kelgan paytim 16 yosh bo'lganman va men...</p>
        </div>
    )
}

export default NewsCard;