let font1;
let font2;
let logo;
let logov;
let walking;
let qperson;
let lab;
let helper;
let brain;
let sql;
let c;
let py;
let java;
let vr;
let git;
let html;
let mobile;
let chart;
let atom;
let together;

let stageNum = 0;
let w = 30;

let catcher;
let drops = []; // 빗방울 떨어지게 하는 기능
let timer = 1000;
let dropsLimit = 1000;
let score = 0;

function preload() {
  font1 = loadFont('SMDBold.ttf');
  font2 = loadFont('KPMBold.ttf');
  logo = loadImage('sdflogo.png');
  qperson = loadImage('question.png');
  walking = loadImage('walkingdog.png');
  lab = loadImage('home.png');
  helper = loadImage('telemarketer.png');
  brain = loadImage('brain.png');
  sql = loadImage('program/sql.png');
  c = loadImage('program/c.png');
  py = loadImage('program/python.png');
  java = loadImage('program/java.png');
  vr = loadImage('program/vr.png');
  git = loadImage('program/github.png');
  html = loadImage('program/html.png');
  mobile = loadImage('program/mobile.png');
  chart = loadImage('program/chart.png');
  atom = loadImage('program/atom.png');
  together = loadImage('consensus.png');
  logov = loadImage('sdflogov.png');
}

function setup() {
  createCanvas(600, 600);
  catcher = new Catcher();
}

