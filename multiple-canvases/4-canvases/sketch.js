const a = new p5 (function(sketch) {

  sketch.setup = function() {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function() {
    sketch.background(220)
    label(sketch, 'a', 'springgreen')
  }
}, 'a')

const b = new p5 (function(sketch) {

  sketch.setup = function() {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function() {
    sketch.background(170)
    label(sketch, 'b', 'cyan')
  }
}, 'b')

const c = new p5 (function(sketch) {

  sketch.setup = function() {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function() {
    sketch.background(120)
    label(sketch, 'c', 'mediumorchid')
  }
}, 'c')

const d = new p5 (function(sketch) {

  sketch.setup = function() {
    let parent = sketch.canvas.parentElement.getBoundingClientRect()
    sketch.createCanvas(parent.width, parent.height)
    sketch.noLoop()
  }

  sketch.draw = function() {
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
  sketch.circle(sketch.width * 0.4, sketch.height * 0.4)
  sketch.circle(sketch.width * 0.6, sketch.height * 0.4)
  sketch.pop()
}