let cx, cy, r;
let n, limit;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(20) 

  cx = width / 2
  cy = height / 2
  r = min(width, height) * 0.45
  
  circumference = TWO_PI * r
  point_radius = r * 0.06

  n = 1
  limit = ceil(circumference / n / (point_radius * 2))
}

function draw() {
  background(127)
  fill(10)
  circlePoints(cx, cy, r, n, point_radius)

  floor(frameCount / limit) % 2 == 0 ? n++ : n--
}

function circlePoints(cx, cy, r, n, point_radius) {
  const angle = TWO_PI / n
  for (let a = -HALF_PI; a < -HALF_PI + TWO_PI; a += angle) {
    let x = cx + cos(a) * r
    let y = cy + sin(a) * r
    circle(x, y, point_radius)
  }
}