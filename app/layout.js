import SideBar from '@/components/header/sideBar/Sidebar';
import './globals.css'
import ScrollButton from '@/components/ScrollButton';


export const metadata = {
  title: 'Woodmart',
  description: 'next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative header font-Open Sans">
        <div>
          <SideBar />
        </div>
        {children}
        <ScrollButton />
      </body>
    </html>
  )
}
