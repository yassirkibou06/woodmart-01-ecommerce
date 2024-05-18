"use client"
import { useState } from "react";
import SideBar from "@/components/dashboard/sideBar/SideBar";
import NavBar from '@/components/dashboard/sideBar/NavBar';

const AllFiles = ({children}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={`relative grid grid-cols-1 ${open ? "md:grid-cols-open" : "md:grid-cols-close"} grid-rows-1 font-Poppins transition duration-700 overflow-x-hidden`}>
            <NavBar open={open} setOpen={setOpen} />
            <SideBar open={open} setOpen={setOpen} />
            {children}
        </div>
    )
}

export default AllFiles;