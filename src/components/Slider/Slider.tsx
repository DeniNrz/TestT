import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import Image from '../img/IMG.JPG'

import './Slider.css'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

// eslint-disable-next-line @typescript-eslint/no-redeclare
type Swiper = any

export const Slider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>(null!)
  return (
    <div className='swiper-container'>
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
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
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
    </div>
  )
}
