class Player {
  constructor() {
    this.r = 50;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.5;
    this.num = 0;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -15;
    }
  }

  hits(enemy) {
    if (this.num == enemy.rnum) {
      return;
    } else {
      return collideRectRect(this.x, this.y, this.r, this.r, enemy.x, enemy.y, enemy.r, enemy.r);
    }
  }

  checkNum(rnum) {
    this.num = rnum;
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    noStroke();
    fill(120,227,253);
    rect(this.x, this.y, this.r, this.r);
    fill(243,255,189);
    textSize(32);
    textStyle(BOLD);
    text(this.num, this.x+15, this.y+35);
  }
}