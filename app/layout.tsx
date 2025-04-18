import { StoreProvider } from './StoreProvider'

import type { Metadata } from 'next'
import '@/app/globals.css'
import ThemeProvider from '@/app/components/ThemeProvider'
import Header from '@/app/components/header/Header'
import HeroCanvas from '@/app/components/hero/HeroCanvas'
import Mountains from '@/app/components/hero/Mountains'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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

            <div className="flex justify-center overflow-x-hidden" id='hero'>
              <div>
                {/* <div style={{ height: 100 }}></div> */}
                <HeroCanvas />
                <Mountains />

              </div>
            </div>

            <div className="flex p-5 justify-center w-full mt-[-50]">
              <div className="w-full max-w-[900]">
                {children}
              </div>
            </div>

          </div>
        </ThemeProvider>
      </html>
    </StoreProvider>
  )
}