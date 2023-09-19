import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { BiLogoFacebook, BiLogoTelegram, BiLogoTwitter, BiLogoPinterestAlt, BiLogoLinkedin } from "react-icons/bi";

const list = [
    {
        title: "Broadway Store",
        adress: " 1260 Broadway, San Francisco, CA 94109",
        link: "/1"

    },
    {
        title: "Valencia Store",
        adress: "1501 Valencia St, San Francisco, CA 94110",
        link: "/2"

    },
    {
        title: "Emeryville Store",
        adress: "1034 36th St, Emeryville, CA 94608",
        link: "/3"
    },
    {
        title: "Alameda Store",
        adress: " 1433 High St, Alameda, CA 94501",
        link: "/4"
    }
]

const Footer = () => {
    return (
        <footer className="h-auto  mx-4">
            <div className="flex flex-col md:flex-row lg:flex-row my-7 items-center justify-center gap-8">
                {list.map((item, index) => (
                    <div>
                        <div className="flex flex-col lg:flex-row gap-5 items-center" key={index}>
                            <Link className="text-lg lg:text-xl font-semibold" href={item.link}>{item.title}</Link>
                            <Link className="bg-primary p-1 rounded-full" href={item.link}>
                                <IoIosArrowForward className="text-white" />
                            </Link >
                        </div>
                        <p className="text-gray-500 text-sm lg:text-base">{item.adress}</p>
                    </div>
                ))}
            </div>
            <div className="footer-content">
                <div className="sm:mb-5">
                    <Image className="pb-4" src="./mega-electronics-logo.svg" width={190} height={190} alt="logo" />
                    <p className="text-gray-400 pb-4">Condimentum adipiscing vel neque dis nam parturient orci at scelerisque.</p>
                    <h5 className="link-semiBold pb-4">Subscribe us</h5>
                    <div className="flex gap-2">
                        <a href="/">
                            <BiLogoFacebook className="socail-icon bg-[#365493]" />
                        </a>
                        <a href="/">
                            <BiLogoTwitter className="socail-icon bg-[#33ccff]" />
                        </a>
                        <a href="/"><BiLogoPinterestAlt className="socail-icon bg-[#cb2027]" /></a>
                        <a href="/">
                            <BiLogoLinkedin className="socail-icon bg-[#0274b3]" />
                        </a>
                        <a href="/">
                            <BiLogoTelegram className="socail-icon bg-[#37aee2]" />
                        </a>
                    </div>
                </div>
                {/*//// */}
                <div className="">
                    <h4 className="link-semiBold pb-4">Categories</h4>
                    <ul>
                        <li className="pb-3"><Link className="link-li" href="/">Smartphones</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Laptops</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Hardware</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Cameras</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Headphones</Link></li>
                    </ul>
                </div>
                {/*//// */}
                <div>
                    <h4 className="link-semiBold pb-4">Useful Links</h4>
                    <ul>
                        <li className="pb-3"><Link className="link-li" href="/">Promotions</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Our contacts</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Stores</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Delivery & Return</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Outlet</Link></li>
                    </ul>
                </div>
                {/*//// */}
                <div>
                    <h4 className="link-semiBold pb-4">Useful Links</h4>
                    <ul>
                        <li className="pb-3"><Link className="link-li" href="/">Blog</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Our contacts</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Stores</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Delivery & Return</Link></li>
                        <li className="pb-3"><Link className="link-li" href="/">Outlet</Link></li>
                    </ul>
                </div>
                {/*//// */}
                <div>
                    <h4 className="font-semibold text-lg pb-4">Download App on Mobile:</h4>
                    <p className="text-gray-500 text-sm">15% discount on your first purchase</p>
                    <div className="flex pt-4 gap-5">
                        <Link href="/">
                            <Image src="./google-play.svg" width={150} height={30} alt="app-store" />
                        </Link>
                        <Link href="/">
                            <Image src="./app-store.svg" width={140} height={30} alt="app-store" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="end-footer">
                <p className="text-gray-500 text-xs"><Link className="font-medium text-black" href="/">WOODMART</Link> © 2023 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.</p>
                <Image className="object-cover" src="/assets/images/payments.png" width={220} height={220} alt="img" />
            </div>
        </footer>
    )
}

export default Footer;