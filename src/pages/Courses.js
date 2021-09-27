import React, { useState } from "react";
import { CoursesData } from "../services/FetchData";
import { BsX } from 'react-icons/bs'
import './css/Courses.css'



export default function Courses() {
    const [isShownOtherCourses, setIsShownOtherCourses] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleBtnClick = () => {
        setIsOpenModal(true)
    }
    const handleClick = () => {
        setIsShownOtherCourses(!isShownOtherCourses)
    }


    const Card = () => {
        return CoursesData.slice(0, isShownOtherCourses ? 6 : 3).map(item => {
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

                        <button onClick={showModal} className="button">Sotib olish</button>

                    </div>
                </div>
            )
        })
    }

    function showModal() {
        document.body.style.overflow = 'hidden';
        document.getElementsByClassName('overlay')[0].style.display = 'flex'
        handleBtnClick()
    }
    function hideModal() {
        document.getElementsByClassName('modal__box')[0].classList.add('animate')
        document.body.style.overflow = 'visible';
        setTimeout(() => {
            document.getElementsByClassName('overlay')[0].style.display = 'none'
            setIsOpenModal(false)
        }, 250);
    }


    const Modal = () => {
        return (
            <div className={isOpenModal ? "modal__box" : "modal__box d-none"}>
                <BsX size={35} onClick={() => { hideModal() }} />
                <form action="#" method="post">
                    <label htmlFor="name">Ism va Familiyangizni kiriting: F.I.O.</label>
                    <input type="text" name="name" placeholder="Bu yerga yozing" />
                    <label htmlFor="mail">Telefon nomer yoki Emailingizni kiriting</label>
                    <input type="text" name="mail" placeholder="Bu yerga yozing" />
                    <button onClick={hideModal} type="submit" className="button"> Sotib olish</button>
                </form>
            </div>
        )
    }




    return (
        <section className="courses" id="courses">
            <div className="courses__box box">
                <div className="courses__box-heading">
                    <h2>Kurslar</h2>
                    <h5><span onClick={handleClick} >Barcha kurslar</span></h5>
                </div>
                <div className="courses__card-row">
                    <Card />
                </div>
            </div>
            <Modal />

        </section>
    )
}