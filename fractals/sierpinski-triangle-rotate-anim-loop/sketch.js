let a, b, c;
let triangle, radius;
let n, increment, lowerBound, upperBound;
let angle = 0

function setup() {
  createCanvas(innerWidth, innerHeight)

  radius = min(width, height) * 0.45

  a = new Point(radius * cos(-PI / 2), radius * sin(-PI / 2))
  b = new Point(radius * cos(PI / 6), radius * sin(PI / 6))
  c = new Point(radius * cos(PI * 5 / 6), radius * sin(PI * 5 / 6))

  triangle = new Triangle(a, b, c)

  n = 0
  increment = 1
  lowerBound = n * 1
  upperBound = 6

  angle = 0
}

function draw() {
  background(127)
  translate(width * 0.5, height * 0.5)
  rotate(angle)

  push()
  let colorLimit = 100
  colorMode(HSB, colorLimit)
  for (let i = 0; i <= n; i++) {
    let hue = map(i, lowerBound, upperBound, colorLimit * 0.4, colorLimit * 0.9)
    fill(hue, colorLimit * 0.7, colorLimit * 0.7)
    sierpinski(triangle, i)
  }
  pop()

  if (frameCount % 60 == 0) {
    if (n == upperBound || (n == lowerBound && increment < 0)) {
      increment *= -1
    }
    n += increment
  }
  angle += TWO_PI / 200
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  midPoint(that) {
    let x = (this.x + that.x) / 2,
        y = (this.y + that.y) / 2;
    return new Point(x, y)
  }

  drawLineTo(that) {
    line(this.x, this.y, that.x, that.y)
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  } 

  draw() {
    this.a.drawLineTo(this.b)
    this.b.drawLineTo(this.c)
    this.c.drawLineTo(this.a)
  }

  fill() {
    beginShape()
    vertex(this.a.x, this.a.y)
    vertex(this.b.x, this.b.y)
    vertex(this.c.x, this.c.y)
    endShape(CLOSE)
  }
}

function sierpinski(triangle, limit) {
  if (limit == 0) {
    triangle.fill()
  } else {

    let top = new Triangle(
      triangle.a,
      triangle.a.midPoint(triangle.c),
      triangle.a.midPoint(triangle.b)
    )
    let bottom_right = new Triangle(
      triangle.b,
      triangle.b.midPoint(triangle.a),
      triangle.b.midPoint(triangle.c)
    )
    let bottom_left = new Triangle(
      triangle.c,
      triangle.c.midPoint(triangle.a),
      triangle.c.midPoint(triangle.b)
    )
    
    sierpinski(top, limit - 1)
    sierpinski(bottom_right, limit - 1)
    sierpinski(bottom_left, limit - 1)
  }
}
