let xPadding, yPadding;

function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()

  xPadding = floor(width * 0.005)
  yPadding = floor(height * 0.005)
}

function draw() {
  strokeWeight(2)
  cantor(xPadding, yPadding, width - xPadding * 2, height - yPadding * 2, xPadding, yPadding)
}

function cantor(x, y, w, h, xPadding, yPadding) {
  if (w > 1 && h > 1) {
    line(x, y, x + w, y)
    line(x, y, x, y + h)
    line(x + w, y, x + w, y + h)

    let next_w = w * 1/2 - xPadding * 3/2

    cantor(
      x + xPadding, 
      y + yPadding, 
      next_w, 
      h * 0.5, 
      xPadding, 
      yPadding
    )

    cantor(
      x + xPadding * 2 + next_w, 
      y + yPadding, 
      next_w, 
      h * 0.5, 
      xPadding, 
      yPadding
    )
  }
}