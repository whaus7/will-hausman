// Globals
let canvas = null
let ctx = null
let canvasWidth = 0
let canvasHeight = 0
let animationID = null
let darkMode = null
const fps = 10

export function init(pref) {
  // TODO animation not canceling, bad ID?
  if (animationID !== null) {
    console.log('cancel animation')
    console.log('animationID in null condition: ' + animationID)
    window.cancelAnimationFrame(animationID)
    animationID = null
  }

  darkMode = pref
  console.log('darkmode init: ' + darkMode)

  ctx = document.getElementById('hero-canvas').getContext('2d')
  canvas = document.getElementById('hero-canvas')
  canvasWidth = canvas.width
  canvasHeight = canvas.height
  console.log('canvas w/h: ' + canvasWidth + '/' + canvasHeight)

  // Initial draw then callback takes over
  animationID = window.requestAnimationFrame(draw)
}

let posStart = 23
let posCurrent = posStart
let direction = 'right'
const grassSpacing = 10

export function draw(timestamp) {
  console.log('timestamp: ' + timestamp)
  console.log('darkmode: ' + darkMode)

  //ctx.globalCompositeOperation = 'destination-over'
  ctx.clearRect(0, 0, canvasWidth, canvasHeight) // clear canvas

  // Create linear gradient
  const grad = ctx.createLinearGradient(0, 0, 0, canvasHeight)
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
  // for (let i = 0; i < 20; i++) {
  //   ctx.beginPath()
  //   ctx.moveTo(i * grassSpacing, canvasHeight)
  //   ctx.lineTo(i * grassSpacing + 6, canvasHeight)
  //   ctx.lineTo(i * grassSpacing + 3, canvasHeight - 100)
  //   ctx.closePath()
  //   ctx.fill()
  // }
  // Draw 1 grass
  ctx.beginPath()
  ctx.moveTo(20, canvasHeight)
  ctx.lineTo(26, canvasHeight)
  ctx.lineTo(posCurrent, canvasHeight - 100)
  ctx.fill()

  // Sway dat grasss
  if (posCurrent <= posStart - 4) {
    direction = 'right'
  } else if (posCurrent >= posStart + 4) {
    direction = 'left'
  }

  if (direction == 'left') {
    posCurrent--
  } else if (direction == 'right') posCurrent++

  console.log('animationID before request: ' + animationID)

  setTimeout(() => {
    animationID = window.requestAnimationFrame(draw)
    console.log('animationID in draw: ' + animationID)
  }, 1000 / fps)
}
