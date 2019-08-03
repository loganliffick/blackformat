// js //

console.log('🔥 Designed and developed by Logan Liffick 🔥');

// p5 Animation //

let canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  noStroke();
};

let x;
let y;
let col;

function draw() {
  
  col = random(0, 255);
  
  x = lerp(col, mouseX, .5);
  y = lerp(col, mouseY, .5);
  
  color1 = map(mouseX, 0, windowWidth, 0, 255);
  color2 = map(mouseY, 0, windowHeight, 0, 255);
  color3 = 180;
  
  ellipse(mouseX, mouseY, 150, 150);
  fill(color1, color2, color3);
  
  if (mouseIsPressed) {
    clear();
  };
};

// Waypoints //

let waypoint1 = new Waypoint({
  element: document.getElementById('sec2'),
  handler: function(direction) {
    if (direction == 'down') {
      document.getElementById('switch1').classList.remove('active');
      document.getElementById('switch2').classList.add('active');
    } else if (direction == 'up') {
      document.getElementById('switch1').classList.add('active');
      document.getElementById('switch2').classList.remove('active');
    }
  },
  offset: '20%'
});

let waypoint2 = new Waypoint({
  element: document.getElementById('sec3'),
  handler: function(direction) {
    if (direction == 'down') {
      document.getElementById('switch2').classList.remove('active');
      document.getElementById('switch3').classList.add('active');
    } else if (direction == 'up') {
      document.getElementById('switch2').classList.add('active');
      document.getElementById('switch3').classList.remove('active');
    }
  },
  offset: '20%'
});

let waypoint3 = new Waypoint({
  element: document.getElementById('sec4'),
  handler: function(direction) {
    if (direction == 'down') {
      document.getElementById('switch3').classList.remove('active');
      document.getElementById('switch4').classList.add('active');
    } else if (direction == 'up') {
      document.getElementById('switch3').classList.add('active');
      document.getElementById('switch4').classList.remove('active');
    }
  },
  offset: '40%'
});