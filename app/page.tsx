import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Will Hausman - Developer Portfolio',
}

export default function Home() {
  const projects = [
    {
      title: 'Sweet Roots Dashboard',
      description: 'Soil health monitoring dashboard for microgreen farming',
      image: '/images/portfolio/sweetroots-thumbnail.png',
      url: 'https://sweetroots.app/',
      tech: ['React', 'Next.js', 'Data Visualization'],
    },
    {
      title: 'Brix Logs App',
      description: 'Plant nutrition tracking and analysis application',
      image: '/images/portfolio/brix-logs-thumbnail.png',
      url: 'https://sweetroots.app/brix-logs',
      tech: ['React', 'Next.js', 'Analytics'],
    },
    {
      title: 'Digital Home Technologies',
      description: 'Smart home automation marketing website',
      image: '/images/portfolio/digital-home-thumbnail.png',
      url: 'https://digital-home-delta.vercel.app/',
      tech: ['Next.js', 'Marketing', 'Responsive Design'],
    },
  ]

  return (
    <div className="w-full max-w-[900] text-center">
      <h1>Portfolio</h1>

      <div className="portfolio-intro">
        <p>
          Welcome to my developer portfolio. Here are some of the projects
          I&apos;ve worked on, ranging from agricultural data dashboards to SPA
          marketing websites.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-tile"
          >
            <div className="tile-image-container">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="tile-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="tile-overlay">
                <span className="visit-link">Visit Site →</span>
              </div>
            </div>
            <div className="tile-content">
              <h3 className="tile-title">{project.title}</h3>
              <p className="tile-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
