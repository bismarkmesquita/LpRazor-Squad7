import React from "react";
import Ana from '../../../../assets/images/ana.jpg';

const CardAna = () => {
    return (
        <div class="perfil_container">
            <div class="testimonial mySwiper">
                <div class="testi-content swiper-wrapper">
                    <div class="slide swiper-slide">
                        <div class="card-perfil">
                            <div class="imgBx">
                                <img src={Ana} alt="Ana Rodrigues"></img>
                            </div>
                            <div class="content">
                                <div class="details">
                                    <h2>Ana Rodrigues<br></br><span>Presenter</span></h2>
                                    <div class="data">
                                        <h3>18<br></br><span>Anos</span></h3>
                                        <h3>Santa Maria<br></br><span>RS</span></h3>
                                        <h3>6 meses<br></br><span>#Futurista</span></h3>
                                    </div>
                                    <div class="actionBtn">
                                        <a href="https://github.com/NahPR"><i class='bx bxl-github'></i></a>
                                        <a href="https://www.linkedin.com/in/ana-paula-ribas-rodrigues-64b46723a/"><i class='bx bxl-linkedin'></i></a>
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

export default CardAna;