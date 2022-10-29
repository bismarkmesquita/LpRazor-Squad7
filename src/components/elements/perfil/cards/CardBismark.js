import React from "react";
import Bismark from '../../../../assets/images/bismark.jpg';

const CardBismark = () => {
    return (
        <div class="perfil_container">
            <div class="testimonial mySwiper">
                <div class="testi-content swiper-wrapper">
                    <div class="slide swiper-slide">
                        <div class="card-perfil">
                            <div class="imgBx">
                                <img src={Bismark} alt="Bismark"></img>
                            </div>
                            <div class="content">
                                <div class="details">
                                    <h2>Bismark Mesquita<br></br><span>Developer/Designer</span></h2>
                                    <div class="data">
                                        <h3>20<br></br><span>Anos</span></h3>
                                        <h3>Fortaleza<br></br><span>CE</span></h3>
                                        <h3>6 meses<br></br><span>#Futurista</span></h3>
                                    </div>
                                    <div class="actionBtn">
                                        <a href="https://github.com/bismarkmesquita"><i class='bx bxl-github'></i></a>
                                        <a href="https://www.linkedin.com/in/bismarkmesquita/"><i class='bx bxl-linkedin'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBismark;