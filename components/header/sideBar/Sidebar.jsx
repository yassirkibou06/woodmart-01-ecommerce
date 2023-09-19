"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import SideBarLinks from './SideBarLinks';
import MobileDeviceSideBar from './MobileDeviceSideBar';
// react icons
import { FiMenu } from "react-icons/fi";

const SideBar = () => {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <div onMouseLeave={() => setVisible(false)}>
            {/* Mobile and Tablet: Use a button to toggle the sidebar */}
            <motion.div className="block lg:hidden">
                <motion.div
                    transition={{ ease: "linear", duration: 5 }}
                    onClick={() => setOpen(false)}
                    className={`${open ? " absolute left-0 top-0 bg-black opacity-70 z-50 w-full h-[100vh]" : "hidden"}`}
                ></motion.div>
                <button className="absolute left-5 top-5" onClick={toggleSidebar}>
                    <FiMenu className="text-black text-2xl" />
                </button>
            </motion.div>
            {open && <MobileDeviceSideBar />}
            {/**FOR Desktop ///////////*/}
            <motion.div
                transition={{ ease: "linear", duration: 5 }}
                onMouseOver={() => setVisible(false)}
                onClick={() => setOpen(false)}
                className={`${visible ? "fixed left-0 top-0 bg-black opacity-70 z-50 w-full h-full" : "hidden"}`}
            ></motion.div>
            <motion.div
                onMouseEnter={() => setVisible(true)}
                whileHover={{ width: "290px", backgroundColor: "white" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                transitionEnd={{ display: "none" }}
                className="hidden lg:block fixed top-0 left-0 z-[999] h-full border-r border-gray-100" >
                <motion.div
                    className={`flex mx-2 mt-3 bg-primary rounded-full items-center transition-all delay-200 ${visible ? "w-[277px] h-11 justify-start gap-5" : "w-11 h-11 justify-center gap-0"
                        }`} >
                    {visible
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
                                className="text-white text-xl ml-3"
                            >
                                <FiMenu />
                            </motion.div>
                            <motion.h4
                                initial={false}
                                animate={visible ? "visible" : "hidden"}
                                variants={{
                                    hidden: { opacity: 0, x: -10 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={`text-white font-medium text-[16px]`} >
                                All Categories
                            </motion.h4>
                        </>
                        : <FiMenu className="text-white text-xl" />
                    }
                </motion.div>
                {/* // */}
                <SideBarLinks visible={visible} />
            </motion.div>
        </div>
    );
}

export default SideBar;