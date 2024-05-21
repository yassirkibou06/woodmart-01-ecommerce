"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import 'swiper/css';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css/navigation';

const PopularCategory = () => {
    const data = [
        {
            id: 1,
            img: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/Laptops-1.jpg",
            number: "5 Products",
            name: "Apple MacBook",
        },
        {
            id: 2,
            img: "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/Gaming-Laptop.jpg",
            number: "8 Products",
            name: "Gaming Laptop",
        },
        {
            id: 3,
            img: "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/Apple-Ipad.jpg",
            number: "7 Products",
            name: "Apple Ipad",
        },
        {
            id: 4,
            img: "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/2k.jpg",
            number: "5 Products",
            name: "2k Monitors",
        },
        {
            id: 5,
            img: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/mobile-phones-apple-iphone.jpg",
            number: "7 Products",
            name: "Apple IPhone",
        },
        {
            id: 6,
            img: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/headsets.jpg",
            number: "9 Products",
            name: "Headsets",
        },
    ];

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiperChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className="relative">
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                breakpoints={{
                    430: {
                        slidesPerView: 2
                    },
                    1020: {
                        slidesPerView: 6
                    }
                }}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-btn-next',
                    prevEl: '.swiper-btn-prev',
                }}
                onSlideChange={handleSwiperChange}
                onInit={handleSwiperChange}  // Ensure buttons' state is set on initialization
                className="swiper w-[430px] lg:w-[1240px] relative"
            >
                {/**card just example */}
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="card w-[150px] mt-6">
                        <motion.div className="" onhovertransition={{ duration: 0.4 }} whileHover={{ scale: 1.1 }} >
                            <img className="rounded-lg w-[150px] h-[150px]" src={item.img} alt="" />
                        </motion.div>
                        <h3 className="font-medium mt-2">{item.name}</h3>
                        <p className="text-gray-500">{item.number}</p>
                    </SwiperSlide>
                ))}
            </Swiper >
            <div className={`swiper-btn-prev cursor-pointer z-50 text-gray-500 absolute top-24 left-0 visible lg:invisible ${isBeginning ? 'opacity-20' : ''}`}>
                <BiChevronLeft size={35} />
            </div>
            <div className={`swiper-btn-next cursor-pointer z-50 text-gray-500 absolute top-24 right-0 visible lg:invisible ${isEnd ? 'opacity-20' : ''}`}>
                <BiChevronRight size={35} />
            </div>
        </div >
    )
}

export default PopularCategory;
