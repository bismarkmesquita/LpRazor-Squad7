// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import '../../../assets/css/sections/Perfil.css';

import CardBismark from './cards/CardBismark';
import CardJulia from './cards/CardJulia';
import CardAna from './cards/CardAna';
import CardLeo from './cards/CardLeo';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide><CardBismark /></SwiperSlide>
            <SwiperSlide><CardJulia /></SwiperSlide>
            <SwiperSlide><CardAna /></SwiperSlide>
            <SwiperSlide><CardLeo /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;