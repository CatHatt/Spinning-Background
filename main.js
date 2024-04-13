let offset = 0
const offsetMultiplier = 0.05
const speed = 2.1
const size = 25
const sizeOffset = -5
const lines = 2

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    noStroke()
    background(0)
    frameRate(60)
}

function draw() {
    translate(width / 2, height / 2)
    colorMode(RGB)
    background(0, 0, 0, 255 * 0.01)
    //background(0);
    offset += speed
    offset %= 360 / offsetMultiplier
    colorMode(HSB)
    //stroke(255)
    strokeWeight(100)
    for (let i = 0; i < /*(windowWidth/2)/(size+sizeOffset)*/ 100; i++) {
        fill(mod(i * 12 + offset * -1, 360), 255, 255)
        const Cos = cos(offset * offsetMultiplier * i) * i * (size + sizeOffset)
        const Sin = sin(offset * offsetMultiplier * i) * i * (size + sizeOffset)
        circle(Cos, Sin, size)
        circle(-Cos, -Sin, size)
        circle(-Cos, Sin, size)
        circle(Cos, -Sin, size)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    background(0)
    offset = 0
}

function mouseClicked() {
    background(0)
    offset = 0
}

function mod(n, m) {
    return ((n % m) + m) % m
}
