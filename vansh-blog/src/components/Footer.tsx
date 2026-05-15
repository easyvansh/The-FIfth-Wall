import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-[rgba(245,234,216,0.12)] py-6 mt-12 bg-surface">
      <div className="max-w-3xl mx-auto px-4 text-mutedText text-sm">
        <div>© {new Date().getFullYear()} Vansh Singh — Notes on cinema, software, AI, philosophy, and modern life.</div>
        <div className="mt-2">Social: GitHub · LinkedIn · email@example.com</div>
      </div>
    </footer>
  )
}
