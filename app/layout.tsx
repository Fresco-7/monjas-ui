import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import ToasterContext from './context/ToasterContext'
import Navbar from '@/components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monjas',
  description: 'Sofia Database Doutoramento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className+" "}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ToasterContext />
          <Navbar></Navbar>
          <main className=''>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
