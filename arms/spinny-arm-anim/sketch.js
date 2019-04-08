let x, y
let numSegments, length
let angle1, angle2

function setup() {
  createCanvas(innerWidth, innerHeight)
  strokeWeight(20)
  stroke(0, 255, 255, 100);
  
  x = width * 0.5
  y = height * 0.5

  numSegments = 10
  length = min(width, height) / 2 / (numSegments - 2)

  angle1 = 0
  angle2 = PI / 2
}

function draw() {
  background(0)

  push()
  segment(x, y, angle1, length)
  segment(length, 0, angle2, length)
  for (let n = 0; n < (numSegments - 2) / 2; n++) {
    segment(length, 0, angle1 * 2, length)
    segment(length, 0, angle2 * 2, length)
  }
  pop()

  angle1 += PI * 0.015
  angle2 += PI * 0.010
}

function segment(x, y, angle, length) {
  translate(x, y)
  rotate(angle)
  line(0, 0, length, 0)
}

