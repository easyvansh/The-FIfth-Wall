import './styles/globals.css'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Vansh Singh',
  description: 'Notes on cinema, software, AI, philosophy, and modern life.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-primaryText">
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
