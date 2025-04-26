import Link from 'next/link'

const menuLinks = [
  {
    text: 'Blog',
    url: 'blog',
  },
  {
    text: 'Contact',
    url: 'contact',
  },
]

export default function MainNav() {
  return (
    <div className="flex-auto mt-[3px]">
      {menuLinks.map((link) => (
        <Link key={link.url} href={link.url} className="pl-[10] pr-[10]">
          {link.text}
        </Link>
      ))}
    </div>
  )
}
