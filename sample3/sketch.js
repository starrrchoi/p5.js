// ====== 글로벌 상태 ======
let blinkImpulse = 0;     // 강제 깜빡임 프레임 카운터
let winkFrames = 0;       // 클릭 윙크 지속 프레임
let pastelCardi = false;  // 가디건 색 토글
let smile = 0;   

function setup() {
  createCanvas(600, 400);
  pixelDensity(1);  
  frameRate(12); 
}

function draw() {
  background(236, 241, 246);

function mousePressed() {
  winkFrames = 12;
  smile = 1; // 추가 변수
}

  // === 배경 소용돌이 ===
  noFill();
  strokeWeight(5);

  // 회전 각도 (속도 다르게)
  let angle1 = frameCount * 0.18;
  let angle2 = frameCount * 0.20;
  let angle3 = frameCount * 0.22;
  let angle4 = frameCount * 0.25;

  // 색상 팔레트 (핑크→보라→하양)
  let pink = color(255, 120, 160);
  let purple = color(210, 150, 255);
  let white = color(255);

  // 색상 보간용 함수 (시간에 따라 반복)
  function swirlColor(phase) {
    let t = (sin(frameCount * 0.05 + phase) + 1) / 2; // 0~1 반복
    // t값에 따라 pink→purple→white로 부드럽게 변환
    if (t < 0.5) {
      return lerpColor(pink, purple, t * 2);
    } else {
      return lerpColor(purple, white, (t - 0.5) * 2);
    }
  }

  // 스파이럴 #1
  stroke(swirlColor(0));
  let nx1 = 300 + 220 * cos(frameCount * 0.035);
  let ny1 = 200 + 120 * sin(frameCount * 0.030);
  let r1 = 54;
  for (let j = 0; j < 7; j++) {
    arc(nx1, ny1, r1 * 2, r1 * 2, angle1 + j * 0.42, angle1 + j * 0.42 + PI * 0.85);
    r1 -= 6;
  }

  // 스파이럴 #2
  stroke(swirlColor(1.3));
  let nx2 = 120 + 150 * cos(frameCount * 0.040 + 1.2);
  let ny2 = 120 + 90  * sin(frameCount * 0.033 + 0.6);
  let r2 = 46;
  for (let j = 0; j < 6; j++) {
    arc(nx2, ny2, r2 * 2, r2 * 2, angle2 + j * 0.44, angle2 + j * 0.44 + PI * 0.8);
    r2 -= 6;
  }

  // 스파이럴 #3
  stroke(swirlColor(2.1));
  let nx3 = 480 + 160 * cos(frameCount * 0.038 + 2.1);
  let ny3 = 280 + 110 * sin(frameCount * 0.029 + 1.0);
  let r3 = 50;
  for (let j = 0; j < 6; j++) {
    arc(nx3, ny3, r3 * 2, r3 * 2, angle3 + j * 0.40, angle3 + j * 0.40 + PI * 0.9);
    r3 -= 6;
  }

  // 스파이럴 #4
  stroke(swirlColor(3.2));
  let nx4 = 520 + 200 * cos(frameCount * 0.045 + 3.0);
  let ny4 = 100 + 140 * sin(frameCount * 0.028 + 2.2);
  let r4 = 58;
  for (let j = 0; j < 7; j++) {
    arc(nx4, ny4, r4 * 2, r4 * 2, angle4 + j * 0.38, angle4 + j * 0.38 + PI * 0.9);
    r4 -= 6;
  }

  noStroke();

  
  // ===== 팔레트 =====
  let SKIN = color(255, 228, 210);
  let HAIR = color(122, 80, 50);
  let CARDI = pastelCardi ? color(35, 55, 100) : color(247, 243, 232);         // 네이비 ↔ 아이보리
  let CARDI_TRIM = pastelCardi ? color(60, 75, 120) : color(238, 233, 220);   // 어두운 네이비 테두리 ↔ 밝은 아이보리 트리밍

  let EYE = color(18, 18, 18);
  let BLUSH = color(255, 184, 190);
  let LIP = color(230, 120, 130);
  let GOLD = color(232, 195, 84);
  let SHADOW = color(0, 0, 0, 30);

  // ===== 애니메이션 =====
  let t = frameCount;
  // 머리 좌우 살짝 흔들림
  let headDX = sin(t * 0.03) * 8;
  // 귀걸이 흔들림
  let eSwing = sin(t * 0.2) * 3;
  // 블러셔 맥동(알파)
  let blushAlpha = 90 + 120 * sin(t * 0.12);
  // 깜빡임(0~1). 임펄스가 있으면 강제감김
  let blink = max(0.25, abs(sin(t * 0.18)));
  if (blinkImpulse > 0) {
    blink = 0.1; // 거의 감김
    blinkImpulse--;
  }
  let faceTiltX = constrain((mouseX - width / 2) * 0.03, -8, 8);
  let faceTiltY = constrain((mouseY - height / 2) * 0.03, -5, 5);
  
  // 윙크(오른쪽 눈만)
  let winkScale = winkFrames > 0 ? 0.15 : 1.0;
  if (winkFrames > 0) winkFrames--;

  // 마우스에 동공이 따라가도록 (반경 5px 제한)
  let mx = mouseX, my = mouseY;
  let leftEyeCX = 265, leftEyeCY = 208;
  let rightEyeCX = 335, rightEyeCY = 208;
  let lpdx = constrain((mx - leftEyeCX) * 0.06, -5, 5);
  let lpdy = constrain((my - leftEyeCY) * 0.06, -5, 5);
  let rpdx = constrain((mx - rightEyeCX) * 0.06, -5, 5);
  let rpdy = constrain((my - rightEyeCY) * 0.06, -5, 5);

  // 입 모양(마우스 Y에 따라 살짝 변화)
  let mouthOpen = map(constrain(my, 80, 360), 80, 360, 6, 34);
if (smile > 0) {
  mouthOpen += 10 * sin(frameCount * 0.4);
  smile--;
}

  noStroke();

  // === 머리/얼굴/의상 그림자 (고정) ===
  fill(SHADOW);
  ellipse(300 + 7 + headDX + faceTiltX, 210 + 7 + faceTiltY, 250, 280);
  ellipse(220 + 7 + headDX + faceTiltX, 245 + 7 + faceTiltY, 90, 270);
   ellipse(380 + 7 + headDX + faceTiltX, 245 + 7 + faceTiltY, 90, 270);
  ellipse(300 + 7 + faceTiltX, 195 + 7 + faceTiltY, 160, 190);
  rect(225 + 7, 300 + 7, 150, 90, 28);
  ellipse(215 + 7, 210 + 7, 24, 30);
  ellipse(385 + 7, 210 + 7, 24, 30);
  // 입술 그림자
  arc(300 + 2, 252 + 2, 40, 22, PI, TWO_PI);
  arc(300 + 2, 252 + 2, 40, mouthOpen, 0, PI);

  // ===== 1) 뒷머리 (살짝 좌우 흔들림) ===== 
  fill(HAIR);
  ellipse(300 + headDX + faceTiltX, 210 + faceTiltY, 250, 280);
  ellipse(220 + headDX + faceTiltX, 245 + faceTiltY, 90, 270);
  ellipse(380 + headDX + faceTiltX, 245 + faceTiltY, 90, 270);

  // ===== 2) 목 & 가디건 + 목 그림자===== 
  fill(SKIN);
  rect(285, 280, 30, 30, 8);
  fill(0, 0, 0, 35);
  arc(300, 280, 70, 30, 0, PI);

  fill(CARDI);
  rect(225, 300, 150, 90, 28);
  fill(CARDI_TRIM);
  rect(298, 300, 4, 90);
  fill(220);
  ellipse(300, 320, 8, 8);
  ellipse(300, 340, 8, 8);
  ellipse(300, 360, 8, 8);

  // 가디건 디테일
  stroke(230, 225, 215);
  strokeWeight(1.5);
  line(225, 320, 375, 320);
  line(225, 340, 375, 340);
  line(225, 360, 375, 360);
  noStroke();
  fill(240, 235, 225);
  rect(240, 350, 30, 18, 4);
  rect(330, 350, 30, 18, 4);
  stroke(210, 200, 185);
  strokeWeight(1.5);
  line(240, 350, 270, 350);
  line(330, 350, 360, 350);
  noStroke();

  // ===== 3) 얼굴 ===== 
  fill(SKIN);
  ellipse(300 + faceTiltX, 195 + faceTiltY, 160, 190);

  // ===== 4) 귀 + 귀걸이(스윙) ===== 
  fill(SKIN);
  ellipse(215 + faceTiltX, 210 + faceTiltY, 24, 30);
  ellipse(385 + faceTiltX, 210 + faceTiltY, 24, 30);
  fill(GOLD);
  ellipse(219 + eSwing + faceTiltX, 220 + abs(eSwing)*0.4 + faceTiltY, 12, 12);
  ellipse(381 + eSwing + faceTiltX, 220 + abs(eSwing)*0.4 + faceTiltY, 12, 12);
  fill(255, 240, 180);
  ellipse(219 + eSwing + faceTiltX, 220 + abs(eSwing)*0.4 + faceTiltY, 6, 6);
  ellipse(381 + eSwing + faceTiltX, 220 + abs(eSwing)*0.4 + faceTiltY, 6, 6);

  // ===== 5) 앞머리 ===== 
  fill(HAIR);
  arc(300 + headDX + faceTiltX, 170 + faceTiltY, 180, 140, PI, TWO_PI);
  arc(260 + headDX + faceTiltX, 158 + faceTiltY, 90, 60, PI * 1.02, TWO_PI);
  arc(340 + headDX + faceTiltX, 158 + faceTiltY, 90, 60, PI * 1.02, TWO_PI);

  // ===== 6) 눈썹(아치형) ===== 
  noFill();
  stroke(HAIR);
  strokeWeight(6);
  arc(265 + faceTiltX, 180 + faceTiltY, 40, 15, PI, TWO_PI);
  arc(335 + faceTiltX, 180 + faceTiltY, 40, 15, PI, TWO_PI);
  noStroke();

  // ===== 7) 눈 =====
  
  // 속눈썹
  stroke(EYE);
  strokeWeight(2.6);
  
  line(247 + faceTiltX, 206 + faceTiltY, 236 + faceTiltX, 197 + faceTiltY);
  line(249 + faceTiltX, 202 + faceTiltY, 237 + faceTiltX, 191 + faceTiltY);
  line(251 + faceTiltX, 199 + faceTiltY, 240 + faceTiltX, 187 + faceTiltY);
  
  line(353 + faceTiltX, 206 + faceTiltY, 364 + faceTiltX, 197 + faceTiltY);
  line(351 + faceTiltX, 202 + faceTiltY, 363 + faceTiltX, 191 + faceTiltY);
  line(349 + faceTiltX, 199 + faceTiltY, 360 + faceTiltX, 187 + faceTiltY);
  
  noStroke();
  
  // 흰자
  fill(255);
  ellipse(265 + faceTiltX, 208 + faceTiltY, 44, 28 * blink);
  ellipse(335 + faceTiltX, 208 + faceTiltY, 44, 28 * blink * winkScale);
  
  // 동공(마우스 추적)
  fill(EYE);
  ellipse(265 + faceTiltX + lpdx, 208 + faceTiltY + lpdy, 20, 20 * blink);
  ellipse(335 + faceTiltX + rpdx, 208 + faceTiltY + rpdy, 20, 20 * blink * winkScale);

  // 하이라이트 + 글로스
  fill(255);
  ellipse(261 + faceTiltX + lpdx, 204 + faceTiltY + lpdy, 4.5, 4.5 * blink);
  ellipse(331 + faceTiltX + rpdx, 204 + faceTiltY + rpdy, 4.5, 4.5 * blink * winkScale);
  
  fill(255, 255, 255, 160);
  ellipse(270 - 6 + faceTiltX, 208 - 6 + faceTiltY, 6, 4 * blink);
  ellipse(340 - 6 + faceTiltX, 208 - 6 + faceTiltY, 6, 4 * blink * winkScale);
  
  fill(200, 230, 255, 150);
  arc(265 + faceTiltX, 212 + faceTiltY, 11, 7, PI + 0.05, TWO_PI - 0.05);
  arc(335 + faceTiltX, 212 + faceTiltY, 11, 7, PI + 0.05, TWO_PI - 0.05);
  
  // 아이라인
  noFill();
  stroke(EYE);
  strokeWeight(2);
  arc(265 + faceTiltX, 208 + faceTiltY, 46, 30, PI + 0.05, TWO_PI - 0.05);
  arc(335 + faceTiltX, 208 + faceTiltY, 46, 30, PI + 0.05, TWO_PI - 0.05);
  noStroke();
  
    // ===== 8) 코===== 
  stroke(190,150,130); 
  strokeWeight(2);
  line(300 + faceTiltX, 214 + faceTiltY, 300 + faceTiltX, 226 + faceTiltY);
  arc(300 + faceTiltX, 230 + faceTiltY, 15, 9, 0, PI);
  noStroke();

  // ===== 헤어 하이라이트 (자동 반짝임) =====
  let hlAlpha = 40 + 20 * sin(frameCount * 0.2); // 투명도: 20~60 사이로 반복

  fill(255, 255, 255, hlAlpha);
  ellipse(280 + headDX + faceTiltX, 100 + faceTiltY, 100, 40); // 윗부분 큰 하이라이트
  fill(255, 255, 255, hlAlpha * 0.8);
  ellipse(320 + headDX + faceTiltX, 110 + faceTiltY, 80, 30); // 오른쪽 보조 하이라이트
  fill(255, 255, 255, hlAlpha * 0.6);
  ellipse(300 + headDX + faceTiltX, 110 + faceTiltY, 60, 20); // 중앙 좁은 빛
  
  // ===== 볼터치 (맥동) =====
  
  let blushScale = 1 + 0.1 * sin(t * 0.12);  // 크기 살짝 변동
  fill(255, 150, 170, blushAlpha);
  ellipse(252 + faceTiltX, 233 + faceTiltY, 36 * blushScale, 20 * blushScale);
  fill(BLUSH);
  ellipse(252 + faceTiltX, 233 + faceTiltY, 30 * blushScale, 12 * blushScale);
  fill(255, 150, 170, blushAlpha);
  ellipse(348 + faceTiltX, 233 + faceTiltY, 36 * blushScale, 20 * blushScale);
  fill(BLUSH);
  ellipse(348 + faceTiltX, 233 + faceTiltY, 30 * blushScale, 12 * blushScale);

  // ===== 입술(마우스 Y로 개폐) ===== 
  fill(LIP);
  arc(300 + faceTiltX , 252 + faceTiltY, 40, 14, PI, TWO_PI);     // 윗입술
  fill(LIP);
  arc(300 + faceTiltX, 252 + faceTiltY, 40, mouthOpen, 0, PI);   // 아랫입술
  fill(255, 220, 230, 180);
  arc(300 + faceTiltX, 250 + faceTiltY, 20, 6, PI, TWO_PI);
  
  // ===== 액자 ===== 
  fill(210);
  rect(0, 0, 600, 8);
  rect(0, 392, 600, 8);
  rect(0, 0, 8, 400);
  rect(592, 0, 8, 400);
  
} 


// ===== 키보드 인터랙션 ===== 
function keyPressed() {
  if (key === 'b' || key === 'B') blinkImpulse = 6;
  if (key === 'c' || key === 'C') pastelCardi = !pastelCardi;

  if (key === 'r' || key === 'R') {
    blinkImpulse = 0;
    winkFrames = 0;
    pastelCardi = false;
  }

  if (key === 'g' || key === 'G') { // 10초 GIF 저장
    saveGif('caricature_10s', 10, { quality: 10, dither: 'none', repeat: 0 });
  }
} 

// ===== 마우스 인터랙션 ===== 
function mousePressed() {
  winkFrames = 12;
  smile = 18; 
}


