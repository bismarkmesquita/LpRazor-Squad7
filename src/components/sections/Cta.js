import React from "react";
import '../../assets/css/sections/Cta.css'

import Virtuos from '../../assets/images/virtuos.png';

const Cta = () => {
    return (
        <section class="cta" id="ilustrações">
            <div class="container">
                <div class="cta-titulo">
                    <h2>Ilustrações</h2>
                </div>
                <div class="cta-content">
                    <div class="cta-content-01">
                        <h2>Cresça no mercado com máquinas que acompanham a sua <b>criatividade</b>.</h2>
                        <p>Não limite suas ideias, trabalhe com máquinas de alta performance que não te deixam na mão. </p>
                        <a href="#">Encontre a sua</a>
                    </div>
                    <div class="cta-content-02">
                        

                        <div class="card">
                            <div class="circle"></div>
                            <div class="content">
                                <h2>Virtuos</h2>
                                <ul>
                                    <li><i class='bx bxs-chevrons-right'></i>Placa de vídeo de alta capacidade</li>
                                    <li><i class='bx bxs-chevrons-right'></i>Edição em alta resolução</li>
                                    <li><i class='bx bxs-chevrons-right'></i>Rápida leitura de dados</li>
                                    <li><i class='bx bxs-chevrons-right'></i>Maior velocidade por núcleo</li>
                                    <li><i class='bx bxs-chevrons-right'></i>Armazenagem rápida</li>
                                </ul>
                            </div>
                            <img src={Virtuos} alt="Computador Virtuos"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta;