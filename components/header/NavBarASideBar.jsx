"use client"
import { useState } from 'react'
import SideBar from './sideBar/Sidebar'
import NavBar from './navBar/NavBar'

const NavBarASideBar = ({ children }) => {
    const [show, setShow] = useState(false);
    //for mobile toggle
    const [open, setOpen] = useState(false);
    return (
        <>
            <div>
                <SideBar open={open} show={show} setShow={setShow}/>
            </div>
            <div>
                <NavBar open={open} setOpen={setOpen} show={show} setShow={setShow} />
                {children}
            </div>
        </>
    )
}

export default NavBarASideBar;