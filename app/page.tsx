import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prologue',
  description: 'My personal website',
}

export default function Home() {
  return (
    <div>
      <h1>{`${metadata.title}`}</h1>

      <p>
        The past few years I’ve been on a journey of building a business that
        gives back to the planet instead of pillaging. I’ve experimented with
        many ideas but I’m still looking for the right fit. This unexpected
        journey in my life has broadened my skillsets beyond coding which I’m
        grateful for. I’m hoping to come back to my dev roots and find some
        stability.
      </p>

      <h2>Background</h2>

      <p>
        I went to school for video game development. As graduation approached I
        was hearing endless negative stories about the industry. I decided to
        teach myself web development instead. I&apos;ve always enjoyed being on
        the bleeding edge of the web to compete with apps. Most of my career has
        been building out features for dashboards.
      </p>

      <p>
        This site is an homage to SVG&apos;s and the &lt;canvas /&gt; tag which
        is two things ive always wanted to explore in detail during my dev
        career.
      </p>
    </div>
  )
}
