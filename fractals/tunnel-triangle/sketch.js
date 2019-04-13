let p;
let x1, y1, x2, y2, x3, y3;

function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()

  p = min(width, height) * 0.06

  x1 = p
  y1 = height - p
  x2 = width / 2
  y2 = p
  x3 = width - p
  y3 = height - p
}

function draw() {
  background(127)
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