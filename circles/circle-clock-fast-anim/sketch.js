let speedSecond, speedMinute, speedHour;
let angleSecond, angleMinute, angleHour;
let cx, cy, radius;

function setup() {
  createCanvas(innerWidth, innerHeight)
  frameRate(60)

  speedSecond = TWO_PI / 60
  speedMinute = speedSecond / 60
  speedHour = speedMinute / 60
  
  angleSecond = 0
  angleMinute = 0
  angleHour = 0

  cx = width / 2
  cy = height / 2
  radius = min(width, height) * 0.45
}

function draw() {
  background(20)

  translate(cx, cy)

  push() 
  noStroke()
  fill(240)
  circle(0, 0, radius) // Clock face
  pop()  

  // arcs and labels for each hour
  for (let a = 0; a < 12; a++) {
    let middle = -PI / 2 + TWO_PI / 12 + a * TWO_PI / 12
    let start  = middle - TWO_PI / 12 / 2
    let end    = middle + TWO_PI / 12 / 2
    
    push()
    a % 2 == 0 ? fill(85, 125) : fill(170, 125)
    arc(0, 0, radius * 2, radius * 2, start, end, PIE)
    pop()

    push()
    let r = radius * 0.92
    textAlign(CENTER, CENTER)
    textSize(24)
    text(a+1, r * cos(middle), r * sin(middle))
    pop()
  }


  push() 
  rotate(angleSecond)
  strokeWeight(2)
  stroke('red')
  line(0, 0, 0, -radius * 0.90) // Second hand
  pop() 

  push() 
  rotate(angleMinute)
  strokeWeight(4)
  stroke('blue')
  line(0, 0, 0, -radius * 0.70) // Minute hand
  pop()  

  push() 
  rotate(angleHour)
  strokeWeight(6)
  stroke('green')
  line(0, 0, 0, -radius * 0.50) // Hour hand
  pop() 

  angleSecond += speedSecond
  angleMinute += speedMinute
  angleHour += speedHour
}