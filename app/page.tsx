import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prologue',
  description: 'My personal website',
}

export default function Home() {
  return (
    <div>
      <h1>{`${metadata.title}`}</h1>

      <h2>Background</h2>

      <p>
        I went to school for video game development. As graduation approached I
        was hearing some rather negative stories about the industry. I decided
        to teach myself web development instead
      </p>

      <p>content content content content content content content content </p>
      <p>content content content content content content content content </p>
      <p>content content content content content content content content </p>
      <p>content content content content content content content content </p>
    </div>
  )
}
