"use client"
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import ShowBar from "./ShowBar";
import { laptopPcs, computerOffice, hardwareComponents } from "@/data/DataLink";
// react icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { BsDeviceHdd } from "react-icons/bs";
import { LuLaptop2, LuMouse, LuSmartphone } from "react-icons/lu";
import { CgSmartphoneChip } from "react-icons/cg";
import { PiGameControllerBold, PiMonitor, PiCameraBold } from "react-icons/pi";

const SideBarLinks = ({ visible, show }) => {
    const [data, setData] = useState([]);
    const [hoveredItemData, setHoveredItemData] = useState(null);
    const [showBar, setShowBar] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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

    const handleMouseEnter = (itemData) => {
        setHoveredItemData(itemData);
        setShowBar(true);
    };

    const handleMouseLeave = () => {
        setHoveredItemData(null);
        setShowBar(false);
    };

    return (
        <div onMouseLeave={handleMouseLeave} className={`flex flex-col mt-5 gap-6 ${visible || show ? "items-start justify-center ml-5" : "items-center"}`}>
            {data.map((item, index) => (
                <>
                    { /**ONE */}
                    <motion.div
                        onMouseEnter={() => handleMouseEnter(item.productGroups)}
                        className="links-content"
                    >
                        {visible || show ? (
                            <>
                                <motion.div
                                    initial={false}
                                    animate={visible ? "visible" : "hidden"}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
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
                                    initial={false}
                                    animate={visible ? "visible" : "hidden"}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="link-title"
                                >
                                    {item.title}
                                    <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                                </motion.a>
                            </>
                        ) : (
                            <>
                                {
                                    item.title == "Laptops, Tablets & PCs" ? <LuLaptop2 className="icon-size" />
                                        : item.title == "Computer & Office" ? <LuMouse className="icon-size" />
                                            : ""
                                }
                            </>
                        )}
                    </motion.div>
                </>
            ))}
            {showBar && <ShowBar data={hoveredItemData} />}
        </div >
    )
}

export default SideBarLinks;