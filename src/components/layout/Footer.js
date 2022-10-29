import React from "react";
import '../../assets/css/layout/Footer.css'
import '../../assets/css/elements/ScrollTopo.css'
import Logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <h2>Squad 7 - <a href="https://www.instagram.com/teufuturo__/">#TeuFuturo</a></h2>
                <img src={Logo} alt="Logo Razor"></img>
            </div>
        </div>

        <div data-scroll="suave" data-anima="scroll" class="scroll-topo">
            <a href="#header">
                <div class="topo">
                    <i class='bx bxs-up-arrow-circle' alt="voltar ao topo"></i>
                </div>
            </a>
        </div>
    </footer>
    )
}

export default Footer;