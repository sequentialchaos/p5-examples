function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(30)
}

function draw() {
  background(127)
  translate(width / 2, height / 2)
  
  let s_ratio = 0.3
  let x_ratio = map(frameCount % 150, 0, 150, -0.5, 0.5)
  let y_ratio = map(frameCount % 150, 0, 150, -0.5, 0.5)
  drawSquare(0, 0, min(width, height) * 0.70, s_ratio, x_ratio, y_ratio)
}

function drawSquare(cx, cy, s, s_ratio, x_ratio, y_ratio, i=0) {

  if (i >= 0) {
    fill('black')
    rect(cx - s / 2, cy - s / 2, s, s)
  }

  if (s > 4) {
    // center
    drawSquare(cx, cy, s * s_ratio, 0, 0, 0, i+1)

    // top-left
    push()
    stroke('red')
    drawSquare(cx - s * x_ratio, cy - s * y_ratio, s * s_ratio, s_ratio, x_ratio, y_ratio, i+1)
    pop()

    // top-right
    push()
    stroke('blue')
    drawSquare(cx + s * x_ratio, cy - s * y_ratio, s * s_ratio, s_ratio, x_ratio, y_ratio, i+1)
    pop()

    // bottom-right
    push()
    stroke('blue')
    drawSquare(cx + s * x_ratio , cy + s * y_ratio, s * s_ratio, s_ratio, x_ratio, y_ratio, i+1)
    pop()
    
    // bottom-left
    push()
    stroke('red')
    drawSquare(cx - s * x_ratio, cy + s * y_ratio, s * s_ratio, s_ratio, x_ratio, y_ratio, i+1)
    pop()
  }
}