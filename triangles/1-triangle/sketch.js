function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)
  noLoop()
}

function draw() {
  triangle(width * 0.3, height * 0.7, width * 0.5, height * 0.3, width * 0.7, height * 0.7)
}

function triangle(x1, y1, x2, y2, x3, y3) {
  beginShape()
  vertex(x1, y1)
  vertex(x2, y2)
  vertex(x3, y3)
  endShape()
}