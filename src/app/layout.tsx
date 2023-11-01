import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ["400", "600"],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Database',
  description: 'Movie Database',
  keywords: ['movie', 'database'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={poppins.className}>{children}</body>
    </html>
  )
}
