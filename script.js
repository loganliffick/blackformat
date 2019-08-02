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
let points = [];
let lineLength = 30;

function draw() {
  clear();
  col = random(0, 255);

  // Get new mouse position
  mousePos.set(mouseX, mouseY);

  for (let i = 0; i < points.length; i++) {
    // Guard last iteration
    if (i === points.length - 1 || points.length === 1) {
      continue;
    }

    let thisPoint = points[i];
    let nextPoint = points[i + 1];

    // Set the colors for our new line
    stroke(
      map(thisPoint.x, 0, windowWidth, 0, 255),
      map(thisPoint.y, 0, windowHeight, 0, 255),
      180
    );

    // Shrink the line based on the position in the array
    strokeWeight(map(i, 0, points.length, 100, 0));

    line(thisPoint.x, thisPoint.y, nextPoint.x, nextPoint.y);
  }

  if (lastMousePos.x !== 0 && lastMousePos.y !== 0) {
    line(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
  }

  if(mousePos.x !== 0 && mousePos.y !== 0) {
    // Add the new mouse position to our point array
    points.unshift(mousePos.copy());

    if (points.length > lineLength) {
      // Remove the tail of our line when it gets too long
      points.pop()
    }
  }

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
