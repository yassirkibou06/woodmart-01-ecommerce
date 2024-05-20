import Link from 'next/link';
import { BiHome } from 'react-icons/bi';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const NavBar = ({ open,setOpen }) => {
    return (
        <div className={`absolute pr-5 md:pr-10 duration-75 w-full left-0 top-0 ${open ? "md:w-[1105px]  md:left-64" : "md:w-[1297px] md:left-[63px]"} bg-white px-10 py-4 rounded-sm overflow-hidden`}>
            <div className="flex items-end justify-end space-x-4" >
                <div className="flex items-center space-x-4">
                    <Link href="/" className="p-2 rounded-lg border-[1px] border-gray-300">
                        <BiHome size={20} className="text-xl cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
