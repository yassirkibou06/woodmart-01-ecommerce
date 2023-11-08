import { FiMenu } from "react-icons/fi";

const NavBarBottom = ({ show, setShow }) => {
    return (
        <div className='bg-[#e6effd] flex items-center py-2 px-4'>
            <div onClick={() => setShow(true)} className="cursor-pointer hover:text-gray-500 flex items-center rounded-[50px] gap-3 bg-white w-fit p-1 pr-3">
                <div className="bg-white rounded-[50px]">
                    <FiMenu className="text-xl text-white bg-primary rounded-full w-[33px] h-[33px] p-[6px]" />
                </div>
                <p className="font-semibold text-sm">All Categories</p>
            </div>
        </div>
    )
}

export default NavBarBottom