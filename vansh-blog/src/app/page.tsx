import React from 'react'
import Link from 'next/link'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <section>
      <header className="mb-8">
        <h1 className="text-4xl font-serif">Vansh Singh</h1>
        <p className="text-mutedText mt-2">Notes on cinema, software, AI, philosophy, and modern life.</p>
      </header>

      <section className="grid gap-4">
        <h2 className="text-2xl">Current Notebook</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <PostCard title="Why AI Writing Feels Soulless" excerpt="A short excerpt placeholder." slug="why-ai-writing-feels-soulless" />
          <PostCard title="Surveillance Cinema and the Digital Panopticon" excerpt="A short excerpt placeholder." slug="surveillance-cinema" />
        </div>
      </section>

      <Link href="/posts" className="inline-block mt-6 text-accentAmber">See all posts →</Link>
    </section>
  )
}
