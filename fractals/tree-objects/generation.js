class Generation {
  constructor(number) {
    this.number = number
    this.branches = []
  }

  draw(weight) {
    for (let branch of this.branches) {
      branch.draw(weight)
    }
  }
  
  addBranch(branch) {
    this.branches.push(branch)
  }

  *[Symbol.iterator]() {
    for (let branch of this.branches) {
      yield branch
    }
  }
}