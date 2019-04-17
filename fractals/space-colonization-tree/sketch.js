let tree;
let max_dist = 80,
    min_dist = 5;

function setup() {
  createCanvas(400, 400)
  frameRate(60)
  
  tree = new Tree()
}

function draw() {
  background(40)
  tree.show()
  tree.grow()
}