'use client'

import { Noto_Sans } from 'next/font/google'
import { useAppSelector } from '@/lib/hooks'
import { selectDarkmode } from '@/lib/features/darkmode/darkmodeSlice'

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

const noto = Noto_Sans({
  subsets: ['cyrillic'],
})

interface ReactChildren {
  readonly children: React.ReactNode
}

export default function ThemeProvider({ children }: ReactChildren) {
  const darkmode = useAppSelector(selectDarkmode)

  return (
    <body
      className={`${noto.className} ${
        darkmode ? 'darkMode' : 'lightMode'
      } antialiased`}
    >
      {children}
    </body>
  )
}
