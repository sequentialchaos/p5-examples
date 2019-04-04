function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()
}

function draw() {
  drawTunnel(width / 2, height / 2, (width + height) / 2)
}

function drawTunnel(x, y, r) {
  circle(x, y, r)
  if (r > 1)  {
    r *= 2 / 3
    drawTunnel(x, y, r)
  }
}