import React, { useState } from "react";
import { CoursesData } from "../services/FetchData";
import './Courses.css'

export default function Courses() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const Card = () => {
        return CoursesData.slice(0, click ? 6 : 3).map(item => {
            return (
                <div key={item.id} className="card">
                    <div className="card__img">
                        <img src={item.img} alt="card-img" />
                    </div>
                    <div className="card__content">
                        <h3 className="card__course-name">{item.course}</h3>
                        <div className="card__tutor">
                            <img src={item.tutorImg} alt="tutor-img" />
                            <p className="tutor__name">{item.tutor}</p>
                        </div>
                        <p className="card__title">{item.title}</p>
                        <h5 className="price">{item.price} </h5>

                        <Button value={"Sotib olish"} />

                    </div>
                </div>
            )
        })
    }


    const Button = ({ value }) => {
        return (
            <button className="button">{value}</button>
        )
    }


    return (
        <section className="courses" id="courses">
            <div className="courses__box">
                <div className="courses__box-heading">
                    <h2>Kurslar</h2>
                    <h5><span onClick={handleClick} >Barcha kurslar</span></h5>
                </div>
                <div className="courses__card-row">
                    <Card />
                </div>
            </div>
        </section>
    )
}