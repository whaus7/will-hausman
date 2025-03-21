import React, { useRef, useEffect } from 'react'
import { useAppSelector } from '@/lib/hooks'
import { selectDarkmode } from '@/lib/features/darkmode/darkmodeSlice'

let animationID = null
let ctx = null

const CanvasComponent = (props) => {
  const darkMode = useAppSelector(selectDarkmode)
  const requestRef = useRef()

  console.log('darkmode on init: ' + darkMode)
  const canvasRef = useRef(null)
  const fps = 0.4

  //let animationID = null
  let canvasHeight = 600
  let canvasWidth = null

  useEffect(() => {
    const canvas = canvasRef.current
    //console.log(canvas)
    //console.log('USE EFECT CALLED: ' + animationID)

    //if (animationID !== null) {
    //   console.log('CANCEL animation')
    //   console.log('animationID in null condition: ' + animationID)
    //   window.cancelAnimationFrame(animationID)
    //   animationID = null
    //}

    window.addEventListener('resize', resizeCanvas, false)
    resizeCanvas()

    // Don't start another animation
    if (canvas) {
      ctx = canvas.getContext('2d')
      if (ctx) {
        // Use the context to draw on the canvas
        // Initial draw then callback takes over
        requestRef.current = requestAnimationFrame(draw)
      } else {
        console.error('Failed to get 2D rendering context')
      }
    }

    return () => {
      console.log('cancelAnimationFrame: ' + requestRef.current)
      cancelAnimationFrame(requestRef.current)
    }
  }, [darkMode])

  function resizeCanvas() {
    console.log('resize called')
    canvasWidth = window.innerWidth
    canvasHeight = window.innerHeight
    canvasRef.current.width = canvasWidth
    canvasRef.current.height = canvasHeight
  }

  function draw(timestamp) {
    const grassSpacing = 10

    //ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, canvasWidth, canvasHeight) // clear canvas

    // Create linear gradient
    const grad = ctx.createLinearGradient(0, 0, 0, canvasHeight)

    console.log('draw called - darkmode: ' + darkMode)
    if (darkMode) {
      grad.addColorStop(0, 'red')
    } else {
      grad.addColorStop(0, 'blue')
    }
    grad.addColorStop(1, 'rgb(0, 0, 0)')

    // Fill rectangle with gradient
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    // Green
    ctx.fillStyle = 'rgb(18 124 47 / 100%)'

    // Draw many grass
    for (let i = 0; i < 20; i++) {
      ctx.beginPath()
      ctx.moveTo(i * grassSpacing, canvasHeight)
      ctx.lineTo(i * grassSpacing + 6, canvasHeight)
      ctx.lineTo(i * grassSpacing + 3, canvasHeight - 100)
      ctx.closePath()
      ctx.fill()
    }
    // Draw 1 grass
    // ctx.beginPath()
    // ctx.moveTo(20, canvasHeight)
    // ctx.lineTo(26, canvasHeight)
    // ctx.lineTo(posCurrent, canvasHeight - 100)
    // ctx.fill()

    // Sway dat grasss
    // if (posCurrent <= posStart - 4) {
    //   direction = 'right'
    // } else if (posCurrent >= posStart + 4) {
    //   direction = 'left'
    // }

    // if (direction == 'left') {
    //   posCurrent--
    // } else if (direction == 'right') posCurrent++

    //console.log('animationID before request: ' + animationID)

    //setTimeout(() => {
    //requestRef.current = window.requestAnimationFrame(draw)
    //console.log('animationID in draw: ' + animationID)
    //}, 1000 / fps)
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => {
        console.log('mouse is moving')
      }}
    />
  )
}

export default CanvasComponent
