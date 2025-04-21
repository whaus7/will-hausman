import { StoreProvider } from '@/app/StoreProvider'

import type { Metadata } from 'next'
import '@/app/globals.css'
import ThemeProvider from '@/app/components/ThemeProvider'
import Header from '@/app/components/header/Header'

export const metadata: Metadata = {
  title: 'Will Hausman',
  description: 'My personal website',
}

interface ReactChildren {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: ReactChildren) {
  return (
    <StoreProvider>
      <html lang="en">
        <ThemeProvider>
          <div>
            <Header />

            {children}
          </div>
        </ThemeProvider>
      </html>
    </StoreProvider>
  )
}
