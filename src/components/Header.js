import React, { useState } from 'react';
import Logo from '../assets/images1x/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import './css/Header.css'


export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <div className="header box">
            <nav className="navbar">
                <a className="navbar__logo" href="#home">
                    <div className="navbar__logo-img">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="navbar__logo-brand">
                        <p><span>ANSOR</span> <br /> TA'LIM</p>
                    </div>
                </a>
                <div onClick={handleClick} className="navbar__menu-icon">
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <div className="navbar__nav ">
                    <ul className={click ? "navbar__nav-items active" : "navbar__nav-items"}>
                        <li className="nav__link"><a href="#news">Yangiliklar</a></li>
                        <li className="nav__link"><a href="#courses">Kurslar</a></li>
                        <li className="nav__link"><a href="#teachers">Ustozlar</a></li>
                        <li className="nav__link"><a href="#comments">Izohlar</a></li>
                        <li className="nav__link"><a href="#gallery">Darslardan lavhalar</a></li>
                        <li className="nav__link"><a href="#contact">Aloqa</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}