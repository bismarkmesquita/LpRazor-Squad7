import React from 'react';
import '../../assets/css/sections/Perfil.css'

import Slider from '../elements/perfil/Slider';

const Perfil = () => {
    return (
        <section class="perfil" id="squad7">
            <div class="container">
                <div class="perfil_titulo">
                    <h2 class="home_titulo">The Last of Seven</h2>
                </div>

                <Slider />
            </div>
        </section>
    )
}

export default Perfil;