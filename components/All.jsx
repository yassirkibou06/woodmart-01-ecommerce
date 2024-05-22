"use client"
import SideBar from '@/components/header/sideBar/Sidebar';
import ScrollButton from '@/components/ScrollButton';
import NavBar from '@/components/header/navBar/NavBar';
import NavBarASideBarAFooter from '@/components/header/NavBarASideBarAFooter';
import { usePathname, useRouter } from 'next/navigation';
import AllFiles from '@/components/dashboard/AllFiles';

const All = ({ children }) => {
    const path = usePathname();
    const router = useRouter();
    const isDashboardRoute = path.match(/^\/dashboard\/(.+)/);

    console.log(isDashboardRoute)
    
    return (
        <>
            {path === "/dashboard" || isDashboardRoute ?
                <body >
                    <AllFiles children={children} />
                </body>
                :
                <body className="relative header font-Open-sans w-full">
                    <NavBarASideBarAFooter children={children} />
                    <ScrollButton />
                </body>
            }
        </>
    )
}

export default All;