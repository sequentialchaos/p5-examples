let r, a, b, n;
let slider;

function setup() {
  let length = min(innerWidth, innerHeight)

  let canvas = createCanvas(length * 0.7, length * 0.7)
  canvas.position(innerWidth / 2 - width / 2, innerHeight / 2 - width / 2)

  let title = createDiv('<h1>Superellipse</h1>')
  title.position(canvas.position().x, canvas.position().y - height * 0.125)
  title.style('width', floor(width) + 'px')
  title.style('text-align', 'center')

  frameRate(30)

  slider = createSlider(0.01, 4, 2, 0.01)
  slider.position(canvas.position().x * 1.015, canvas.position().y * 1.03)
  slider.size(width * 0.15, 10)

  r = min(width, height) * 0.49
  a = r 
  b = r 
}

function draw() {
  background(40)
  translate(width/2, height/2)
  stroke(215)
  strokeWeight(10)

  noFill()
  n = slider.value()
  superEllipse(a, b, n, 200)
}

function superEllipse(a, b, n, numPoints) {
  beginShape()
  for (let i = 1; i <= numPoints; i++) {
    const angle = map(i, 1, numPoints, 0, TWO_PI)
    const point = superEllipsePoint(a, b, n, angle)
    vertex(point.x, point.y)
  }
  endShape(CLOSE)
}

function superEllipsePoint(a, b, n, angle) {
  const x = getX(a, n, angle)
  const y = getY(b, n, angle)
  const point = createVector(x, y)
  return point
}

function getX(a, n, angle) {
  const c = pow(abs(cos(angle)), 2/n)
  const d = a * sign(cos(angle))
  return c * d
}

function getY(b, n, angle) {
  const c = pow(abs(sin(angle)), 2/n)
  const d = b * sign(sin(angle))
  return c * d
}

function sign(t) {
  if (t < 0) {
    return -1
  } else if (t == 0) {
    return 0
  } else {
    return 1
  }
}