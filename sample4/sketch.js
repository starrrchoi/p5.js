let cRedA, cRedB, cNavyA, cNavyB, cGreenA, cGreenB, cYellowA, cYellowB;
const SPEED = 2.2; 

function setup() {
  createCanvas(600, 400);
  frameRate(12);
  pixelDensity(1);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  cRedA    = color(0, 85, 85);
  cRedB    = color(10, 90, 95);
  cNavyA   = color(220, 80, 30);
  cNavyB   = color(240, 85, 40);
  cGreenA  = color(150, 80, 35);
  cGreenB  = color(160, 70, 45);
  cYellowA = color(45, 90, 95);
  cYellowB = color(50, 95, 100);
}

function draw() {
  let t = millis() / 1000;
  let ts = t * SPEED; 
  background(0, 0, 98);

  // 프레임
  let frameW = 8 + (sin(ts * 1.5) + 1) * 35; // 8~78px
  fill(0, 0, 80);

  rect(0, 0, width, frameW);                      // top
  rect(0, height - frameW, width, frameW);        // bottom
  rect(0, 0, frameW, height);                     // left
  rect(width - frameW, 0, frameW, height);        // right

  // 내부 흰색 배경
  fill(0, 0, 98);
  rect(frameW, frameW, width - 2 * frameW, height - 2 * frameW);

  // --- 도형들 ---
  push();
  translate(sin(ts*2.8)*12, 0);
  fill(lerpColor(cGreenA, cGreenB, (sin(ts*2.2)+1)/2));
  quad(180, 50, 280, 70, 300, 300, 130, 280);
  pop();

  push();
  translate(205, 100);
  rotate(radians(sin(ts*3.2)*12));
  scale(1 + 0.18*sin(ts*2.6));
  fill(lerpColor(cRedA, cRedB, (cos(ts*2.8)+1)/2));
  triangle(-85, -60, 80, -60, -10, 80);
  pop();

  push();
  translate(0, sin(ts*3.1)*16);
  fill(lerpColor(cYellowA, cYellowB, (sin(ts*2.4)+1)/2));
  quad(380, 90, 500, 120, 360, 320, 360, 300);
  pop();

  push();
  translate(cos(ts*3.5)*18, 0);
  fill(lerpColor(cRedA, cRedB, (sin(ts*2.7)+1)/2));
  rect(260, 220, 100, 20);
  pop();

  push();
  translate(0, sin(ts*4.0)*6);
  rotate(radians(sin(ts*3.2)*6));
  fill(0, 0, 15);
  quad(180, 320, 420, 300, 430, 330, 190, 350);
  pop();

  push();
  translate(110+22, 270+24+sin(ts*4.5)*8);
  scale(1 + 0.22*sin(ts*3.0));
  translate(-130, -290);
  fill(lerpColor(cRedB, cRedA, (cos(ts*2.8)+1)/2));
  rect(90, 270, 40, 40);
  pop();

  push();
  translate(155, 310);
  rotate(radians(sin(ts*5.0)*24));
  translate(-155, -310);
  fill(lerpColor(cYellowB, cYellowA, (sin(ts*2.6)+1)/2));
  triangle(130, 300, 160, 340, 190, 260);
  pop();

  push();
  translate(0, cos(ts*3.8)*12);
  fill(lerpColor(cGreenA, cGreenB, (sin(ts*3.0)+1)/2));
  rect(470, 300, 70, 70);
  fill(0, 0, 100);
  rect(470, 300, 40, 40);
  pop();

  push();
  translate(sin(ts*4.2)*22, cos(ts*3.0)*7);
  fill(lerpColor(cNavyA, cNavyB, (sin(ts*3.1)+1)/2));
  triangle(390, 250, 560, 270, 390, 290);
  pop();

  push();
  translate(255, 200);
  rotate(radians(cos(ts*4.0)*26));
  translate(-255, -200);
  fill(lerpColor(cNavyB, cNavyA, (cos(ts*3.0)+1)/2));
  triangle(200, 230, 230, 140, 310, 260);
  pop();

  push();
  translate(sin(ts*5.0)*10, 0);
  fill(0, 0, 100);
  rect(240, 190, 100, 30);
  pop();

  push();
  translate(455, 55);
  rotate(radians(cos(ts*4.2)*18));
  translate(-455, -55);
  fill(lerpColor(cNavyB, cNavyA, (sin(ts*3.0)+1)/2));
  rect(430, 30, 50, 50);
  pop();

  // random 원
  for (let i = 0; i < 6; i++) {
    let x = random(width);
    let y = random(height);
    let sz = random(5, 50);
    let hue = random(0, 360);
    fill(hue, 70, 100, random(30, 70));
    ellipse(x, y, sz, sz);
  }
}

function keyPressed() {
  if (key === 'S') {
    saveGif('과제#4_경영학부 20230988 최별', 10);
  }
}
