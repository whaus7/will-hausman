'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Title() {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return <h1>{pathname}</h1>
}
