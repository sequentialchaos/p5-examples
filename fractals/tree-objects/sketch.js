const bg = 50
let tree;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(30)

  let a = createVector(width / 2, height),
      b = createVector(width / 2, height * 0.5);

  let root = new Branch(a, b)

  tree = new SymmetricTree(root, angle=90, ratio=0.7, trunkWidth=30, widthRatio=0.7, inDegrees=true)
}

function draw() {
  background(bg)
  stroke(255 - bg)

  tree.draw()
}

function mousePressed() {
  tree.nextGeneration()
}