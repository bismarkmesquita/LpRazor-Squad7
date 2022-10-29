import React from 'react';
import Logo from '../../assets/images/logo.png';
import '../../assets/css/layout/Header.css';
import '../../assets/css/sections/Banner.css';


const Header = () => {
    return (
        <header>
            <div className='container'>
                <img src={Logo} alt='Logo Razor'></img>
            </div>

            <section className="banner">
                <div class="container">
                    <div class="banner-content-01">
                        <h1>O que você quer produzir hoje?</h1>
                    </div>
                    <div class="banner-content-02">
                        <a href="#ilustrações">Ilustrações</a>
                        <a href="#modelos">Modelos</a>
                        <a href="#destaque">Destaque</a>
                        <a href="#squad7">Squad 7</a>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header;