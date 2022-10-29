import React from "react";
import '../../assets/css/sections/Frase.css'
import Ilustração from '../../assets/images/ilustração.png';

const Frase = () => {
    return (
        <section class="frase">
            <div class="container">
                <div class="frase-content">
                    <img src={Ilustração} alt="Ilustração de Tela de Computador"></img>
                    <p>A imaginação, muitas vezes, conduz-nos a mundos a que nunca fomos. Sem ela, não vamos a nenhum lugar. <br></br><br></br> - Carl Sagan</p>
                </div>
            </div>
        </section>
    )
}

export default Frase;