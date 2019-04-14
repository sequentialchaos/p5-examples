let ratio, increment;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(20)

  ratio = 0.01
  increment = ratio * 0.5
}

function draw() {
  background(127)
  translate(width / 2, height / 2)
  drawCircle(0, 0, min(width, height) * 2.00, ratio)

  if (ratio >= 0.50 || (ratio <= 0.00 && increment < 0)) {
    increment *= -1
  }
  ratio += increment
}

function drawCircle(cx, cy, d, ratio, i=0) {
  if (i > 0) {
    // noFill()
    circle(cx, cy, d)
  }

  if (d > 2) {
    push()
    fill('green')
    drawCircle(cx, cy - d * ratio, d * ratio, ratio * 0.5, i+1)
    pop()

    push()
    fill('purple')
    drawCircle(cx - d * ratio, cy, d * ratio, ratio * 0.5, i+1)
    pop()

    push()
    fill('blue')
    drawCircle(cx + d * ratio, cy, d * ratio, ratio * 0.5, i+1)
    pop()

    push()
    fill('red')
    drawCircle(cx, cy + d * ratio, d * ratio, ratio * 0.5, i+1)
    pop()

    push()
    fill('yellow')
    drawCircle(cx, cy, d * ratio / 2, ratio, i+1)
    pop()
  }
}