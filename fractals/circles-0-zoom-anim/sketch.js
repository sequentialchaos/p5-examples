let maxFrameCount
function setup() {
  createCanvas(innerWidth, innerHeight)
  maxFrameCount = 800
}

function draw() {
  background(10)
  translate(width / 2, height / 2)
  fractal(0, 0, min(width, height), HALF_PI, frameCount / maxFrameCount)
  if (frameCount >= maxFrameCount / 2) {
    noLoop()
  }
}

function fractal(cx, cy, d, angle, ratio, i=0) {
  if (i > 0) {
    noFill()
    circle(cx, cy, d)
  }

  if (d > 1) {
    push()
    stroke('green')
    fractal(cx + d * ratio * cos(angle + PI / 2), cy + d * ratio * sin(angle + PI / 2), d * ratio, angle, ratio, i+1)
    pop()

    push()
    stroke('red')
    fractal(cx + d * ratio * cos(angle + PI * 3/2), cy + d * ratio * sin(angle + PI * 3/2), d * ratio, angle, ratio, i+1)
    pop()
  }
}