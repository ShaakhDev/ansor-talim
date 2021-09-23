import React from 'react';
import Logo from '../assets/images1x/logo.png';
import Logo2x from '../assets/images2x/logo@2x.png';


export default function Header() {


    const Navbar = () => {
        return (
            <div className="navbar">
                <a href="#home">
                    <div className="navbar__brand">
                        <picture>
                            {/* <source type="image/png" media="(max-width:600px)" srcSet={Logo2x} /> */}
                            <img src={Logo} alt="logo" />
                        </picture>
                        <div>
                            <p><span> ANSOR</span><br />TA'LIM </p>
                        </div>
                    </div>
                </a>
                <div className="navbar__nav">
                    <ul>
                        <li><a href="#">Yangiliklar</a></li>
                        <li><a href="#">Kurslar</a></li>
                        <li><a href="#">Ustozlar</a></li>
                        <li><a href="#">Izohlar</a></li>
                        <li><a href="#">Darslardan lavhalar</a></li>
                        <li><a href="#">Aloqa</a></li>
                    </ul>
                </div>
            </div>
        )
    }



    return (
        <div className="header">
            <Navbar />
        </div>
    )

}