import { FiMenu } from "react-icons/fi";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { GoPerson } from "react-icons/go";
import { TbArrowsShuffle } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { BiSearchAlt2 } from "react-icons/bi";

const NavBarBottom = ({ show, setShow }) => {
    const usa = [
        {
            title: "Deutschland",
        },
        {
            title: "United Kingdom",
        }
    ];
    const usd = [
        {
            title: "EUR",
        },
        {
            title: "GBP",
        }
    ]
    return (
        <div className='bg-[#e6effd] flex gap-24 items-center py-2 px-4'>
            {/** navLinks show on desktop only */}
            <div className="hidden lg:flex items-center space-x-4">
                <div onClick={() => setShow(true)} className="cursor-pointer hover:text-gray-500 flex items-center rounded-[50px] gap-3 bg-white w-fit p-1 pr-3">
                    <div className="bg-white rounded-[50px]">
                        <FiMenu className="text-xl text-white bg-primary rounded-full w-[33px] h-[33px] p-[6px]" />
                    </div>
                    <p className="font-semibold text-sm">All Categories</p>
                </div>
                <ul className="flex items-center space-x-2">
                    <li className="navBar-bottom-li"><a className="navBar-bottom-a" href="/">Promotions</a></li>
                    <li className="navBar-bottom-li"><a className="navBar-bottom-a" href="/">Stores</a></li>
                    <li className="navBar-bottom-li"><a className="navBar-bottom-a" href="/">Our Contacts</a></li>
                    <li className="navBar-bottom-li"><a className="navBar-bottom-a" href="/">Delivery & Return</a></li>
                    <li className="navBar-bottom-li"><a className="navBar-bottom-a" href="/">Outlet</a></li>
                </ul>
            </div>
            <div className="hidden lg:flex gap-3 items-center space-x-1">
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        <NavigationMenuItem >
                            <NavigationMenuTrigger className="navBar-bottom-li" ><a className="navBar-bottom-a" href="/">USA</a></NavigationMenuTrigger>
                            <NavigationMenuContent className="p-3 z-50 bg-white">
                                <ul className="flex flex-col gap-5 w-[200px]">
                                    {usa.map((component) => (
                                        <li>
                                            <a className="text-gray-500 text-sm hover:text-primary" href={"/"}>{component.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        <NavigationMenuItem >
                            <NavigationMenuTrigger className="navBar-bottom-li" ><a className="navBar-bottom-a" href="/">USD</a></NavigationMenuTrigger>
                            <NavigationMenuContent className="p-3 z-50 bg-white">
                                <ul className="flex flex-col gap-5 w-[200px]">
                                    {usd.map((component) => (
                                        <li>
                                            <a className="text-gray-500 text-sm hover:text-primary" href={"/"}>{component.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center space-x-6">
                    <div className="btn-style">
                        <GoPerson className="btn-hover" />
                    </div>
                    <div className="btn-style">
                        <TbArrowsShuffle className="btn-hover" />
                        <span className="absolute top-0 -right-1 text-xs shadow-gray-300 shadow-lg bg-white text-primary px-1 rounded-full">0</span>
                    </div>
                    <div className="btn-style">
                        <MdOutlineFavoriteBorder className="btn-hover" />
                        <span className="absolute top-0 -right-1 text-xs shadow-gray-300 shadow-lg bg-white text-primary px-1 rounded-full">0</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className=" bg-primary p-2 rounded-full cursor-pointer relative">
                            <LuShoppingCart className="text-2xl hover:text-gray-500 text-white" />
                            <span className="absolute top-0 -right-1 text-xs shadow-gray-300 shadow-lg bg-white text-primary px-1 rounded-full">0</span>
                        </div>
                        <p className="font-medium text-sm">$0.00</p>
                    </div>
                </div>
            </div>
            {/** search input for mobile only */}
            <div className="flex lg:hidden items-center space-x-1 md:space-x-2 w-full md:w-full bg-white border border-gray-200 rounded-[50px] relative">
                    <Input type="text" className="px-3 py-2 border-none shadow-none placeholder:text-gray-500 placeholder:text-base" placeholder="Search for products" />
                    <BiSearchAlt2 className='cursor-pointer absolute right-1 p-1 rounded-full bg-primary text-white w-8 h-8' />
                </div>
        </div>
    )
}

export default NavBarBottom