import React from "react";
import '../../assets/css/sections/Destaque.css'

const Destaque = () => {
    return (
        <section class="destaque" id="destaque">
            <div class="container">
                <div class="destaque-titulo">
                    <h2>Destaque Supremo</h2>
                    <p>Veja a aprovação de quem entende do assunto.</p>
                </div>
                <div class="destaque-content-02">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1e5fx9LWH7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}

export default Destaque;