class Enemy {
  constructor() {
    this.r = 50 ;
    this.x = width;
    this.y = height - this.r;
    this.rnum = int(random(0, 10))
  }

  move() {
    this.x -= 3;
  }

  showRnum() {
    console.log(this.rnum);
  }

  show() {
    noStroke();
    fill(255,22,84);
    rect(this.x, this.y, this.r, this.r);
    fill(243,255,189);   
    textSize(32);
    textStyle(BOLD);
    text(this.rnum, this.x+15, this.y+35);
    fill(255,22,84);
  }
}