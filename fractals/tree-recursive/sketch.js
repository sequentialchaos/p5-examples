let bg = 70;

function setup() {
  createCanvas(innerWidth, innerHeight)
}

function draw() {
  background(bg)
  stroke(255 - bg)
  translate(width / 2, height)
  
  let angle = atan(mouseY / mouseX)
  drawBranch(height * 0.3, 8, angle, 0.7)
}

function drawBranch(length, weight, angle, ratio) {
  strokeWeight(weight)
  line(0, 0, 0, -length)
  translate(0, -length)

  if (length > 10) {
    // Left Branch
    push()
    rotate(-angle)
    drawBranch(length * ratio, weight * 0.7, angle, ratio)
    pop()

    // Right Branch
    push()
    rotate(angle)
    drawBranch(length * ratio, weight * 0.7, angle, ratio)
    pop()
  }
}