function draw() {
  background(220);
  textFont(font2); // copyright
  fill(175);
  textSize(10);
  text('@lumeiredelalune_', 50, 20);

  if (stageNum == 0) {
    imageMode(CENTER);
    image(logo, width * 0.5, height * 0.3);
    textFont(font1); // 스마트시민랩
    textAlign(CENTER);
    fill(0, 55, 100);
    textSize(80);
    text('스마트시민랩', width * 0.5, height * 0.5);
    textFont(font2); // press any key
    textAlign(CENTER);
    fill(30);
    textSize(30);
    text('press Enter key to start', width * 0.5, height * 0.85);
  }

  if (stageNum == 1) { // 문제찾기
    rectMode(CENTER); // 도시문제 버튼
    fill(250);
    if (110 < mouseX && mouseX < 490 && 90 < mouseY && mouseY < 270) {
      if (mouseIsPressed) {
        stageNum += 1;
      } else {
        strokeWeight(4);
      }
    } else {
      strokeWeight(1);
    }
    rect(width * 0.5, height * 0.3, 400, 190, 20);
    textAlign(CENTER);
    fill(20);
    textSize(20);
    text('도시문제를 해결하고 싶은데,', width * 0.5, height * 0.27);
    text('어디로 가야 해결할 수 있을까?', width * 0.5, height * 0.33);
    image(qperson, 190, 430, 245, 245); // 사람이미지
    moveOn('글씨가 적힌 말풍선을 클릭해보세요');
  }

  if (stageNum == 2) {
    image(walking, w, height * 0.6, 200, 200);
    image(lab, 500, height * 0.6, 190, 200);
    if (keyIsDown(RIGHT_ARROW)) { // 이동
      w += 3;
    }
    if (w > 520) {
      stageNum += 1;
      w = 30;
    }
    textFont(font1); // 스마트시민랩
    textAlign(RIGHT);
    fill(0, 55, 100);
    textSize(40);
    text('스마트', width * 0.92, 150);
    text('시민랩', width * 0.92, 200)
    moveOn('오른쪽 화살표를 계속 눌러보세요');
  }

  if (stageNum == 3) {
    rectMode(CENTER); // 서비스 버튼
    if (110 < mouseX && mouseX < 490 && 90 < mouseY && mouseY < 235) {
      if (mouseIsPressed) {
        stageNum += 1;
      } else {
        strokeWeight(4);
      }
    } else {
      strokeWeight(1);
    }
    fill(250);
    rect(width * 0.5, height * 0.3, 400, 160, 20);
    textAlign(CENTER);
    fill(20);
    textSize(20);
    text('여기는 스마트시민랩입니다.', width * 0.5, height * 0.27);
    text('무엇을 도와드릴까요?', width * 0.5, height * 0.33);
    image(helper, 390, height * 0.6, 270, 270);
    moveOn('글씨가 적힌 말풍선을 클릭해보세요');
  }

  if (stageNum == 4) {
    rectMode(CENTER);
    if (110 < mouseX && mouseX < 490 && 70 < mouseY && mouseY < 170) { // 문제버튼 1
      if (mouseIsPressed) {
        strokeWeight(4);
        fill(25, 35, 100);
        rect(width * 0.5, height * 0.25, 400, 110, 20);
        textAlign(CENTER);
        fill(250);
        textSize(20);
        text('멘토링을 통해 문제를 다각적으로 접근해서', width * 0.5, height * 0.22);
        text('폭넓은 해결방안 마련하도록 도울게요.', width * 0.5, height * 0.3);
      } else {
        strokeWeight(4);
        fill(250);
        rect(width * 0.5, height * 0.25, 400, 110, 20);
        textAlign(CENTER);
        fill(20);
        textSize(20);
        text('생각한 문제를 구체화시키고 싶어요.', width * 0.5, height * 0.25);
      }
    } else {
      strokeWeight(1);
      fill(250);
      rect(width * 0.5, height * 0.25, 400, 110, 20);
      textAlign(CENTER);
      fill(20);
      textSize(20);
      text('생각한 문제를 구체화시키고 싶어요.', width * 0.5, height * 0.25);
    }
    if (110 < mouseX && mouseX < 490 && 230 < mouseY && mouseY < 350) { // 문제버튼 2
      if (mouseIsPressed) {
        strokeWeight(4);
        fill(25, 35, 100);
        rect(width * 0.5, height * 0.5, 400, 110, 20);
        textAlign(CENTER);
        fill(250);
        textSize(20);
        text('일상생활과 연관되어 있고 품질이 괜찮다면,', width * 0.5, height * 0.47);
        text('스마트시티 서비스혁신지원사업과 연계합니다.', width * 0.5, height * 0.55);
      } else {
        strokeWeight(4);
        fill(250);
        rect(width * 0.5, height * 0.5, 400, 110, 20);
        textAlign(CENTER);
        fill(20);
        textSize(20);
        text('서비스를 만든 후의 관리는 어떻게 되나요?', width * 0.5, height * 0.5);
      }
    } else {
      strokeWeight(1);
      fill(250);
      rect(width * 0.5, height * 0.5, 400, 110, 20);
      textAlign(CENTER);
      fill(20);
      textSize(20);
      text('서비스를 만든 후의 관리는 어떻게 되나요?', width * 0.5, height * 0.5);
    }
    if (110 < mouseX && mouseX < 490 && 400 < mouseY && mouseY < 500) { // 문제버튼 3
      if (mouseIsPressed) {
        stageNum += 1;
      } else {
        strokeWeight(4);
        fill(250);
        rect(width * 0.5, height * 0.75, 400, 110, 20);
        textAlign(CENTER);
        fill(20);
        textSize(20);
        text('저는 아직 서비스를 만들 역량이 부족해요.', width * 0.5, height * 0.75);
      }
    } else {
      strokeWeight(1);
      fill(250);
      rect(width * 0.5, height * 0.75, 400, 110, 20);
      textAlign(CENTER);
      fill(20);
      textSize(20);
      text('저는 아직 서비스를 만들 역량이 부족해요.', width * 0.5, height * 0.75);
    }
    moveOn('박스를 차례대로 클릭해 보세요');
  }

  if (stageNum == 5) {
    catcher.setLocation(mouseX, mouseY);
    catcher.display(); // brain catcher
    if (millis() > timer) {
      // drops 에 새로운 raindrop 추가
      // let d = new Raindrop();
      // drops.push(d);
      drops.push(new Edudrop());
      timer += 1000;
    }
    if (dropsLimit < drops.length) {
      drops = [];
    }
    for (let drop of drops) {
      if (catcher.intersect(drop)) {
        drop.caught();
        score += 30;
      }
      drop.move(); // speed 0 이라 움직이지X
      drop.display(); // 위치가 화면 상 보이지 않음
    }
    push();
    fill(100, 210, 250, 100); // 점수표기
    rectMode(CORNER);
    noStroke();
    rect(0, height - score, width, score);
    pop();
    if (score > height) {
      stageNum += 1;
      score = 0;
    }
    moveOn('마우스를 움직여 스마트시민랩의 교육을 받으세요');
  }

  if (stageNum == 6) {
    textFont(font2);
    textAlign(CENTER);
    fill(30);
    textSize(28);
    text('시민 주도로 사회문제를 해결하는', width * 0.5, height * 0.18)
    imageMode(CENTER);
    image(together, width * 0.5, height * 0.4, 220, 220);
    textFont(font1);
    textAlign(CENTER);
    fill(0, 55, 100);
    textSize(62);
    text('스마트시민랩', width * 0.5, height * 0.71);
    image(logov, width - 42, height - 90);
    moveOn('press Backspace to return to the first page');
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    stageNum = 1;
  } else if (keyCode === BACKSPACE) {
    stageNum = 0;
  }
  return false; // prevent any default behaviour
}

function moveOn(x) {
  textFont(font2); // press right arrow key
  textAlign(CENTER);
  fill(50);
  textSize(20);
  text(x, width * 0.5, height * 0.9)
}