import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My personal website',
}

export default function Blog() {
  return (
    <div className="w-full max-w-[900]">
      <h1>{`${metadata.title}`}</h1>
      <h2>The power of SVG&apos;s and CSS</h2>
      <p>
        blog content blog content blog content blog content blog content blog
        content blog content blog content blog content blog content blog content
        blog content blog content blog content blog content blog contentblog
        content blog content blog content blog content blog content blog content
        blog content blog content blog content blog content blog content blog
        content blog content blog content blog content blog content blog content
        blog content blog content blog content blog content blog content blog
        content blog content
      </p>
      <p>
        blog content blog content blog content blog content blog content blog
        content blog content blog content
      </p>
      <p>
        blog content blog content blog content blog content blog content blog
        content blog content blog content
      </p>
      <p>
        blog content blog content blog content blog content blog content blog
        content blog content blog content
      </p>
      <p>
        blog content blog content blog content blog content blog content blog
        content blog content blog content
      </p>
    </div>
  )
}
