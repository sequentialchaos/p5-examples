class Branch {
  constructor(a, b) {
    this.a = a
    this.b = b
    this.isLeaf = true
  }

  draw(weight) {
    push()
    strokeWeight(weight)
    line(this.a.x, this.a.y, this.b.x, this.b.y)
    pop()
  }

  off(angle, ratio, inDegrees=false) {
    this.isLeaf = false
    console.log(inDegrees)
    let c = p5.Vector.sub(this.b, this.a)
    inDegrees == true ? c.rotate(radians(angle)) : c.rotate(angle)
    c.mult(ratio)

    let d = p5.Vector.add(this.b, c)
    
    return new Branch(this.b, d)
  }

}