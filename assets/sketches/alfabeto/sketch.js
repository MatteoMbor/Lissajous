

let s=50
let alphabet=[]

function setup() {
  createCanvas(1400, 200);
  alphabet.push(new letterL(100, 100))
  alphabet.push(new letterI(230, 110))
  alphabet.push(new letterS(400, 100))
  alphabet.push(new letterSS(550, 100))
  alphabet.push(new letterA(700, 100))
	alphabet.push(new letterJ(850, 100))
	alphabet.push(new letterO(1000, 100))
	alphabet.push(new letterU(1150, 100))
	alphabet.push(new letterS(1300, 100))
}

function draw() {
  scale(0.7)
  background(12)
	
	for(letters of alphabet){
		letters.update();
		letters.display();
	}

}

class letterA{
	constructor (x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=2;
    let b=1
  for(let i=0; i<=6.5; i+=.1){
  let xer = sin(i) * s
  let yer= sin(a*i+b) * s
    var aPoint= {x: xer, y: yer}
    this.points.push(aPoint)
  }
	}
	update(){
		this.mover+=1
	}
	
	display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
  rotate(PI)
  beginShape()
  for(let i=0; i<this.points.length/2; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
  noFill()
  strokeWeight(s/6)
  point(0, 0)
  pop()
	}	
}


class letterI {
	constructor (x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=2;
    let b=3
  for(let i=0; i<=6.4; i+=.1){
  let xer = sin(i) * (s *0.75)
  let yer= sin(a*(i)+b) * (s*0.25)
    var cPoint= {x: xer, y: yer}
    this.points.push(cPoint)
  }
	}
	update(){
		this.mover+=1
	}
	
	display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
  rotate(HALF_PI)
		push()
	//scale(0.75, 0.25)
  beginShape()
  for(let i=0; i<this.points.length*0.9; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
	pop()
		fill(255)
	ellipse(-s, 0, s/9)
  pop()
	}	
}

class letterJ {
	constructor (x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=2;
    let b=1.2
  for(let i=0; i<=6.4; i+=.1){
  let xer = sin(i) * s
  let yer= sin(a*(i)+b) * s
    var cPoint= {x: xer, y: yer}
    this.points.push(cPoint)
  }
	}
	update(){
		this.mover+=1
	}
	
	display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
  
		push()
		rotate(-PI/6)
		//scale(0.8, 0.5)
  beginShape()
  for(let i=0; i<this.points.length*0.75; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
	pop()
		noFill()
	rect(-s/4, -s*1.25, s, s/10)
  pop()
	}	
}

class letterL{
	
	constructor(x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=1;
    let b=1/2
  for(let i=0; i<=6; i+=.1){
  let xer = sin(i) * s/2
  let yer= sin(a*(i)+b) * s/2
    var bPoint= {x: xer, y: yer}
    this.points.push(bPoint)	
	}
	}
 update(){
		this.mover+=1
	}
	
display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
	push()
  rotate(-QUARTER_PI)
	push()
	translate(-s, s/2)
  beginShape()
  for(let i=0; i<this.points.length*0.75; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
	pop()
	pop()
	noFill()
	rect(-s, -s, s/10, s*2)
	noFill()
  pop()
	}	
}

class letterO{
	constructor (x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=1;
    let b=1
  for(let i=0; i<=6.4; i+=.1){
  let xer = sin(i) * s
  let yer= sin(a*(i)+b) * s
    var cPoint= {x: xer, y: yer}
    this.points.push(cPoint)
  }
	}
	update(){
		this.mover+=1
	}
	
	display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
	rotate(QUARTER_PI)
  beginShape()
  for(let i=0; i<this.points.length*0.9; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
  pop()
	}	
}

class letterS{
	constructor (x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=3;
    let b=3
  for(let i=0; i<=6.4; i+=.1){
  let xer = sin(i) * s
  let yer= sin(a*(i)+b) * s
    var cPoint= {x: xer, y: yer}
    this.points.push(cPoint)
  }
	}
	update(){
		this.mover+=1
	}
	
	display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
  rotate(-HALF_PI)
  beginShape()
  for(let i=0; i<this.points.length*0.5; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
  pop()
	}	
}

class letterSS{
	constructor (x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=3;
    let b=3
  for(let i=0; i<=6.4; i+=.1){
  let xer = sin(i) * s
  let yer= sin(a*(i)+b) * s
    var cPoint= {x: xer, y: yer}
    this.points.push(cPoint)
  }
	}
	update(){
		this.mover+=1
	}
	
	display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
  rotate(-HALF_PI)
  beginShape()
  for(let i=0; i<this.points.length*0.5; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
  pop()
	}	
}

class letterU {
	constructor (x, y){
		this.x=x
		this.y=y
		this.points= []
		this.mover=0
		let a=2;
    let b=1.2
  for(let i=0; i<=6.4; i+=.1){
  let xer = sin(i) * s
  let yer= sin(a*(i)+b) * s
    var cPoint= {x: xer, y: yer}
    this.points.push(cPoint)
  }
	}
	update(){
		this.mover+=1
	}
	
	display(){
		stroke(255)
 strokeWeight(s/20)
  noFill()
  push()
  translate(this.x, this.y)
  beginShape()
  for(let i=0; i<this.points.length*0.75; i++){
  curveVertex(this.points[(this.mover+i)%this.points.length].x, this.points[(this.mover+i)%this.points.length].y)
  }
  endShape();
	//noFill ()
	//rect(s, -s, s/5, s*2)
  pop()
	}	
}

