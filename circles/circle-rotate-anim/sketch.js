let speed, angle;
let cx, cy, radius;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(60)

  speed = TWO_PI * 0.002
  angle = 0
  cx = width / 2
  cy = height / 2
  radius = min(width, height) / 4
}

function draw() {
  background(50)

  translate(cx, cy)
  rotate(angle)
  circle(0, 0, radius)
  push()
  strokeWeight(5)
  line(0, 0, radius, 0)
  pop()

  angle += speed
  console.log(angle)
}