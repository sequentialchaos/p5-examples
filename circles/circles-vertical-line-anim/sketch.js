let numCircles = 1
const maxCircles = 30
let increment = 1

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(10)
}

function draw() {
  background(0)
  
  const y_padding = height / numCircles / 3
  const y_radius = (height - (y_padding * (numCircles + 1))) / numCircles / 2

  let y = y_padding + y_radius
  
  for (let n = 0; n < numCircles; n++) {
    circle(width / 2, y, y_radius)
    y += y_radius + y_padding + y_radius
  }

  if (frameCount > 0 && frameCount % maxCircles == 0) {
    increment *= -1
  }

  numCircles += increment
}