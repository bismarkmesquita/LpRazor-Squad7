import React from "react";
import Julia from '../../../../assets/images/julia.jpg';

const CardJulia = () => {
    return (
        <div class="perfil_container">
            <div class="testimonial mySwiper">
                <div class="testi-content swiper-wrapper">
                    <div class="slide swiper-slide">
                        <div class="card-perfil">
                            <div class="imgBx">
                                <img src={Julia} alt="Julia Braccini"></img>
                            </div>
                            <div class="content">
                                <div class="details">
                                    <h2>Julia Braccini<br></br><span>Designer</span></h2>
                                    <div class="data">
                                        <h3>18<br></br><span>Anos</span></h3>
                                        <h3>Passo Fundo<br></br><span>RS</span></h3>
                                        <h3>2 meses<br></br><span>#Futurista</span></h3>
                                    </div>
                                    <div class="actionBtn">
                                        <a href="https://www.instagram.com/jubraccini/?igshid=YmMyMTA2M2Y%3D"><i class='bx bxl-instagram-alt'></i></a>
                                        <a href="https://twitter.com/bracciini"><i class='bx bxl-twitter'></i></a>
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

export default CardJulia;