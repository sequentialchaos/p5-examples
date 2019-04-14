let radius;
let x1, y1, x2, y2, x3, y3;

function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()

  radius_ratio = 0.47
  radius = min(width, height) * radius_ratio

  x1 = radius * cos(-PI / 2)
  y1 = radius * sin(-PI / 2)
  x2 = radius * cos(PI / 6)
  y2 = radius * sin(PI / 6)
  x3 = radius * cos(PI * 5 / 6)
  y3 = radius * sin(PI * 5 / 6)
}

function draw() {
  background(127)
  translate(width * 0.50, height * radius_ratio * 1.25)
  tunnel(x1, y1, x2, y2, x3, y3, 12)
}

function triangle(x1, y1, x2, y2, x3, y3) {
  beginShape()
  vertex(x1, y1)
  vertex(x2, y2)
  vertex(x3, y3)
  endShape()
}

function tunnel(x1, y1, x2, y2, x3, y3, limit) {
  if (limit <= 0) {
    return
  }

  noStroke()
  limit % 2 == 0 ? fill(0) : fill(230);
  triangle(x1, y1, x2, y2, x3, y3)
  
  tunnel(
    (x1 + x2) / 2,
    (y1 + y2) / 2,
    (x1 + x3) / 2,
    (y1 + y3) / 2,
    (x2 + x3) / 2,
    (y2 + y3) / 2,
    limit - 1
  )
}