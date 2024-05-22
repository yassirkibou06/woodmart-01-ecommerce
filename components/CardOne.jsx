"use client";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { GoChevronRight, GoStarFill } from "react-icons/go";
import { BiCartAlt, BiCheck } from "react-icons/bi";
import Link from "next/link";

const CardOne = ({ item }) => {
    const [hoverBtn, setHoverBtn] = useState(null);
    const [hoverCardId, setHoverCardId] = useState(null);
    const [imageIndex, setImageIndex] = useState({});
    const [isMobile, setIsMobile] = useState(false);

    const handleMouseEnter = (id, index) => {
        setImageIndex(prevState => ({ ...prevState, [id]: index }));
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            onHoverStart={() => !isMobile && setHoverCardId(item.id)}
            onMouseLeave={() => !isMobile && setHoverCardId(null)}
            key={item.id}
            className={`mt-8 py-2 bg-white w-[175px] md:w-[190px] lg:w-[240px] h-[440px] lg:h-[480px] rounded-lg relative`} >
            <motion.div
                initial={{ y: 0 }}
                whileHover={!isMobile ? { y: -10, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" } : {}}
                transition={{ duration: 0.5, type: "spring" }}
                className={`container p-2 absolute top-0 bg-white h-fit rounded-lg ${hoverCardId === item.id ? "z-[999]" : "z-30"}`}>
                <div style={{ pointerEvents: "none" }} className="bg-white lg:bg-gray-200 rounded-lg w-full h-[180px] lg:h-[240px] relative z-[2]">
                    <img
                        src={item.images[imageIndex[item.id] || 0]}
                        alt={item.brand}
                        className={` w-full h-[180px] lg:h-full object-cover rounded-lg`} />
                </div>
                <div style={{ pointerEvents: "auto" }} className={`grid grid-cols-3 w-full h-[196px] lg:h-[256px] gap-1 p-2 left-0 top-1 absolute z-[1] ${hoverCardId === item.id ? "visible" : "invisible"}`}>
                    {item.images.map((img, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(item.id, index)}
                            className={`bg-gray-100 hover:bg-gray-300 ${index === 0 ? "rounded-bl-lg" : index === 2 ? "rounded-br-lg" : ""}`}
                        ></div>
                    ))}
                </div>
                <div className="pt-2 flex flex-col space-y-2">
                    <Link href="/" className="font-Lato text-sm lg:text-[15px] tracking-wide font-semibold text-gray-900 hover:text-gray-500">{item.title}</Link>
                    <Link href="/" className="text-xs lg:text-sm tracking-wider font-medium text-gray-400 hover:text-gray-500">{item.name}</Link>
                    <div className="flex items-center mt-3">
                        {item.rating === "5.0" && (
                            <>
                                <GoStarFill className="text-yellow-500 " />
                                <GoStarFill className="text-yellow-500 " />
                                <GoStarFill className="text-yellow-500 " />
                                <GoStarFill className="text-yellow-500 " />
                                <GoStarFill className="text-yellow-500 " />
                            </>
                        )}
                    </div>
                    <div className="flex items-center space-x-1">
                        <BiCheck className="text-primary text-2xl" /> 
                        <p className="font-medium text-sm lg:text-base">In stock</p>
                    </div>
                    <p className="text-primary text-base lg:text-sm font-semibold">
                        <span className="text-gray-300 font-normal text-sm line-through mr-1">{item.oldPrice}</span>
                        {item.price}
                    </p>
                    <motion.a
                        initial={false}
                        onMouseLeave={() => setHoverBtn(null)}
                        onHoverStart={() => setHoverBtn(item.id)}
                        transition={{ duration: 0.3 }} href="/"
                        className="overflow-hidden cursor-pointer bg-primary px-2 lg:px-3 h-[40px] lg:h-[44px] rounded-md flex flex-col items-center justify-center text-white hover:bg-primary/90">
                        <motion.p initial={false}
                            animate={hoverBtn == item.id ? "hidden" : "visible"}
                            variants={{
                                hidden: { y: -80 },
                                visible: { y: 0 },
                            }}
                            transition={{ duration: 0.3, type: "tween" }}
                            className={`font-medium text-sm tracking-wide ${hoverBtn == item.id ? "hidden" : "block"}`}>
                            Add To Cart
                        </motion.p>
                        <motion.div
                            animate={hoverBtn == item.id ? "visible" : "hidden"}
                            className={`${hoverBtn == item.id ? "block" : "hidden"}`}
                            variants={{
                                hidden: { y: 80 },
                                visible: { y: 0 },
                            }}
                            transition={{ duration: 0.3, type: "tween" }}>
                            <BiCartAlt size={25} />
                        </motion.div>
                    </motion.a>
                    <p className="font-Lato font-semibold text-[14px] text-neutral-600">SKU: <span className="text-neutral-400 font-normal">{item.sku}</span></p>
                </div>
                <motion.div
                    animate={hoverCardId === item.id && !isMobile ? "visible" : "hidden"}
                    variants={{
                        hidden: { display: "none", opacity: 0 },
                        visible: { display: "block", opacity: 1 },
                    }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="flex flex-col space-y-2 py-2">
                    <p className="pt-2 border-t border-gray-300 font-Lato font-medium text-[14px] text-neutral-800">Brand: <span className="text-neutral-400 font-normal">{item.brand}</span></p>
                    <p className="font-Lato font-medium text-[14px] text-neutral-800">Color: <span className="text-neutral-400 font-normal">{item.color}</span></p>
                    <p className="font-Lato font-medium text-[14px] text-neutral-800">Screen: <span className="text-neutral-400 font-normal">{item.Screen}"</span></p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CardOne;
