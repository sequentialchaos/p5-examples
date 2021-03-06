let numCircles = 1
const maxCircles = 60
let increment = 1

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(15)
}

function draw() {
  background(0)

  const x_padding = width / numCircles / 3
  const x_radius = (width - (x_padding * (numCircles + 1))) / numCircles / 2
  
  const y_padding = height / numCircles / 3
  const y_radius = (height - (y_padding * (numCircles + 1))) / numCircles / 2

  let x = x_padding + x_radius
  let y = y_padding + y_radius
  
  for (let n = 0; n < numCircles; n++) {
    circle(x, y, x_radius)
    circle(x, height - y, x_radius)
    x += x_radius + x_padding + x_radius
    y += y_radius + y_padding + y_radius
  }

  if (frameCount > 0 && frameCount % maxCircles == 0) {
    increment *= -1
  }

  numCircles += increment
}