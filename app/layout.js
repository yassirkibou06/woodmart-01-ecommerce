import SideBar from '@/components/header/sideBar/Sidebar';
import './globals.css'
import ScrollButton from '@/components/ScrollButton';
import NavBar from '@/components/header/navBar/NavBar';
import NavBarASideBar from '@/components/header/NavBarASideBar';


export const metadata = {
  title: 'Woodmart',
  description: 'next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative header font-Open Sans">
        <NavBarASideBar children={children} />
        <ScrollButton />
      </body>
    </html>
  )
}
