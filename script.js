// js //

// import {resizeCanvas} from "p5/global";

console.log('🔥 Designed and developed by Logan Liffick 🔥');

// p5 Animation //

let canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  mousePos = createVector(mouseX, mouseY);
  lastMousePos = createVector(mouseX, mouseY);
  strokeWeight(100);
}

let x;
let y;
let col;
let mousePos;
let lastMousePos;

function draw() {

  col = random(0, 255);

  // Get new mouse position
  mousePos.set(mouseX, mouseY);

  // Set the colors for our new line
  stroke(
    map(mousePos.x, 0, windowWidth, 0, 255),
    map(mousePos.y, 0, windowHeight, 0, 255),
    180
  );

  if (lastMousePos.x !== 0 && lastMousePos.y !== 0) {
    line(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
  }

  if (mouseIsPressed) {
    clear();
  }

  // Keep track of the last position of the mouse
  lastMousePos.set(mousePos)
}

// Waypoints //

let waypoint1 = new Waypoint({
  element: document.getElementById('sec2'),
  handler: function (direction) {
    if (direction === 'down') {
      document.getElementById('switch1').classList.remove('active');
      document.getElementById('switch2').classList.add('active');
    } else if (direction === 'up') {
      document.getElementById('switch1').classList.add('active');
      document.getElementById('switch2').classList.remove('active');
    }
  },
  offset: '20%'
});

let waypoint2 = new Waypoint({
  element: document.getElementById('sec3'),
  handler: function (direction) {
    if (direction === 'down') {
      document.getElementById('switch2').classList.remove('active');
      document.getElementById('switch3').classList.add('active');
    } else if (direction === 'up') {
      document.getElementById('switch2').classList.add('active');
      document.getElementById('switch3').classList.remove('active');
    }
  },
  offset: '20%'
});

let waypoint3 = new Waypoint({
  element: document.getElementById('sec4'),
  handler: function (direction) {
    if (direction === 'down') {
      document.getElementById('switch3').classList.remove('active');
      document.getElementById('switch4').classList.add('active');
    } else if (direction === 'up') {
      document.getElementById('switch3').classList.add('active');
      document.getElementById('switch4').classList.remove('active');
    }
  },
  offset: '40%'
});
