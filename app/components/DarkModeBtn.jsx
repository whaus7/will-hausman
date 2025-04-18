'use client'

import {
  toggleDarkmode,
  selectDarkmode,
} from '@/lib/features/darkmode/darkmodeSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React from 'react'
import SunAnimated from '@/app/components/SunAnimated'
import Moon from '@/app/components/svg_icons/Moon'
import Boop from '@/app/components/Boop'

export default function DarkModeBtn() {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(selectDarkmode)

  return (
    <button onClick={() => dispatch(toggleDarkmode())}>
      {darkMode ? (
        <Boop boopConfig={{ rotation: 15 }}>
          <Moon />
        </Boop>
      ) : (
        <SunAnimated />
      )}
    </button>
  )
}
