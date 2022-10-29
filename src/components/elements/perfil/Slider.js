// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import '../../../assets/css/sections/Perfil.css';

// import imagens de perfil
import Bismark from '../../../assets/images/bismark.jpg';
import Julia from '../../../assets/images/julia.jpg';
import Ana from '../../../assets/images/ana.jpg';
import Leo from '../../../assets/images/leo.jpg';

import Card from './cards/Card';

// icones de redes sociais
let LinkedIn = 'bx bxl-linkedin';
let GitHub = 'bx bxl-github';
let Instagram = 'bx bxl-instagram-alt';
let Twitter = 'bx bxl-twitter';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Card 
                    foto= {Bismark}
                    nome = "Bismark Mesquita"
                    função = "Developer/Designer"
                    idade = "20"
                    cidade = "Fortaleza"
                    estado = "CE"
                    tempo = "7 meses"
                    link1 = "https://github.com/bismarkmesquita"
                    icone1 = {GitHub}
                    link2 = "https://www.linkedin.com/in/bismarkmesquita/"
                    icone2 = {LinkedIn}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Card 
                    foto= {Julia}
                    nome = "Julia Braccini"
                    função = "Designer"
                    idade = "18"
                    cidade = "Passo Fundo"
                    estado = "RS"
                    tempo = "3 meses"
                    link1 = "https://www.instagram.com/jubraccini/?igshid=YmMyMTA2M2Y%3D"
                    icone1 = {Instagram}
                    link2 = "https://twitter.com/bracciini"
                    icone2 = {Twitter}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Card 
                    foto= {Ana}
                    nome = "Ana Rodrigues"
                    função = "Presenter"
                    idade = "18"
                    cidade = "Santa Maria"
                    estado = "RS"
                    tempo = "7 meses"
                    link1 = "https://github.com/NahPR"
                    icone1 = {GitHub}
                    link2 = "https://www.linkedin.com/in/ana-paula-ribas-rodrigues-64b46723a/"
                    icone2 = {LinkedIn}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Card 
                    foto= {Leo}
                    nome = "Leonardo S.Colares"
                    função = "Designer"
                    idade = "17"
                    cidade = "Rio Grande"
                    estado = "RS"
                    tempo = "7 meses"
                    link1 = "https://www.instagram.com/leonn.x2/"
                    icone1 = {Instagram}
                    link2 = "https://mobile.twitter.com/LeonzinnX2"
                    icone2 = {Twitter}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;