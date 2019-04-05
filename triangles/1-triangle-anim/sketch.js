let a, b
let x1, y1, x2, y2, x3, y3

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(10)

  a = -width * 0.01
  b = a * -1

  x1 = width * 0.3
  y1 = height * 0.7
  x2 = width * 0.5
  y2 = height * 0.3
  x3 = width * 0.7
  y3 = height * 0.7
}

function draw() {
  background(0)
  triangle(x1, y1, x2, y2, x3, y3)
  x1 = (x1 + random(a, b)) 
  y1 = (y1 + random(a, b)) 
  x2 = (x2 + random(a, b)) 
  y2 = (y2 + random(a, b)) 
  x3 = (x3 + random(a, b)) 
  y3 = (y3 + random(a, b))
}

function triangle(x1, y1, x2, y2, x3, y3) {
  beginShape()
  vertex(x1, y1)
  vertex(x2, y2)
  vertex(x3, y3)
  endShape()
}