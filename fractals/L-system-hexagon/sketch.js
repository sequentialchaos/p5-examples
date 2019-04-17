let axiom = '-F+F+F+F+F+F'
let sentence = axiom
let maxLen = 20
let len = maxLen
let angle;
let rules = []

function generate() {
  len *= 0.5
  let nextSentence = ''
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i)
    let found = false
    for (let j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        nextSentence += rules[j].b
        found = true
        break
      }
    }
    if (!found) {
      nextSentence += current
    }
  }
  sentence = nextSentence
  createP(sentence)
  turtle()
}

function turtle() {
  background(50)
  stroke(205, 100)
  resetMatrix()
  translate(width / 2, height / 2)
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i)

    if (current == 'F') {
      line(0, 0, 0, -len)
      translate(0, -len)
    } else if (current == '+') {
      rotate(angle)
    } else if (current == '-') {
      rotate(-angle)
    } else if (current == '[') {
      push()
    } else if (current == ']') {
      pop()
    }
  }
}

function setRule() {
  rules[0] = {
    a: 'F',
    b: this.value() 
  }
}

function reset() {
  background(50)
  sentence = axiom
  len = maxLen
  turtle()
}

function setup() {
  createCanvas(innerWidth * 0.90, innerHeight * 0.80)
  background(30)
  strokeWeight(5)

  createP('Axiom: ' + axiom)
  createP('Define rule: ')
  let text = createInput()
  text.input(setRule)

  angle = radians(60)
  turtle()
  
  let genButton = createButton("generate")
  genButton.mousePressed(generate)

  let resetButton = createButton("reset")
  resetButton.mousePressed(reset)

}
