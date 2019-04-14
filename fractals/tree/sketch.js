let b, t;
let angle, ratio;
let tree;

function setup() {
  createCanvas(innerWidth, innerHeight)
  noLoop()
  
  b = new Point(width * 0.50, height * 0.05)
  t = new Point(width * 0.50, height * 0.95)
  angle = PI / 4
  ratio = 0.5

  tree = new Tree(b, t, angle, ratio)
  tree.generate(1)
}

function draw() {
  
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  
  dx(that) {
    return this.x - that.x
  }

  dy(that) {
    return this.y - that.y
  }

  distance(that) {
    return sqrt(this.dx(that) ** 2, this.dy(that) ** 2)
  }

  angle(that) {
    return atan(this.dy(that), this.dx(that))
  }
}

class Tree {
  constructor(bottom, top, angle, ratio) {
    this.bottom = bottom
    this.top = top
    this.angle = angle
    this.ratio = ratio
    this.branch = bottom.distance(top) * (1 - ratio)

    this.p0 = new Point(
      this.bottom.x + this.top.dx(this.bottom) * this.ratio,
      this.bottom.y + this.top.dy(this.bottom) * this.ratio
    )
    this.p1 = new Point(
      this.p0.x + cos(this.top.angle(this.bottom) + this.angle) * this.branch,
      this.p0.y + sin(this.top.angle(this.bottom) * this.angle) * this.branch
    )
    this.p2 = new Point(
      this.p0.x + cos(this.top.angle(this.bottom) - this.angle) * this.branch,
      this.p0.y + sin(this.top.angle(this.bottom) - this.angle) * this.branch
    )
  }

  generate(limit) {
    this.drawTrunk()
    if (limit <= 0) {
      this.drawBranches()
    } else {
      this.bottom = this.p0
      this.top = this.p1
      this.generate(limit - 1)

      this.top = this.p2
      this.generate(limit - 1)
    }
  }

  drawTrunk() {
    line(this.bottom.x, this.bottom.y, this.p0.x, this.p0.y)
  }

  drawBranches() {
    line(this.p1.x, this.p1.y, this.p0.x, this.p0.y)
    line(this.p1.x, this.p1.y, this.p2.x, this.p2.y)
  }
}
