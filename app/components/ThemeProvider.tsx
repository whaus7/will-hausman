'use client'

import { Geist, Geist_Mono, Comfortaa, Noto_Sans } from 'next/font/google'
import { useAppSelector } from '@/lib/hooks'
import { selectDarkmode } from '@/lib/features/darkmode/darkmodeSlice'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const comfortaa = Comfortaa()
const noto = Noto_Sans()

interface ReactChildren {
  readonly children: React.ReactNode
}

export default function ThemeProvider({ children }: ReactChildren) {
  const darkmode = useAppSelector(selectDarkmode)

  return (
    <body
      className={`${noto.className} ${darkmode ? 'darkMode' : 'lightMode'
        } antialiased`}
    >
      {children}
    </body>
  )
}
