class Edudrop {
  constructor() {
    this.x = random(10, width - 10);
    this.y = 0;
    this.speed = random(2, 5);
    let eduArr = [sql, c, py, java, vr, git, html, mobile, chart, atom];
    this.education = random(eduArr);
  }

  move() {
    this.y += this.speed;
  }

  display() {
    image(this.education, this.x, this.y, 70, 70);
  }

  caught() {
    this.speed = 0;
    this.y = -999; // 의미 없이 큰 숫자
  }
}