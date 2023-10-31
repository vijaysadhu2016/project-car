import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/app/components/Layout/Header"
import Divider from "@/app/components/Divider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Carvee',
  description: 'Car and automobile',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Header/>
    <Divider/>
    <section className="py-4">
      {children}
    </section>
    </body>
    </html>
  )
}
