import React from 'react';
import './Footer.css'
import Logo from '../assets/images1x/logo.png'
export default function Footer() {
    return (
        <section className="footer">
            <div className="footer__box">
                <div className="footer__brand-box">

                    <a className="footer__logo" href="#home">
                        <div className="footer__logo-img">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="footer__logo-brand">
                            <p><span>ANSOR</span> <br /> TA'LIM</p>
                        </div>
                    </a>
                    <p >Dolor viverra in id bibendum
                        sollicitudin viverra quam enim. Id lacus,
                        dolor, turpis</p>
                </div>
                <div className="footer__links">
                    <ul>
                        <li><a href="#news">Yangiliklar</a></li>
                        <li><a href="#courses">Kurslar</a></li>
                        <li><a href="#teachers">Ustozlar</a></li>
                    </ul>
                </div>
                <div className="footer__links">
                    <ul>
                        <li><a href="#comments">Izohlar</a></li>
                        <li><a href="#gallery">Darslardan lavhalar</a></li>
                        <li><a href="#contact">Aloqa</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}