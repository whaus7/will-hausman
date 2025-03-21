'use client'

import React from 'react'
import MainNav from './components/MainNav'
import Image from 'next/image'
import HeroCanvas from '@/app/components/HeroCanvas'
import { useAppSelector } from '@/lib/hooks'
import { selectDarkmode } from '@/lib/features/darkmode/darkmodeSlice'
import { init, draw } from '@/app/draw-hero'

export default function Home() {
  const darkMode = useAppSelector(selectDarkmode)

  // React.useEffect(() => {
  //   init(darkMode)
  //   //init()
  // }, [darkMode])

  // React.useEffect(() => {
  //   console.log('hmmmm')
  //   draw(null, darkMode)
  // }, [darkMode])
  //return <canvas id="hero-canvas" className="w-full"></canvas>
  //return <canvas id="hero-canvas" width={1000} height={200}></canvas>
  return <HeroCanvas />
}
