import { StoreProvider } from '@/app/StoreProvider'

import type { Metadata } from 'next'
import '@/app/globals.css'
import ThemeProvider from '@/app/components/ThemeProvider'
import Header from '@/app/components/header/Header'
import HeroCanvas from '@/app/components/hero/HeroCanvas'
import Mountains from '@/app/components/hero/Mountains'
import Footer from './components/footer/Footer'

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

            <div className="flex justify-center overflow-x-hidden" id="hero">
              <div>
                {/* <div style={{ height: 100 }}></div> */}
                <HeroCanvas />
                <Mountains />
              </div>
            </div>

            {/* TODO move h1 to here and get title from path for fade effect */}

            <div className="flex p-5 justify-center w-full mt-[-50]">
              <div className="w-full max-w-[900]">{children}</div>
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </html>
    </StoreProvider>
  )
}
