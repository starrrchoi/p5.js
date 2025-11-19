function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(236, 241, 246); 
  noStroke();

  // 팔레트
  let SKIN = color(255, 228, 210);
  let HAIR = color(122, 80, 50);        
  let CARDI = color(247, 243, 232);    
  let CARDI_TRIM = color(238, 233, 220);
  let EYE = color(18, 18, 18);         
  let BLUSH = color(255, 184, 190);
  let LIP = color(230, 120, 130);
  let GOLD = color(232, 195, 84);
  let SHADOW = color(0, 0, 0, 30); // 반투명 그림자

   // === 머리 그림자 ===
  fill(SHADOW);
  ellipse(300 + 7, 210 + 7, 250, 280);
  ellipse(220 + 7, 245 + 7, 90, 270);
  ellipse(380 + 7, 245 + 7, 90, 270);

  // === 얼굴 그림자 ===
  fill(SHADOW);
  ellipse(300 + 7, 195 + 7, 160, 190);

  // === 가디건 그림자 ===
  fill(SHADOW);
  rect(225 + 7, 300 + 7, 150, 90, 28);

  // === 귀 그림자 ===
  fill(SHADOW);
  ellipse(215 + 7, 210 + 7, 24, 30);
  ellipse(385 + 7, 210 + 7, 24, 30);

  // === 귀걸이 그림자 ===
  fill(SHADOW);
  ellipse(219 + 3, 220 + 3, 10, 10);
  ellipse(381 + 3, 220 + 3, 10, 10);

  // === 입술 그림자 ===
  fill(SHADOW);
  arc(300 + 2, 252 + 2, 40, 22, PI, TWO_PI);
  arc(300 + 2, 252 + 2, 40, 18, 0, PI);

  
  // 1) 뒷머리
  fill(HAIR);
  ellipse(300, 210, 250, 280);     
  ellipse(220, 245, 90, 270);      
  ellipse(380, 245, 90, 270);      

  
  // 2) 목 & 가디건
  fill(SKIN);  
  rect(285, 280, 30, 30, 8);

  // ✅ 목 그림자 추가
  fill(0, 0, 0, 35); // 반투명 검정색
  arc(300, 280, 70, 30, 0, PI); // 턱 아래 그림자

  fill(CARDI); 
  rect(225, 300, 150, 90, 28);   // 몸통

  // 가디건 여밈 부분
  fill(CARDI_TRIM); 
  rect(298, 300, 4, 90);    

  // 단추
  fill(220); 
  ellipse(300, 320, 8, 8); 
  ellipse(300, 340, 8, 8); 
  ellipse(300, 360, 8, 8);

  // ✅ 가디건 디테일 추가
  stroke(230, 225, 215);
  strokeWeight(1.5);
  // 가로 스티치 라인 (니트 줄무늬)
  line(225, 320, 375, 320);
  line(225, 340, 375, 340);
  line(225, 360, 375, 360);

  // 포켓 모양
  noStroke();
  fill(240, 235, 225);
  rect(240, 350, 30, 18, 4);
  rect(330, 350, 30, 18, 4);

  // 포켓 스티치
  stroke(210, 200, 185);
  strokeWeight(1.5);
  line(240, 350, 270, 350);
  line(330, 350, 360, 350);
  noStroke();


  // 3) 얼굴
  fill(SKIN);
  ellipse(300, 195, 160, 190);

  // 4) 귀 + 귀걸이
  fill(SKIN); ellipse(215, 210, 24, 30); ellipse(385, 210, 24, 30);
  //링 
  fill(232,195,84); ellipse(219, 220, 12, 12); ellipse(381, 220, 12, 12);
  //보석
  fill(255,240,180); ellipse(219, 220, 6, 6); ellipse(381, 220, 6, 6);


  // 5) 앞머리
  fill(HAIR);
  arc(300, 170, 180, 140, PI, TWO_PI);      
  arc(260, 158, 90, 60, PI*1.02, TWO_PI);   
  arc(340, 158, 90, 60, PI*1.02, TWO_PI);   

  // 6) 눈썹
  fill(HAIR);
  rect(245, 175, 40, 6, 4);
  rect(317, 175, 40, 6, 4);

  // 속눈썹
  stroke(EYE);
  strokeWeight(2.6);
  line(247, 206, 236, 197);
  line(249, 202, 237, 191);
  line(251, 199, 240, 187);
  line(353, 206, 364, 197);
  line(351, 202, 363, 191);
  line(349, 199, 360, 187);
  noStroke();

  // 7) 눈
  fill(255);
  ellipse(265, 208, 44, 28);
  ellipse(335, 208, 44, 28);
  fill(EYE);
  ellipse(265, 208, 20, 20);
  ellipse(335, 208, 20, 20);
  fill(255);
  ellipse(261, 204, 4.5, 4.5);
  ellipse(331, 204, 4.5, 4.5);

    // 기존 흰 점 외에 한 겹 더
  fill(255, 255, 255, 160);
  ellipse(270-6, 208-6, 6, 4);
  fill(200, 230, 255, 150);
  arc(265, 207+5, 11, 7, 0, PI); // 아랫쪽 글로스
  
  // 기존 흰 점 외에 한 겹 더
  fill(255, 255, 255, 160);
  ellipse(340-6, 208-6, 6, 4);
  fill(200, 230, 255, 150);
  arc(335, 207+5, 11, 7, 0, PI); // 아랫쪽 글로스
  
  // 아이라인
  noFill(); stroke(EYE); strokeWeight(2);
  arc(265, 208, 46, 30, PI+0.05, TWO_PI-0.05);
  arc(335, 208, 46, 30, PI+0.05, TWO_PI-0.05);
  noStroke();

  // 8) 코
  stroke(190,150,130); strokeWeight(2);
  line(300, 214, 300, 226);
  arc(300, 230, 15, 9, 0, PI);
  noStroke();



  //헤어하이라이트
  // 반짝이는 느낌을 위해 투명도 있는 흰색 겹치기
  fill(255, 255, 255, 50);
  ellipse(280, 100, 100, 40); // 머리 윗부분 큰 하이라이트
  fill(255, 255, 255, 35);
  ellipse(320, 110, 80, 30); // 오른쪽 보조 하이라이트
  fill(255, 255, 255, 20);
  fill(255, 255, 255, 30);
  ellipse(300, 110, 60, 20); // 중앙 좁은 빛

    
// 9) 볼터치 / 입술
fill(BLUSH);
ellipse(252, 233, 30, 12);
ellipse(348, 233, 30, 12);

// 윗입술
fill(LIP);
arc(300, 252, 40, 22, PI, TWO_PI);

// 아랫입술
fill(LIP);   
arc(300, 252, 40, 18, 0, PI);

// ✅ 입술 하이라이트 추가 (새로 추가된 부분)
fill(255, 220, 230, 180); // 반투명 흰색
arc(300, 250, 20, 6, PI, TWO_PI); // 아랫입술 위쪽에 반짝임


  //액자
  fill(210);
  rect(0,0,600,8); rect(0,392,600,8); rect(0,0,8,400); rect(592,0,8,400);

  
}
