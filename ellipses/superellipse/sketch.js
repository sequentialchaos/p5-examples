let aSlider, bSlider, nSlider;

function setup() {
  createCanvas(innerWidth, innerHeight)

  frameRate(10)

  const header = {
    x: width * 0.05,
    y: height * 0.05,
    width: width * 0.9,
    height: height * 0.1
  }

  let sliderHeight = 20

  nSlider = createSlider(0.01, 4, 2, 0.01)
  nSlider.position(width * 0.02, height * 0.01)
  nSlider.size(width * 0.96, sliderHeight)

  aSlider = createSlider(1, width * 0.35, width * 0.35, 1)
  aSlider.position(width * 0.02, height * 0.04)
  aSlider.size(width * 0.96, sliderHeight)

  bSlider = createSlider(1, height * 0.35, height * 0.35, 1)
  bSlider.position(width * 0.02, height * 0.07)
  bSlider.size(width * 0.96, sliderHeight)
}

function draw() {
  translate(width/2, height/2)

  background(40)
  stroke(215)
  strokeWeight(10)
  noFill()

  a = aSlider.value()
  b = bSlider.value()
  n = nSlider.value()
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