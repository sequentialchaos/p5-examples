class Tree {
  constructor() {
    this.leaves = []
    this.branches = []

    for (let i = 0; i < 500; i++) {
      this.leaves.push(new Leaf())
    }

    let pos = createVector(width / 2, height)
    let dir = createVector(0, -1)
    let rootBranch = new Branch(null, pos, dir)

    this.branches.push(rootBranch)

    let current = rootBranch

    let found = false
    while (!found) {
      for (let i = 0; i < this.leaves.length; i++) {
        let d = p5.Vector.dist(current.pos, this.leaves[i].pos)
        if (d < max_dist) {
          found = true
        }
      }

      if (!found) {
        let branch = current.next()
        current = branch
        this.branches.push(current)
      }
    }
  }

  grow() {
    for (let leaf of this.leaves) {
      let closestBranch = null
      let record = 100000
      for (let branch of this.branches) {
        let d = p5.Vector.dist(leaf.pos, branch.pos)
        if (d < min_dist) {
          leaf.reached = true
          closestBranch = null
          break
        } else if (d < record) {
          closestBranch = branch
          record = d
        } 
      }
      if (closestBranch != null) {
        let newDir = p5.Vector.sub(leaf.pos, closestBranch.pos)
        newDir.normalize()
        closestBranch.dir.add(newDir)
        closestBranch.count++
      }
    }
    
    for (let i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1)
      }
    }

    for (let i = this.branches.length - 1; i >= 0; i--) {
      let branch = this.branches[i]
      if (branch.count > 0) {
        branch.dir.div(branch.count + 1)
        this.branches.push(branch.next())
      }
      branch.reset()
    }
  }

  show() {
    for (let leaf of this.leaves) {
      leaf.show()
    }

    for (let branch of this.branches) {
      console.log(branch)
      branch.show()
    }
  }

}