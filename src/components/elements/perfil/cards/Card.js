import React from "react";



const Card = ({foto, nome, função, idade, cidade, estado, tempo, link1, icone1, link2, icone2}) => {
    return (
        <div class="perfil_container">
            <div class="testimonial mySwiper">
                <div class="testi-content swiper-wrapper">
                    <div class="slide swiper-slide">
                        <div class="card-perfil">
                            <div class="imgBx">
                                <img src={foto} alt={nome}></img>
                            </div>
                            <div class="content">
                                <div class="details">
                                    <h2>{nome}<br></br><span>{função}</span></h2>
                                    <div class="data">
                                        <h3>{idade}<br></br><span>Anos</span></h3>
                                        <h3>{cidade}<br></br><span>{estado}</span></h3>
                                        <h3>{tempo}<br></br><span>#Futurista</span></h3>
                                    </div>
                                    <div class="actionBtn">
                                        <a href={link1}><i class={icone1}></i></a>
                                        <a href={link2}><i class={icone2}></i></a>
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

export default Card;