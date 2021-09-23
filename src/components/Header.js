import React, { useState } from 'react';
import './Header.css'
import Logo from '../assets/images1x/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'



export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <div className="header">
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
                        <li className="nav__link"><a href="#">Yangiliklar</a></li>
                        <li className="nav__link"><a href="#">Kuslar</a></li>
                        <li className="nav__link"><a href="#">Ustozlar</a></li>
                        <li className="nav__link"><a href="#">Izohlar</a></li>
                        <li className="nav__link"><a href="#">Darslardan lavhalar</a></li>
                        <li className="nav__link"><a href="#">Aloqa</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}