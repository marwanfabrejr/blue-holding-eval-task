import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Providers } from './GlobalRedux/provider.jsx'
import ToasterContext from './context/ToasterContext'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blue Holding Task',
  description: 'Frontend Engineer Evaluation task.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} overflow-scroll`}>
        <Providers>
          <ToasterContext />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
