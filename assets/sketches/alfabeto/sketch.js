let s = 50;
let alphabet = [];
let canvasWidth;
let canvasHeight;

function setup() {
  canvasWidth = windowWidth // 90% della larghezza della finestra
  canvasHeight = 200; // 20% dell'altezza della finestra
  createCanvas(canvasWidth, canvasHeight);
  initializeLetters();
}

function draw() {
  scale(0.7);
  background(12);
  
  for (let letters of alphabet) {
    letters.update();
    letters.display();
  }
}

function windowResized() {
  canvasWidth = windowWidth * 0.9; // 90% della larghezza della finestra
  canvasHeight = windowHeight * 0.2; // 20% dell'altezza della finestra
  resizeCanvas(canvasWidth, canvasHeight);
  initializeLetters();
}

function initializeLetters() {
  alphabet = [];
  let letterSpacing = canvasWidth / 10; // Spaziatura tra le lettere
  alphabet.push(new letterL(letterSpacing * 1, canvasHeight / 2));
  alphabet.push(new letterI(letterSpacing * 2.3, canvasHeight / 2 + 10));
  alphabet.push(new letterS(letterSpacing * 4, canvasHeight / 2));
  alphabet.push(new letterSS(letterSpacing * 5.5, canvasHeight / 2));
  alphabet.push(new letterA(letterSpacing * 7, canvasHeight / 2));
  alphabet.push(new letterJ(letterSpacing * 8.5, canvasHeight / 2));
  alphabet.push(new letterO(letterSpacing * 10, canvasHeight / 2));
  alphabet.push(new letterU(letterSpacing * 11.5, canvasHeight / 2));
  alphabet.push(new letterS(letterSpacing * 13, canvasHeight / 2));
}

class letterA {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 2;
    let b = 1;
    for (let i = 0; i <= 6.5; i += 0.1) {
      let xer = sin(i) * s;
      let yer = sin(a * i + b) * s;
      var aPoint = { x: xer, y: yer };
      this.points.push(aPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    rotate(PI);
    beginShape();
    for (let i = 0; i < this.points.length / 2; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    noFill();
    strokeWeight(s / 6);
    point(0, 0);
    pop();
  }
}

class letterI {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 2;
    let b = 3;
    for (let i = 0; i <= 6.4; i += 0.1) {
      let xer = sin(i) * (s * 0.75);
      let yer = sin(a * (i) + b) * (s * 0.25);
      var cPoint = { x: xer, y: yer };
      this.points.push(cPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    rotate(HALF_PI);
    push();
    beginShape();
    for (let i = 0; i < this.points.length * 0.9; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    pop();
    fill(255);
    ellipse(-s, 0, s / 9);
    pop();
  }
}

class letterJ {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 2;
    let b = 1.2;
    for (let i = 0; i <= 6.4; i += 0.1) {
      let xer = sin(i) * s;
      let yer = sin(a * (i) + b) * s;
      var cPoint = { x: xer, y: yer };
      this.points.push(cPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    push();
    rotate(-PI / 6);
    beginShape();
    for (let i = 0; i < this.points.length * 0.75; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    pop();
    noFill();
    rect(-s / 4, -s * 1.25, s, s / 10);
    pop();
  }
}

class letterL {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 1;
    let b = 1 / 2;
    for (let i = 0; i <= 6; i += 0.1) {
      let xer = sin(i) * s / 2;
      let yer = sin(a * (i) + b) * s / 2;
      var bPoint = { x: xer, y: yer };
      this.points.push(bPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    push();
    rotate(-QUARTER_PI);
    push();
    translate(-s, s / 2);
    beginShape();
    for (let i = 0; i < this.points.length * 0.75; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    pop();
    pop();
    noFill();
    rect(-s, -s, s / 10, s * 2);
    pop();
  }
}

class letterO {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 1;
    let b = 1;
    for (let i = 0; i <= 6.4; i += 0.1) {
      let xer = sin(i) * s;
      let yer = sin(a * (i) + b) * s;
      var cPoint = { x: xer, y: yer };
      this.points.push(cPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    rotate(QUARTER_PI);
    beginShape();
    for (let i = 0; i < this.points.length * 0.9; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    pop();
  }
}

class letterS {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 3;
    let b = 3;
    for (let i = 0; i <= 6.4; i += 0.1) {
      let xer = sin(i) * s;
      let yer = sin(a * (i) + b) * s;
      var cPoint = { x: xer, y: yer };
      this.points.push(cPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    rotate(-HALF_PI);
    beginShape();
    for (let i = 0; i < this.points.length * 0.5; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    pop();
  }
}

class letterSS {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 3;
    let b = 3;
    for (let i = 0; i <= 6.4; i += 0.1) {
      let xer = sin(i) * s;
      let yer = sin(a * (i) + b) * s;
      var cPoint = { x: xer, y: yer };
      this.points.push(cPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    rotate(-HALF_PI);
    beginShape();
    for (let i = 0; i < this.points.length * 0.5; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    pop();
  }
}

class letterU {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.points = [];
    this.mover = 0;
    let a = 2;
    let b = 1.2;
    for (let i = 0; i <= 6.4; i += 0.1) {
      let xer = sin(i) * s;
      let yer = sin(a * (i) + b) * s;
      var cPoint = { x: xer, y: yer };
      this.points.push(cPoint);
    }
  }
  update() {
    this.mover += 1;
  }

  display() {
    stroke(255);
    strokeWeight(s / 20);
    noFill();
    push();
    translate(this.x, this.y);
    beginShape();
    for (let i = 0; i < this.points.length * 0.75; i++) {
      curveVertex(this.points[(this.mover + i) % this.points.length].x, this.points[(this.mover + i) % this.points.length].y);
    }
    endShape();
    pop();
  }
}
