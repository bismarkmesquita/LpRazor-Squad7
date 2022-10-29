import React from "react";
import '../../assets/css/sections/Oferta.css'
import Hard from '../../assets/images/hard.png';
import Talent from '../../assets/images/talent.png';
import TalentLogo from '../../assets/images/talent-logo.svg';
import VeryHard from '../../assets/images/veryhard.png';
import Edge from '../../assets/images/edge.png';
import EdgeLogo from '../../assets/images/edge-logo.svg';
import Supremo from '../../assets/images/supremo.png';
import Virtuos from '../../assets/images/virtuos.png';
import VirtuosLogo from '../../assets/images/virtuos-logo.svg';

const Oferta = () => {
    return (
        <section class="oferta" id="modelos">
            <div class="container">
                <div class="oferta-content-01">
                    <h2>Modelo recomendados</h2>
                </div>
                <div class="oferta-content-02">
                    <div class="oferta-box">
                        <img src={Hard} alt="hard"></img>
                        <img src={Talent} alt="Computador Talent" id="computador"></img>
                        <img src={TalentLogo} alt="Talent" class="computador-logo"></img>
                        <a href="#">Conhecer</a>
                    </div>
                    <div class="oferta-box">
                        <img src={VeryHard} alt="very hard"></img>
                        <img src={Edge} alt="Computador Edge" id="computador"></img>
                        <img src={EdgeLogo} alt="Edge" class="computador-logo" id="edge"></img>
                        <a href="#">Conhecer</a>
                    </div>
                    <div class="oferta-box">
                        <img src={Supremo} alt="supremo"></img>
                        <img src={Virtuos} alt="Computador Virtuos" id="computador"></img>
                        <img src={VirtuosLogo} alt="Virtuos" class="computador-logo"></img>
                        <a href="#">Conhecer</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Oferta;