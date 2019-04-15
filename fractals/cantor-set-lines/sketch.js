let xPadding, yPadding;

function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()

  xPadding = floor(width * 0.01)
  yPadding = floor(height * 0.02)
}

function draw() {
  strokeWeight(2)
  cantor(xPadding, yPadding, width - xPadding * 2, yPadding)
}

function cantor(x, y, length, yPadding) {
  if (length > 1) {
    line(x, y, x + length, y)
    cantor(x, y + yPadding, length / 3, yPadding)
    cantor(x + length * 2 / 3, y + yPadding, length / 3, yPadding)
  }
}