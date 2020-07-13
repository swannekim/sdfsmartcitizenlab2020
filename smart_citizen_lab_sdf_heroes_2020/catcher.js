class Catcher {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  setLocation(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    image(brain, mouseX, mouseY, 100, 100);
  }

  intersect(drop) {
    let distance = dist(this.x, this.y, drop.x, drop.y);
    return (distance < 15);
    // 더 작은 경우 true, 크거나 같은 경우 false return
  }
}