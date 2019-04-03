function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()
}

function draw() {
  background(0)
  circle(width / 4, height / 2, 100)
  circle(width * 3 / 4, height / 2, 100)
}