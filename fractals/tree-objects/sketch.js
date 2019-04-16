const bg = 10
let tree;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(30)

  let a = createVector(width / 2, height),
      b = createVector(width / 2, height * 0.64);

  let root = new Branch(a, b)

  let grayColors = ['#FFFFFF', '#EEEEEE', '#DDDDDD', '#CCCCCC', 'BBBBBB', '#AAAAAA', '#999999']
  let colors = ['rgba(255, 255, 255, 50)', 'rgba(245, 245, 245, 50)', 'rgba(235, 235, 235, 50)', 'rgba(225, 225, 225, 50)', 'rgba(215, 215, 215, 50)', 'rgba(205, 205, 205, 50)', 'rgba(195, 195, 195, 50)', 'rgba(185, 185, 185, 50)']
  tree = new ColoredTree(root, angle=90, ratio=0.67, trunkWidth=50, widthRatio=0.80, inDegrees=true)
}

function draw() {
  background(bg)
  stroke(255 - bg)

  tree.draw()
}

function mouseReleased() {
  tree.nextGeneration()
}