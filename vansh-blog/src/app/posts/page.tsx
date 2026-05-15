import React from 'react'
import PostCard from '../../components/PostCard'

export default function Posts() {
  return (
    <section>
      <h1 className="text-3xl mb-4">All Posts</h1>
      <div className="grid gap-4">
        <PostCard title="Why AI Writing Feels Soulless" excerpt="Placeholder excerpt" slug="why-ai-writing-feels-soulless" />
        <PostCard title="Surveillance Cinema and the Digital Panopticon" excerpt="Placeholder excerpt" slug="surveillance-cinema" />
      </div>
    </section>
  )
}
