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
                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/WyMYTGW/s1.jpg" alt="Your Image" className="w-full h-auto" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* text-[#1DD100] */}
                            <div className='lg:w-3/4 w-5/6'>
                                <p className=" text-cyan-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> Modern Living Spaces</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Experience the epitome of contemporary comfort with our modern living spaces. From sleek interiors to cutting-edge amenities, our residences redefine urban living.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/hszPPkj/s2.jpg" alt="Your Image" className="w-full h-auto" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6' >
                                <p className=" text-cyan-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> Charming Historic Homes</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Step back in time and embrace the charm of historic homes steeped in character and heritage. With timeless architecture and quaint neighborhoods, these homes offer a glimpse into the past while providing modern comforts for today's lifestyle. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/m0kkR7q/s3.jpg" alt="Your Image" className="w-full h-auto" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6'>
                                <p className=" text-cyan-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4">  Luxury High-Rise Living</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Elevate your lifestyle to new heights with our luxury high-rise residences. Indulge in breathtaking panoramic views and upscale amenities that cater to your every need. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative">
                        <img src="https://i.ibb.co/CQSvnRH/s44.jpg" alt="Your Image" className="w-full h-auto" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className='lg:w-3/4 w-5/6 '>
                                <p className=" text-cyan-600 lg:text-6xl md:text-4xl text-2xl font-extrabold flex justify-center items-center mb-4"> Serene Suburban Retreats</p>
                                <p className='text-center text-white font-bold lg:text-xl flex justify-center items-center mb-4'>Escape the hustle and bustle of the city and discover the tranquility of suburban living. Nestled amidst lush greenery and scenic landscapes, our suburban retreats offer a peaceful sanctuary to call home. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;