"use client"
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { BiSearchAlt2 } from 'react-icons/bi';
import { PiPhoneCall } from 'react-icons/pi';
import { TbWorldUpload } from 'react-icons/tb';
import { GoPerson } from 'react-icons/go';
import NavBarBottom from './NavBarBottom';
// react icons
import { FiMenu } from "react-icons/fi";

const NavBar = ({ show, setShow, open, setOpen }) => {
    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <>
            <motion.div className="flex items-center justify-between gap-10 mt-5 mb-3 px-5">
                <motion.div className="block lg:hidden">
                    <motion.div
                        transition={{ ease: "linear", duration: 5 }}
                        onClick={() => setOpen(false)}
                        className={`${open ? " absolute left-0 top-0 bg-black opacity-70 z-50 w-full h-[100vh]" : "hidden"}`}
                    ></motion.div>
                    <button className="mt-1" onClick={toggleSidebar}>
                        <FiMenu className="text-black text-2xl" />
                    </button>
                </motion.div>
                <div className="w-[40%]">
                    <img className="lg:w-auto" src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/mega-electronics-logo.svg" alt="" />
                </div>
                <div className="hidden lg:flex items-center space-x-1 md:space-x-2 w-[200px] md:w-full border border-gray-200 rounded-[50px] relative p-1">
                    <Input type="text" className="px-3 py-2 border-none shadow-none placeholder:text-gray-500 placeholder:text-base" placeholder="Search for products" />
                    <BiSearchAlt2 className='cursor-pointer absolute right-1 p-2 rounded-full bg-primary text-white w-10 h-10' />
                </div>
                <div className="block lg:hidden">
                    <GoPerson className="text-2xl cursor-pointer" />
                </div>
                <div className="gap-2 hidden lg:flex">
                    <div className="flex items-center gap-4 w-[190px]">
                        <div>
                            <PiPhoneCall className="text-4xl text-gray-600" />
                        </div>
                        <div>
                            <h3 className="font-medium text-sm mb-1">24 Support</h3>
                            <h3 className="text-blue-500">+1 212-334-0212</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 w-[150px]">
                        <div>
                            <TbWorldUpload className="text-4xl text-gray-600" />
                        </div>
                        <div>
                            <h3 className="font-medium text-sm mb-1">Worldwide</h3>
                            <h3 className="text-blue-500">Free Shipping</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
            <NavBarBottom show={show} setShow={setShow} />
        </>
    )
}
//block mx-auto w-[30%] md:w-[40%]

export default NavBar