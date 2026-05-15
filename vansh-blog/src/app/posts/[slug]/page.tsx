import React from 'react'

interface Props { params: { slug: string } }

export default async function PostPage({ params }: Props) {
  const { slug } = params
  // placeholder: integrate Sanity query here
  return (
    <article>
      <h1 className="text-3xl mb-2">{slug.replace(/-/g, ' ')}</h1>
      <p className="text-mutedText">Published — reading time</p>
      <div className="prose mt-6 text-primaryText">This is a placeholder article. Connect to Sanity to load real content.</div>
    </article>
  )
}
