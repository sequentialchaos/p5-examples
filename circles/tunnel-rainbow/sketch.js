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
  if (r > 1)  {
    r *= 2 / 3
    fill(r * 1.1, diagonal * 0.6, diagonal * 0.8)
    drawTunnel(x, y, r)
  }
}