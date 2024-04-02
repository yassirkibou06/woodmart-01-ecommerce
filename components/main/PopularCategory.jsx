"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import {}

const PopularCategory = () => {
    return (
        <div>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    350: {
                        slidesPerView: 2
                    },
                    1020: {
                        slidesPerView: 6
                    }
                }}
                className="swiper w-[1240px] relative"
            >
                <div className="swiper-button-prev text-gray-500 absolute lg:hidden">
                    &lt;
                </div>
                <div className="swiper-button-next text-gray-500 absolute lg:hidden">
                    &gt;
                </div>
                {/**card 1 just example */}
                <SwiperSlide className="card w-[150px] mt-6">
                    <div>
                        <img className="rounded-lg w-[150px] h-[150px]" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/Laptops-1.jpg" alt="" />
                    </div>
                    <h3 className="font-medium mt-2">Apple MacBook</h3>
                    <p className="text-gray-500">5 Products</p>
                </SwiperSlide>
                {/**card 2 just example */}
                <SwiperSlide className="card w-[150px] mt-6">
                    <div>
                        <img className="rounded-lg w-[150px] h-[150px]" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/mobile-phones-apple-iphone.jpg" alt="" />
                    </div>
                    <h3 className="font-medium mt-2">Apple IPhone</h3>
                    <p className="text-gray-500">8 Products</p>
                </SwiperSlide>
                {/**card 3 just example */}
                <SwiperSlide className="card w-[150px] mt-6">
                    <div>
                        <img className="rounded-lg w-[150px] h-[150px]" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/headsets.jpg" alt="" />
                    </div>
                    <h3 className="font-medium mt-2">Headsets</h3>
                    <p className="text-gray-500">7 Products</p>
                </SwiperSlide>
                {/**card 4 just example */}
                <SwiperSlide className="card w-[150px] mt-6">
                    <div>
                        <img className="rounded-lg w-[150px] h-[150px]" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/Laptops-1.jpg" alt="" />
                    </div>
                    <h3 className="font-medium mt-2">Apple MacBook</h3>
                    <p className="text-gray-500">5 Products</p>
                </SwiperSlide>
                {/**card 5 just example */}
                <SwiperSlide className="card w-[150px] mt-6">
                    <div>
                        <img className="rounded-lg w-[150px] h-[150px]" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/mobile-phones-apple-iphone.jpg" alt="" />
                    </div>
                    <h3 className="font-medium mt-2">Apple IPhone</h3>
                    <p className="text-gray-500">8 Products</p>
                </SwiperSlide>
                {/**card 6 just example */}
                <SwiperSlide className="card w-[150px] mt-6">
                    <div>
                        <img className="rounded-lg w-[150px] h-[150px]" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/headsets.jpg" alt="" />
                    </div>
                    <h3 className="font-medium mt-2">Headsets</h3>
                    <p className="text-gray-500">7 Products</p>
                </SwiperSlide>
            </Swiper >
        </div >
    )
}

export default PopularCategory