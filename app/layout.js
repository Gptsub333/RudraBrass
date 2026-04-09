import { Poppins, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-opensans'
})

export const metadata = {
  title: 'Rudra Brass Industries | Manufacturer and Exporter of Brass Cable Gland & Accessories',
  description: 'Leading manufacturer and exporter of high precision brass cable glands, cable gland accessories, and brass earthing parts from Jamnagar, Gujarat, India.',
  keywords: 'brass cable gland, cable gland accessories, brass earthing parts, cable lugs, brass manufacturer, Jamnagar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
