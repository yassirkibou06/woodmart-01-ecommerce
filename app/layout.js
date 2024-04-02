import './globals.css'
import All from '@/components/All';


export const metadata = {
  title: 'Woodmart',
  description: 'next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <All children={children} />
    </html>
  )
}
