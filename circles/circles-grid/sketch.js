let rows = 10
let circles = rows - 1
function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()
}

function draw() {
  background(0)
  fill(200)
  let cellWidth = width / rows
  let cellHeight = height / rows
  for (let row = 1; row <= circles; row++) {
    for (let col = 1; col <= circles; col++) {
      let r = (cellWidth + cellHeight) / 6
      let x = col * cellWidth
      let y = row * cellHeight
      circle(x, y, r)
    }
  }
}