"use client"

import { useState } from "react";
import { motion } from 'framer-motion';
import ShowBar from "./ShowBar";
import { laptopPcs, computerOffice, hardwareComponents } from "../../../data/Data";
// react icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { BsDeviceHdd } from "react-icons/bs";
import { LuLaptop2, LuMouse, LuSmartphone } from "react-icons/lu";
import { CgSmartphoneChip } from "react-icons/cg";
import { PiGameControllerBold, PiMonitor, PiCameraBold } from "react-icons/pi";

const SideBarLinks = ({ visible, show }) => {

    const [showLaptopsPcs, setShowLaptopsPcs] = useState(false);
    const [showComputer, setShowComputer] = useState(false);
    const [showHardware, setShowHardware] = useState(false);

    return (
        <div className={`flex flex-col mt-5 gap-6 ${visible || show ? "items-start justify-center ml-5" : "items-center"}`}>
            { /**ONE */}
            <div
                className="links-content"
                onMouseEnter={() => setShowLaptopsPcs(true)}
                onMouseLeave={() => setShowLaptopsPcs(false)}
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
                            <LuLaptop2 />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title"
                        >
                            Laptops, Tablets & PCs
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                        {/* Pass laptopPcs data when showLaptopsPcs is true */}
                        {showLaptopsPcs && <ShowBar data={laptopPcs} />}
                    </>
                ) : (
                    <LuLaptop2 className="icon-size" />
                )}
            </div>
            { /**TWO */}
            <div
                className="links-content"
                onMouseEnter={() => setShowComputer(true)}
                onMouseLeave={() => setShowComputer(false)}
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
                            <LuMouse />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title"
                        >
                            Computer & Office
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                        {/* Pass computerOffice data when showComputer is true */}
                        {showComputer && <ShowBar data={computerOffice} />}
                    </>
                ) : (
                    <LuMouse className="icon-size" />
                )}
            </div>
            { /**THREE */}
            <div className="links-content"
                onMouseEnter={() => setShowHardware(true)}
                onMouseLeave={() => setShowHardware(false)}
            >
                {visible || show
                    ?
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
                            <CgSmartphoneChip />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title" >
                            Hardware & Components
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                        {/** Pass hardwareComponents data when showHardware is true */}
                        {showHardware && <ShowBar data={hardwareComponents} />}
                    </>
                    : <CgSmartphoneChip className="icon-size" />
                }
            </div>
            { /**FOUR */}
            <div className="links-content">
                {visible || show
                    ?
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
                            <LuSmartphone />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title" >
                            Smartphones
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                    </>
                    : <LuSmartphone className="icon-size" />
                }
            </div>
            { /**FIVE */}
            <div className="links-content">
                {visible || show
                    ?
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
                            <PiGameControllerBold />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title" >
                            Games & Entertainment
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                    </>
                    : <PiGameControllerBold className="icon-size" />
                }
            </div>
            { /**SIX */}
            <div className="links-content">
                {visible || show
                    ?
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
                            <PiMonitor />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title" >
                            TV & Hi-Fi
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                    </>
                    : <PiMonitor className="icon-size" />
                }
            </div>
            { /**SEVEN */}
            <div className="links-content">
                {visible || show
                    ?
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
                            <PiCameraBold />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title" >
                            Photo & Video
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                    </>
                    : <PiCameraBold className="icon-size" />
                }
            </div>
            { /**END */}
            <div className="links-content">
                {visible || show
                    ?
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
                            <BsDeviceHdd />
                        </motion.div>
                        <motion.a
                            href="/"
                            initial={false}
                            animate={visible ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="link-title" >
                            Home Appliance
                            <span className="span-arrow-right"><MdOutlineKeyboardArrowRight className="arrow-right" /></span>
                        </motion.a>
                    </>
                    : <BsDeviceHdd className="icon-size" />
                }
            </div>
        </div>
    )
}

export default SideBarLinks;