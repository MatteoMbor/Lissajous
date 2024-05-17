function setup() {
	createCanvas(500, 500);
  }
  
  function draw() {
	scale(0.65)
	background(12);
	translate(0, 0);
  
	let w = 80;
	let cols;
	let rows;
	let quality = 200;
  
	cols = 9;
	rows = 9;
  
	let percentuale = cos(frameCount * 0.01 + PI) * 0.5 + 0.5;
  
	for (let j = 0; j < rows; j++) {
	  for (let i = 0; i < cols; i++) {
		liss(i + 1, j + 1, 30 + w * i, 30 + w * j, w, quality, percentuale);
	  }
	}
  
	console.log(frameRate());
  }
  
  function liss(a, b, rx, ry, rw, steps, percentuale) {
  
	let ox = rx + rw * 0.5;
	let oy = ry + rw * 0.5;
	let r = rw * 0.45;
  
	noFill();
	stroke(255);
	beginShape();
	for (let i = 0; i < steps + 1; i++) {
	  let t = TWO_PI / steps * i * percentuale;
	  let x = r * sin(a * t);
	  let y = r * sin(b * t + HALF_PI);
	  vertex(ox + x, oy + y);
	}
	endShape();
  
	stroke(60, 50);
	rect(rx, ry, rw, rw);
  }
  