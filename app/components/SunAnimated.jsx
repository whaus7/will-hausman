'use client'

import React, { useState, useEffect } from 'react'
import { animated } from 'react-spring'

export default function SunAnimated() {
  const [isHovered, setIsHovered] = useState(false)
  const timing = 400

  useEffect(() => {
    if (!isHovered) {
      return
    }

    const timer = setTimeout(() => {
      setIsHovered(false)
    }, timing)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isHovered])

  const hovered = function () {
    setIsHovered(true)
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={hovered}
      style={{ overflow: 'visible' }}
      className={`svgIcon lucide lucide-sun`}
    >
      <animated.g
        className="sun-circle"
        style={{
          transformOrigin: 'center center',
          transform: isHovered ? `scale(1.3)` : `scale(1)`,
          transition: `transform ${timing}ms`,
        }}
      >
        <circle cx="12" cy="12" r="4" />
      </animated.g>
      <animated.g
        className="sun-icon-shine"
        style={{
          transformOrigin: 'center center',
          transform: isHovered ? `scale(1.6)` : `scale(1)`,
          transition: `transform ${timing}ms`,
        }}
      >
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </animated.g>
    </svg>
  )
}
