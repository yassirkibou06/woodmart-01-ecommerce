import './globals.css'


export const metadata = {
  title: 'Woodmart',
  description: 'next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Montserrat">{children}</body>
    </html>
  )
}
