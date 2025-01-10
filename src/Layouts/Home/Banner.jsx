
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-[70vh] object-cover object-bottom md:rounded-3xl"
      >
        <SwiperSlide>
            <img
            src="https://i.ibb.co.com/vcTsJm4/freepik-upload-7806.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https://i.ibb.co.com/V2XgRxN/8625265-2525.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https://i.ibb.co.com/vqdryXs/freepik-upload-7713.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https://i.ibb.co.com/Q83yQWF/7378404-31961.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https://i.ibb.co.com/BfckCfZ/freepik-upload-85821.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img
            src="https://i.ibb.co.com/9cRx9dJ/1260324-156379-OV3-AB8-679.jpg" alt="" />
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Banner;