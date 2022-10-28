class Enemy {
  constructor() {
    this.px = 50;
    this.py = 50;
    this.x = width;
    this.y = height - this.py;
    // Number that shows on the enemy that the player has to say
    this.rnum = int(random(0, 10))
  }

  move() {
    this.x -= 5;
  }

  show() {
    noStroke();
    fill(255,22,84);
    rect(this.x, this.y, this.px, this.py);
    fill(243,255,189);   
    textSize(32);
    textStyle(BOLD);
    text(this.rnum, this.x+15, this.y+35);
    fill(255,22,84);
  }
}