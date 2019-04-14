let radius;
let x1, y1, x2, y2, x3, y3;
let n, increment, lowerbound, upperbound;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(2)

  radius_ratio = 0.47
  radius = min(width, height) * radius_ratio

  x1 = radius * cos(-PI / 2)
  y1 = radius * sin(-PI / 2)
  x2 = radius * cos(PI / 6)
  y2 = radius * sin(PI / 6)
  x3 = radius * cos(PI * 5 / 6)
  y3 = radius * sin(PI * 5 / 6)

  n = 1
  increment = 1
  lowerbound = n * 1
  upperbound = 9
}

function draw() {
  background(127)
  translate(width * 0.50, height * radius_ratio * 1.25)
  tunnel(x1, y1, x2, y2, x3, y3, n, n)
  
  n += increment
  if (n == upperbound || (n == lowerbound && increment < 0)) {
    increment *= -1
  }
}

function triangle(x1, y1, x2, y2, x3, y3) {
  beginShape()
  vertex(x1, y1)
  vertex(x2, y2)
  vertex(x3, y3)
  endShape()
}

function tunnel(x1, y1, x2, y2, x3, y3, limit, initial_limit) {
  if (limit <= 0) {
    return
  }

  noStroke()
  if (initial_limit % 2 == 0) {
    limit % 2 == 0 ? fill(50) : fill(205);
  } else {
    limit % 2 == 0 ? fill(205) : fill(50);
  }
  
  triangle(x1, y1, x2, y2, x3, y3)
  
  tunnel(
    (x1 + x2) / 2,
    (y1 + y2) / 2,
    (x1 + x3) / 2,
    (y1 + y3) / 2,
    (x2 + x3) / 2,
    (y2 + y3) / 2,
    limit - 1,
    initial_limit
  )
}