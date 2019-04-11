const a = new p5(function (sketch) {

  sketch.setup = function () {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function () {
    sketch.background(220)
    smileyFace(sketch)
    // mole
    sketch.fill(0)
    sketch.circle(sketch.width * 0.64, sketch.height * 0.75, 7)

    // mole hair
    sketch.line(sketch.width * 0.64, sketch.height * 0.75, sketch.width * 0.68, sketch.height * 0.79)
  }
}, 'a')

const b = new p5(function (sketch) {

  sketch.setup = function () {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function () {
    sketch.background(170)
    indifferentFace(sketch)
    mustache(sketch)
  }
}, 'b')

const c = new p5(function (sketch) {

  sketch.setup = function () {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function () {
    sketch.background(120)
    surprisedFace(sketch)
  }
}, 'c')

const d = new p5(function (sketch) {

  sketch.setup = function () {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function () {
    sketch.background(70)
    frownyFace(sketch)


  }
}, 'd')

function label(sketch, name, color) {
  sketch.push()
  sketch.fill(color)
  sketch.circle(sketch.width / 2, sketch.height / 2, sketch.width / 4)
  sketch.fill(0)
  sketch.textAlign(sketch.CENTER, sketch.CENTER)
  sketch.textSize(60)
  sketch.text(name, sketch.width / 2, sketch.height / 2)
  sketch.pop()
}

function frownyFace(sketch) {
  sketch.push()
  sketch.circle(sketch.width / 2, sketch.height / 2, sketch.width / 4)
  sketch.fill(0)
  sketch.circle(sketch.width * 0.4, sketch.height * 0.4, 10)
  sketch.circle(sketch.width * 0.6, sketch.height * 0.4, 10)
  sketch.noFill()
  sketch.strokeWeight(6)
  sketch.arc(sketch.width * 0.5, sketch.height * 0.65, sketch.width * 0.3, sketch.height * 0.17, sketch.PI, sketch.TWO_PI)
  sketch.pop()
}

function smileyFace(sketch) {
  sketch.push()
  sketch.circle(sketch.width / 2, sketch.height / 2, sketch.width / 4)
  sketch.fill(0)
  sketch.circle(sketch.width * 0.4, sketch.height * 0.4, 10)
  sketch.circle(sketch.width * 0.6, sketch.height * 0.4, 10)
  sketch.noFill()
  sketch.strokeWeight(6)
  sketch.arc(sketch.width * 0.5, sketch.height * 0.62, sketch.width * 0.3, sketch.height * 0.13, 0, sketch.PI)
  sketch.pop()
}

function surprisedFace(sketch) {
  sketch.push()
  sketch.circle(sketch.width / 2, sketch.height / 2, sketch.width / 4)
  sketch.fill(0)
  sketch.circle(sketch.width * 0.4, sketch.height * 0.4, 10)
  sketch.circle(sketch.width * 0.6, sketch.height * 0.4, 10)
  sketch.ellipse(sketch.width * 0.5, sketch.height * 0.62, sketch.width * 0.2, sketch.height * 0.2)
  sketch.pop()
}

function indifferentFace(sketch) {
  sketch.push()
  sketch.circle(sketch.width / 2, sketch.height / 2, sketch.width / 4)
  sketch.fill(0)
  sketch.circle(sketch.width * 0.4, sketch.height * 0.4, 10)
  sketch.circle(sketch.width * 0.6, sketch.height * 0.4, 10)
  sketch.noFill()
  sketch.strokeWeight(6)
  sketch.line(sketch.width * 0.35, sketch.height * 0.62, sketch.width * 0.65, sketch.height * 0.62)
  sketch.pop()
}

function mustache(sketch) {
  sketch.push()
  sketch.fill(0)
  sketch.arc(sketch.width * 0.5, sketch.height * 0.60, sketch.width * 0.2, sketch.height * 0.17, sketch.PI, sketch.TWO_PI)
  sketch.pop()
}