let rows = 2
let circles = rows - 1
const maxRows = 30
function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(15)
}

function draw() {
  background(0)
  fill(100)
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
  if ((frameCount % (maxRows * 2)) < maxRows) {
    rows += 1 
  } else {
    rows -= 1
  }
  circles = rows - 1
}