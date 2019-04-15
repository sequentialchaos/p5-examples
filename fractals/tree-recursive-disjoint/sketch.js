function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()
}

function draw() {
  translate(width / 2, height)
  branch(height / 2, 8)
}

function branch(len, weight) {
  strokeWeight(weight)
  line(0, 0, 0, -len)
  if (len > 4) {
    push()
    rotate(-PI / 4)
    translate(0, -len)
    branch(len / 2, weight - 1)
    pop()

    push()
    rotate(PI / 4)
    translate(0, -len)
    branch(len / 2, weight - 1)
    pop()
  }
}