import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: 'My personal website',
}

export default function About() {
  return (
    <div className="w-full max-w-[900]">
      <h1>{`${metadata.title}`}</h1>

      <p>contact me</p>
    </div>
  )
}
