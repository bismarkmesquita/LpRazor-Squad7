import React from "react";
import Leo from '../../../../assets/images/leo.jpg';

const CardLeo = () => {
    return (
        <div class="perfil_container">
            <div class="testimonial mySwiper">
                <div class="testi-content swiper-wrapper">
                    <div class="slide swiper-slide">
                        <div class="card-perfil">
                            <div class="imgBx">
                                <img src={Leo} alt="Leonardo Colares"></img>
                            </div>
                            <div class="content">
                                <div class="details">
                                    <h2>Leonardo S.Colares<br></br><span>Designer</span></h2>
                                    <div class="data">
                                        <h3>17<br></br><span>Anos</span></h3>
                                        <h3>Rio Grande<br></br><span>RS</span></h3>
                                        <h3>6 meses<br></br><span>#Futurista</span></h3>
                                    </div>
                                    <div class="actionBtn">
                                        <a href="https://www.instagram.com/leonn.x2/"><i class='bx bxl-instagram-alt'></i></a>
                                        <a href="https://mobile.twitter.com/LeonzinnX2"><i class='bx bxl-twitter'></i></a>
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

export default CardLeo;