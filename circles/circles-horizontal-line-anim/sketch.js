let numCircles = 1
const maxCircles = 30
let increment = 1

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(10)
}

function draw() {
  background(0)

  const x_padding = width / numCircles / 3
  const x_radius = (width - (x_padding * (numCircles + 1))) / numCircles / 2

  let x = x_padding + x_radius
  
  for (let n = 0; n < numCircles; n++) {
    circle(x, height / 2, x_radius)
    x += x_radius + x_padding + x_radius
  }

  if (frameCount > 0 && frameCount % maxCircles == 0) {
    increment *= -1
  }

  numCircles += increment
}