import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import { useState } from 'react';

const Slider = () => {
    // const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <div>
            <Swiper
                navigation={true}
                pagination={
                    { clickable: true }
                }

                modules={[Navigation, Autoplay, Pagination]}
                // controller={{ control: controlledSwiper }}
                loop={true}
                autoplay={
                    { delay: 3000 }
                }
            >
                <SwiperSlide>Slide 1</SwiperSlide>

                <SwiperSlide>Slide 2</SwiperSlide>

                <SwiperSlide>Slide 3</SwiperSlide>

                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;