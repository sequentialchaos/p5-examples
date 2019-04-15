let maxFrameCount
function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(20)
}

function draw() {
  background(10)
  translate(width / 2, height / 2)
  fractal(0, 0, min(width, height) * 0.5, frameCount / 100 % TWO_PI - HALF_PI, 0.5)
}

function fractal(cx, cy, d, angle, ratio, i=0) {
  if (i == 0) {
    fill(180)
  }
  circle(cx, cy, d)

  if (d > 1) {
    push()
    fill(200, 0, 200, 100)
    fractal(
      cx + d * ratio * cos(angle * (i-1) + PI / 2), 
      cy + d * ratio * sin(angle * (i-1) + PI / 2), 
      d * ratio, 
      angle, 
      ratio, 
      i+1
    )
    pop()

    push()
    fill(0, 200, 200, 100)
    fractal(
      cx + d * ratio * cos(angle * (i-1) + PI * 3/2), 
      cy + d * ratio * sin(angle * (i-1) + PI * 3/2), 
      d * ratio, 
      angle, 
      ratio, 
      i+1
    )
    pop()
  }
}