"use client"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
// react icons
import { BsDeviceHdd } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";
import { LuLaptop2, LuMouse, LuSmartphone } from "react-icons/lu";
import { CgSmartphoneChip } from "react-icons/cg";
import { PiGameControllerBold, PiMonitor, PiCameraBold } from "react-icons/pi";


const menuData = [
    {
        title: 'Demos',
    },
    {
        title: 'Promotions',
    },
    {
        title: 'Stores',
    },
    {
        title: 'Our Contacts',
    },
    {
        title: 'Delivery & Return',
    },
    {
        title: 'Outlet',
    },
    {
        icon: <MdOutlineFavoriteBorder />,
        title: 'Wishlist',
    },
    {
        icon: <TbArrowsShuffle />,
        title: 'Compare',
    },
];

const MobileDeviceSideBar = () => {
    const [showLinkData, setShowLinkData] = useState(true);
    const [data, setData] = useState([]);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
    const fetchUrl = `${apiUrl}/api/category`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fetchUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const toggleData = () => {
        setShowLinkData(!showLinkData);
    };

    return (
        <div className="mobile-sideBar">
            <div className="flex justify-start">
                <motion.div
                    onClick={toggleData}
                    whileTap={{ scale: 0.98 }}
                    initial={false}
                    className={`mobile-btn px-[2.3em] ${showLinkData ? 'opacity-100' : 'opacity-25'}`}
                >
                    <h4 className={`font-semibold text-xs`}>CATEGORIES</h4>
                    <div className={`mobile-btn-border ${!showLinkData ? '' : 'animate-border'}`}></div>
                </motion.div>
                <motion.div
                    onClick={toggleData}
                    whileTap={{ scale: 0.98 }}
                    initial={false}
                    className={`mobile-btn px-14 ${!showLinkData ? 'opacity-100' : 'opacity-25'}`}
                >
                    <h4 className={`font-semibold text-xs`}>MENU</h4>
                    <div className={`mobile-btn-border ${showLinkData ? '' : 'animate-border'}`}></div>
                </motion.div>
            </div>
            {showLinkData
                ? data.map((item, index) => (
                    <div className="links-content border-b border-gray-200 pb-4" key={index}>
                        <motion.div
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="icon-size"
                        >
                            {
                                item.title == "Laptops, Tablets & PCs" ? <LuLaptop2 />
                                    : item.title == "Computer & Office" ? <LuMouse />
                                        : ""
                            }
                        </motion.div>
                        <motion.a
                            href={item.link}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title"
                        >
                            {item.title}
                        </motion.a>
                    </div>
                ))
                : menuData.map((menu, index) => (
                    <div className="links-content border-b border-gray-200 pb-4" key={index}>
                        <motion.div
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="icon-size"
                        >
                            {menu.icon}
                        </motion.div>
                        <motion.a
                            href="/"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title"
                        >
                            {menu.title}
                        </motion.a>
                    </div>
                ))
            }
        </div>
    );
};

export default MobileDeviceSideBar;
