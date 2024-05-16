let slider_f1
let slider_f2
let slider_am1
let slider_am2
let slider_sf




function setup() {
	createCanvas(windowWidth, windowHeight)

	slider_f1 = createSlider(-10, 10, 2, 0.1)
	slider_f1.position(10, 10)
	slider_f1.size(200)
	

	slider_f2 = createSlider(-10, 10, -3, 0.1)
	slider_f2.position(10, 30)
	slider_f2.size(200)

	slider_am1 = createSlider(-3, 3, 1, 0.1)
	slider_am1.position(width-200, 10)
	slider_am1.size(200)
	
	slider_am2 = createSlider(-3, 3, 1, 0.1)
	slider_am2.position(width-200, 30)
	slider_am2.size(200)
	
	slider_sf = createSlider(-10, 10, 0, 0.1)
	slider_sf.position(width/2-100, height-20)
	slider_sf.size(200)
}

function G(x) {
	//slider
	const f1 = slider_f1.value()
	
	const am1 = slider_am1.value()
	const sf = slider_sf.value()

	return am1*sin(x * f1 - 0 * 0.0 + sf)
}

function H(x) {
	//slider
	const f2 = slider_f2.value()
	const am2 = slider_am2.value()

	return am2*sin(x * f2 + 0 * 0.01)
}


function draw() {
	background(26, 26, 26)

	// Disegno assi
	stroke(200)
	strokeWeight(1)
	line(0, height / 2, width, height / 2)
	line(width / 2, 0, width / 2, height)

	// Definizione della scala
	const mx = width/100
	const my = height/100
	const res = 300

	noFill()
	strokeWeight(2)
	
	// Traccia funzione parametrica (G, H)
	stroke(118, 252, 255)
	tracciaFP(G, H, mx, my, res)

	// Traccia funzione G
	beginShape()
	stroke(252, 185, 185)
	translate(0,-150)
	tracciaFN(G, mx, my, res)
	endShape()

	// Traccia funzione H
	beginShape()
	stroke(169, 255, 195)
	translate(0,300)
	tracciaFN(H, mx, my, res)
	endShape()

}


function tracciaFP(fnX, fnY, mx, my, res) {
	beginShape()
	for (let i = 0; i < res + 1; i++) {
		const t = map(i, 0, res, -mx, mx)
		const x = fnX(t)
		const y = fnY(t)
		const x_plot = map(x, -mx, mx, 0, width)
		const y_plot = map(y, -my, my, 0, height)
		vertex(x_plot, y_plot)
	}
	endShape()
}

function tracciaFN(fn, mx, my, res) {
	beginShape()
	for (let i = 0; i < res + 1; i++) {
		const x = map(i, 0, res, -mx, mx)
		const y = fn(x)
		const x_plot = map(x, -mx, mx, 0, width)
		const y_plot = map(y, -my, my, 0, height)
		vertex(x_plot, y_plot)
	}
	endShape()
}