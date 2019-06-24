// js //

console.log('Made with 🔥 by 🤖s');

let canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();
}

function draw() {
  ellipse(mouseX, mouseY, 100, 100);
  fill(255, 108, 137);
  
if (mouseIsPressed) {
  clear();
}
  
}