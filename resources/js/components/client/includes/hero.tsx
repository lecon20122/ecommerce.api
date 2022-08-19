import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import HeroCoursel from '../shards/heroCoursel';

export default function Hero() {


  return (
    <div>
      <section className="py-5">
        <div className="mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-5 mx-auto">
            <Swiper  pagination={true} modules={[Navigation, Pagination]} className="md:col-span-4 w-[470px] lg:w-[1500px]" loop={true}>
              <SwiperSlide>
                <HeroCoursel />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCoursel />
              </SwiperSlide>
              <SwiperSlide>
                <HeroCoursel />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}
