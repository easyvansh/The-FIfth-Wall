import Link from 'next/link'
import React from 'react'

export default function PostCard({ title, excerpt, slug }: { title: string; excerpt?: string; slug: string }){
  return (
    <article className="p-4 bg-surface rounded-md shadow-sm">
      <h3 className="font-semibold"><Link href={`/posts/${slug}`}>{title}</Link></h3>
      {excerpt && <p className="text-mutedText mt-2">{excerpt}</p>}
    </article>
  )
}
