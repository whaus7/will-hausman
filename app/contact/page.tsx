import type { Metadata } from 'next'
import { MailIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get in Touch',
  description: 'My personal website',
}

export default function About() {
  return (
    <div className="w-full max-w-[900] text-center">
      <h1>{`${metadata.title}`}</h1>

      <p>I'm always looking to build something interesting.</p>

      <a href="mailto:whaus.web@gmail.com">whaus.web@gmail.com</a>

      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  )
}
