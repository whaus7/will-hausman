'use client'

import React, { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useAppSelector } from '@/lib/hooks'
import { selectDarkmode } from '@/lib/features/darkmode/darkmodeSlice'

const CanvasComponent = (props) => {
  const radius = 15;

  const pathname = usePathname()

  const [size, setSize] = useState([0, 0])
  const [animate, setAnimate] = useState(false)
  const [hexagons, setHexagons] = useState([])

  const darkMode = useAppSelector(selectDarkmode)

  const requestRef = useRef(null)
  const ctxRef = useRef(null)
  const canvasRef = useRef(null)
  const mouseMoveTimer = useRef(null)
  const mouseX = useRef(null)
  const mouseY = useRef(null)
  const prevTimestamp = useRef(null)

  const r = useRef(darkMode ? 23 : 101)
  const g = useRef(darkMode ? 23 : 170)
  const b = useRef(darkMode ? 23 : 255)

  // Images
  //const mountains1 = new Image()
  //mountains1.src = "images/hero/mountains-bg-1.png"

  // Run once on mount, setup the <Canvas>
  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext('2d');
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener("mousemove", (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      setAnimate(true)
      clearTimeout(mouseMoveTimer.current);
    })
    resizeCanvas();
    buildBackground();
  }, [])

  useEffect(() => {
    resizeCanvas();
  }, [pathname])

  // Draw loop, re-render if darkmode, size changes or animate start/pause
  useEffect(() => {
    requestRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(requestRef.current)
    }
  }, [darkMode, size, animate])

  // function buildBackground() {
  //   let arr = []
  //   for (let i = 0; i < 17; i++) {
  //     for (let k = 0; k < window.innerWidth / 72; k++) {
  //       let offSet = k * 74;

  //       arr.push(new Hexagon(i % 2 ? offSet : offSet + 37, i * 20))
  //     }
  //   }
  //   setHexagons(arr)
  // }

  function buildBackground() {
    let arr = []
    for (let i = 0; i < 25; i++) {
      for (let k = 0; k < window.innerWidth / 38; k++) {
        let offSet = k * 38;

        arr.push(new Hexagon(i % 2 ? offSet : offSet + 17, i * 13))
      }
    }
    setHexagons(arr)
  }

  function resizeCanvas() {
    setSize([document.documentElement.clientWidth, 400])
    buildBackground()
  }

  function draw(timestamp) {
    //console.log('timestamp: ' + timestamp)
    const [canvasWidth, canvasHeight] = size;
    const ctx = ctxRef.current;

    let delta = (timestamp - prevTimestamp.current) / 1000;
    prevTimestamp.current = timestamp;
    //console.log('time lapses: ' + (timeLapsed))

    //ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, canvasWidth, canvasHeight) // clear canvas

    // Create linear gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 200)

    if (darkMode) {
      grad.addColorStop(1, 'rgb(255, 140, 0)')
      grad.addColorStop(.5, 'rgb(191, 45, 0)')
      grad.addColorStop(0, 'rgb(20, 21, 22')
    } else {
      grad.addColorStop(1, 'rgb(255, 255, 255)')
      grad.addColorStop(0, 'rgb(101, 170, 255')
    }

    // Draw background behind the hexagon canvas
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvasWidth, 350)

    // Transition the hexagon background
    const speed = 100
    if (darkMode) {
      if (r.current > 23) { r.current -= speed * delta * 2; }
      if (g.current > 23) { g.current -= speed * delta * 3; }
      if (b.current > 23) { b.current -= speed * delta * 4; }
    } else {
      if (r.current < 101) { r.current += speed * delta * 2; }
      if (g.current < 170) { g.current += speed * delta * 3; }
      if (b.current < 255) { b.current += speed * delta * 4; }
    }

    ctx.fillStyle = `rgb(${r.current} ${g.current} ${b.current} / 100%)`

    for (var i = 0; i < hexagons.length; i++) {
      hexagons[i].update();
    }

    //ctx.drawImage(mountains1, 0, 0)

    if (animate) {
      requestRef.current = window.requestAnimationFrame(draw)
    }
  }

  function Hexagon(x, y) {
    this.x = x;
    this.y = y;
    this.dx = x;
    this.dy = y;
    this.radius = radius;
    this.hovered = false;
    this.timerID = false;
    this.opacity = '100';

    this.draw = () => {
      ctxRef.current.beginPath();

      for (let i = 0; i < 6; i++) {
        // Calculate the rotation
        const rotation = (Math.PI / 3) * i;

        // For the first point move to
        if (i === 0) {
          ctxRef.current.moveTo(this.x + (this.radius * Math.cos(rotation)), this.y + (this.radius * Math.sin(rotation)));
        } else {
          // For the rest draw a line
          ctxRef.current.lineTo(this.x + (this.radius * Math.cos(rotation)), this.y + (this.radius * Math.sin(rotation)));
        }
      }

      ctxRef.current.closePath()
      ctxRef.current.fill()
    }

    this.update = () => {
      //console.log('mouse X: ' + mouseX.current)
      //console.log('mouse Y: ' + mouseY.current)

      // Mouse reactivity - scaling
      if (mouseX.current - this.x < 20 &&
        mouseX.current - this.x > -20 &&
        mouseY.current - (this.y - window.scrollY) < 20 &&
        mouseY.current - (this.y - window.scrollY) > -20) {

        if (this.radius > 0 && !this.hovered) {
          this.hovered = true;
          this.timerID = setTimeout(() => {
            this.hovered = false;
            clearTimeout(this.timerID)
          }, 2000) // Time until revert back to full scale
        }
      }

      if (!this.hovered && this.radius < radius) {
        this.radius += .5;
      } else if (this.hovered && this.radius > 0) {
        this.radius -= .5;
      }

      this.draw();
    }
  }

  return (
    <canvas
      ref={canvasRef}
      width={size[0]}
      height={size[1]}
      onMouseMove={(e) => {
        //console.log(e.clientX)
        // mouseX.current = e.clientX
        // mouseY.current = e.clientY
        // setAnimate(true)
        // clearTimeout(mouseMoveTimer.current);

        // Code to execute when the mouse stops moving
        // mouseMoveTimer.current = setTimeout(function () {
        //   setAnimate(false)
        // }, 500);
      }}
      style={{
        position: 'absolute',
        left: 0,
        zIndex: -1,
      }}
    />
  )
}

export default CanvasComponent
