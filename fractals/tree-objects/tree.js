class Tree {
  constructor(root, trunkWidth=10, widthRatio=0.6) {
    this.generations = []
    let trunk = new Generation(0)
    trunk.addBranch(root)
    this.addGeneration(trunk)
    this.trunkWidth = trunkWidth
    this.widthRatio = widthRatio
  }

  draw() {
    for (let generation of this.generations) {
      let weight = this.trunkWidth * Math.pow(this.widthRatio, generation.number)
      // console.log('ratio', this.widthRatio)
      // console.log('width', this.trunkWidth)
      // console.log('generation', generation.number)
      // console.log(weight)
      generation.draw(weight)
    }
  }

  drawGeneration(n) {
    this.generations[n].draw()
  }

  addGeneration(generation) {
    this.generations.push(generation)
  }

  nextGeneration(angle=45, ratio=0.67, inDegrees=true) {
    let generation = new Generation(this.length())
    let lastGeneration = this.generations[this.length() - 1]
    for (let branch of lastGeneration) {
      generation.addBranch(branch.off(angle, ratio, inDegrees=true))
      generation.addBranch(branch.off(-angle, ratio, inDegrees=true))
    }
    this.addGeneration(generation)
    return generation
  }

  flattenedBranches() {

  }

  length() {
    return this.generations.length
  }
}

class SymmetricTree extends Tree {
  constructor(root, angle, ratio, trunkWidth, widthRatio, inDegrees=false) {
    super(root, trunkWidth, widthRatio)
    this.angle = angle
    this.ratio = ratio
    this.inDegrees = inDegrees
  }

  nextGeneration() {
    let generation = new Generation(this.length())
    let lastGeneration = this.generations[this.length() - 1]

    for (let branch of lastGeneration) {
      let right = branch.off(this.angle, this.ratio, this.inDegrees)
      let left = branch.off(this.angle * -1, this.ratio, this.inDegrees)
      generation.addBranch(right)
      generation.addBranch(left)
    }
    
    this.addGeneration(generation)
    return generation
  }

}