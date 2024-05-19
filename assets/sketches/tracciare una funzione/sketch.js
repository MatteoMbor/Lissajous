let slider_f1, slider_f2, slider_am1, slider_am2, slider_sf;
let textBox_f1, textBox_f2, textBox_am1, textBox_am2, textBox_sf;

function setup() {
    createCanvas(500, 500);

    slider_f1 = createSlider(-10, 10, 1, 0.1).position(10, 10).size(150).addClass("mySliders");
    slider_f1.input(updateTextBoxes);

    slider_f2 = createSlider(-10, 10, 1, 0.1).position(10, 30).size(150).addClass("mySliders");
    slider_f2.input(updateTextBoxes);

    slider_am1 = createSlider(-3, 3, 1, 0.1).position(width - 160, 10).size(150).addClass("mySliders");
    slider_am1.input(updateTextBoxes);

    slider_am2 = createSlider(-3, 3, 1, 0.1).position(width - 160, 30).size(150).addClass("mySliders");
    slider_am2.input(updateTextBoxes);

    slider_sf = createSlider(-10, 10, 1.6, 0.1).position(width / 2 - 77, height - 20).size(150).addClass("mySliders");
    slider_sf.input(updateTextBoxes);

    textBox_f1 = createInput(slider_f1.value()).position(170, 5).size(20);
    textBox_f1.input(updateSliders);

    textBox_f2 = createInput(slider_f2.value()).position(170, 25).size(20);
    textBox_f2.input(updateSliders);

    textBox_am1 = createInput(slider_am1.value()).position(width - 190, 5).size(20);
    textBox_am1.input(updateSliders);

    textBox_am2 = createInput(slider_am2.value()).position(width - 190, 25).size(20);
    textBox_am2.input(updateSliders);

    textBox_sf = createInput(slider_sf.value()).position(width / 2 - 13, height - 50).size(20);
    textBox_sf.input(updateSliders);
}

function updateTextBoxes() {
    textBox_f1.value(slider_f1.value());
    textBox_f2.value(slider_f2.value());
    textBox_am1.value(slider_am1.value());
    textBox_am2.value(slider_am2.value());
    textBox_sf.value(slider_sf.value());
}

function updateSliders() {
    slider_f1.value(textBox_f1.value());
    slider_f2.value(textBox_f2.value());
    slider_am1.value(textBox_am1.value());
    slider_am2.value(textBox_am2.value());
    slider_sf.value(textBox_sf.value());
}

function G(x) {
    const f1 = slider_f1.value();
    const am1 = slider_am1.value();
    const sf = slider_sf.value();
    return am1 * sin(x * f1 + sf);
}

function H(x) {
    const f2 = slider_f2.value();
    const am2 = slider_am2.value();
    return am2 * sin(x * f2);
}

function draw() {
    background(12);

    stroke(200);
    strokeWeight(1);
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);

    const mx = width / 100;
    const my = height / 100;
    const res = 300;

    noFill();
    strokeWeight(2);

    stroke(118, 200, 70);
    tracciaFP(G, H, mx, my, res);

    beginShape();
    stroke(118, 185, 185);
    translate(0, -150);
    tracciaFN(G, mx, my, res);
    endShape();

    beginShape();
    stroke(169, 118, 195);
    translate(0, 300);
    tracciaFN(H, mx, my, res);
    endShape();
}

function tracciaFP(fnX, fnY, mx, my, res) {
    beginShape();
    for (let i = 0; i < res + 1; i++) {
        const t = map(i, 0, res, -mx, mx);
        const x = fnX(t);
        const y = fnY(t);
        const x_plot = map(x, -mx, mx, 0, width);
        const y_plot = map(y, -my, my, 0, height);
        vertex(x_plot, y_plot);
    }
    endShape();
}

function tracciaFN(fn, mx, my, res) {
    beginShape();
    for (let i = 0; i < res + 1; i++) {
        const x = map(i, 0, res, -mx, mx);
        const y = fn(x);
        const x_plot = map(x, -mx, mx, 0, width);
        const y_plot = map(y, -my, my, 0, height);
        vertex(x_plot, y_plot);
    }
    endShape();
}
