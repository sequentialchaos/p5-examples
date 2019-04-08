let diagonal
function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()
  diagonal = floor(sqrt(width**2 + height**2))
  colorMode(HSB, diagonal, diagonal, diagonal);
}

function draw() {
  drawTunnel(width / 2, height / 2, diagonal)
}

function drawTunnel(x, y, r) {
  circle(x, y, r)
  if (r > 3)  {
    r *= 2 / 3
    fill(diagonal * 0.15, diagonal * 0.40, diagonal - r ** 1.05)
    drawTunnel(x, y, r)
  }
}