let diagonal
let i = 1
function setup() {
  createCanvas(innerWidth, innerHeight)
  diagonal = floor(sqrt(width**2 + height**2))
  colorMode(HSB, diagonal, diagonal, diagonal);
  frameRate(10)
}

function draw() {
  drawTunnel(width / 2, height / 2, diagonal, i)
  i += 20
}

function drawTunnel(x, y, r, i) {
  circle(x, y, r)
  if (r > 1)  {
    r *= 2 / 3
    fill(r * 1.1, diagonal * 0.6 * (i / 1000), diagonal * 0.8 * (i / 1000))
    drawTunnel(x, y, r, i)
  }
}