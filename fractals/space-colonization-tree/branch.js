class Branch {
  constructor(parent, pos, dir) {
    this.parent = parent
    this.pos = pos
    this.dir = dir
    this.origDir = this.dir.copy()
    this.count = 0
    this.len = 10
  }

  reset() {
    this.dir = this.origDir.copy()
    this.count = 0
  }

  next() {
    let nextDir = p5.Vector.mult(this.dir, this.len)
    let nextPos = p5.Vector.add(this.pos, nextDir)
    let nextBranch = new Branch(this, nextPos, this.dir.copy())
    return nextBranch
  }

  show() {
    if (this.parent != null) {
      stroke(255)
      line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y)
    }
  }
}