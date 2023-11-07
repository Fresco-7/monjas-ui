import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import ToasterContext from './context/ToasterContext'
import Navbar from '@/components/navbar'
import { ReactQueryProvider } from '@/components/ReactQueryProvider'
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
    <body className={inter.className}>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ToasterContext />
          <Navbar></Navbar>
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
      </body>
    </html>
  )
}
