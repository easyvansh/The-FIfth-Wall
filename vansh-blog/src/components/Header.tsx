import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="border-b border-[rgba(245,234,216,0.12)] py-4 bg-surface">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl">Vansh Singh</Link>
        <nav className="text-mutedText">
          <Link href="/posts" className="mr-4">Posts</Link>
          <Link href="/projects" className="mr-4">Projects</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}
