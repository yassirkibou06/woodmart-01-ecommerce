"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import CountdownTimer from '../CountdownTimer';

const MainContent = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-2 mb-4">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                }}
                className="bg-white z-0 w-full h-[470px] rounded-md m-0 relative" >
                <SwiperSlide className="text-center">
                    <img className="absolute z-[-1] object-cover h-full" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-shopping-event.jpg" alt="" />
                    <h2 className="text-white mt-10 font-bold text-4xl tracking-wider">Apple Shopping Event</h2>
                    <p className="text-[15px] text-gray-300 tracking-wide mt-4">Shop great deals on MacBook, iPad, iPhone and more.</p>
                    <Button className="hover:bg-primary/90 mt-5 text-white">Shopw now</Button>
                </SwiperSlide>
                {/** => //// => space */}
                <SwiperSlide >
                    <img className="absolute z-[-1] object-cover h-full" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/pre-order-g-pixel-7.jpg" alt="" />
                    <h2 className="text-white mt-10 font-bold text-4xl tracking-wider pl-5">The new Google Pixel 7</h2>
                    <p className="text-[15px] text-gray-300 tracking-wide mt-4 pl-5">Shop great deals on MacBook, iPad, iPhone and more.</p>
                    <Button className="hover:bg-primary/90 mt-5 text-white ml-5">Pre-Order Now</Button>
                </SwiperSlide>
                {/** => //// => pagination */}
                <div className="custom-pagination-container">
                    <div className="custom-pagination"></div>
                </div>
            </Swiper>
            {/** => ////////// */}
            <div className="pr-4">
                <div className="w-full h-[250px] bg-[#f0d7da] rounded-lg relative z-0 cursor-pointer overflow-hidden">
                    <motion.div className="absolute z-[-1] h-full overflow-hidden" transition={{ duration: 0.4 }} whileHover={{ scale: 1.1 }}>
                        <img className="object-cover w-full h-full rounded-lg" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2023/02/logitech-aurora-headset.jpg" alt="" />
                    </motion.div>
                    <h2 className="text-white mt-10 font-bold text-3xl tracking-wider pl-5">Aurora Headset</h2>
                    <CountdownTimer />
                    <Button className="hover:bg-primary/90 text-white ml-5 py-3">Buy Now</Button>
                </div>
                {/** => ////////// */}
                <div className="flex flex-col lg:flex-row gap-5 mt-6">
                    <div className="box-ads">
                        <motion.div className="absolute z-[-1] w-full h-full overflow-hidden" transition={{ duration: 0.4 }} whileHover={{ scale: 1.1 }}>
                            <img className="object-cover w-full h-full rounded-lg" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/new-dualsense.jpg" alt="" />
                        </motion.div>
                        <h2 className="box-ads-title">Aurora Headset</h2>
                        <p className="box-ads-des">For PlayStation 5</p>
                        <Button className="box-ads-btn hover:bg-gray-200/70">View Details</Button>
                    </div>
                    <div className="box-ads">
                        <motion.div className="absolute z-[-1] w-full h-full overflow-hidden" transition={{ duration: 0.4 }} whileHover={{ scale: 1.1 }}>
                            <img className="object-cover w-full h-full rounded-lg" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/instant-cameras.jpg" alt="" />
                        </motion.div>
                        <h2 className="box-ads-title">Aurora Headset</h2>
                        <p className="box-ads-des">Get photo paper as a gift</p>
                        <Button className="box-ads-btn hover:bg-gray-200/70">View Details</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
