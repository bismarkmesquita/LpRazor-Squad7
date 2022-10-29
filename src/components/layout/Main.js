import React from "react";
import Cta from '../sections/Cta.js'
import Oferta from "../sections/Oferta.js";
import Destaque from "../sections/Destaque.js";
import Perfil from "../sections/Perfil.js";
import Frase from "../sections/Frase.js";

const Main = () => {
    return (
        <main>
            <Cta />
            <Oferta />
            <Destaque />
            <Perfil />
            <Frase />
        </main>
    )
}

export default Main;