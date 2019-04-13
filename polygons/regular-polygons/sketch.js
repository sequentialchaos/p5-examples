let cx, cy, r;
let n, limit;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(1) 

  cx = width / 2
  cy = height / 2
  r = min(width, height) * 0.45

  n = 3
  limit = 8
}

function draw() {
  background(127)
  fill(200)
  stroke(55)
  strokeWeight(map(r, 100, 1000, 3, 20))
  regularPolygon(cx, cy, r, n)

  floor(frameCount / limit) % 2 == 0 ? n++ : n--
}

function regularPolygon(cx, cy, r, n) {
  const angle = TWO_PI / n
  beginShape()
  for (let a = -HALF_PI; a < -HALF_PI + TWO_PI; a += angle) {
    let x = cx + cos(a) * r
    let y = cy + sin(a) * r
    vertex(x, y)
  }
  endShape(CLOSE)
}