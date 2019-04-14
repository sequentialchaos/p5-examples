let a, b, c;
let f, g, h;
let triangle, radius;
let lowerBound, upperBound;

function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()

  radius = min(width, height) * 0.45

  f = random(0, TWO_PI)
  g = random(f + TWO_PI / 4, f + PI)
  h = random(g + TWO_PI / 4, g + PI)
  
  a = new Point(radius * cos(f), radius * sin(f))
  b = new Point(radius * cos(g), radius * sin(g))
  c = new Point(radius * cos(h), radius * sin(h))

  triangle = new Triangle(a, b, c)

  lowerBound = 0
  upperBound = 8
}

function draw() {
  background(127)
  translate(width * 0.5, height * 0.5)
  
  push()
  let colorLimit = 100
  colorMode(HSB, colorLimit)

  for (let n = lowerBound; n <= upperBound; n++) {
    let hue = map(n, lowerBound, upperBound, colorLimit * 0.4, colorLimit * 0.9)
    fill(hue, colorLimit * 0.7, colorLimit * 0.7)
    sierpinski(triangle, n)
  }
  pop()

  push()
  fill('black')
  textStyle(BOLD)
  textSize(map(radius, 0, 1000, 12, 80))
  textAlign(CENTER)
  text("The Sierpinski Triangle", 0, radius * 1.05)
  pop()
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
