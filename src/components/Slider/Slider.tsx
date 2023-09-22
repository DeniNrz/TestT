import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import Image from '../../img/IMG.JPG'

import './Slider.css'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export const Slider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>

      <Swiper
        className="mySwiper"
        spaceBetween={10}
       
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide>
          <img src={Image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="img" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper || ''}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={Image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} alt="img" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}