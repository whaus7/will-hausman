'use client'

import Link from 'next/link'

export default function MainNav() {
  return (
    <div className="flex-auto">
      {['about', 'blog'].map((text) => (
        <Link key={text} href={text} className="pl-[10] pr-[10]">
          {text}
        </Link>
      ))}
    </div>
  )
}
