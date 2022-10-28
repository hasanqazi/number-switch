class Player {
  constructor() {
    this.px = 50;
    this.py = 50;
    this.x = 50;
    this.y = height - this.py;
    this.vy = 0;
    // gravity allows the player to jump
    this.gravity = 0.5;
    this.num = 0;
    this.crouchTime = 1.5;
  }

  jump() {
    if (this.y == height - this.py) {
      this.vy = -15;
    }
  }

  // changes the player size for crouching
  crouch() {
    this.py = 25; 
  }

  // changes the player size for standing
  stand() {
    this.py = 50;
  }

  // checks for collision between the enemy and the player
  hits(enemy) {
    if (this.num == enemy.rnum) {
      return;
    } else {
      return collideRectRect(this.x, this.y, this.px, this.py, enemy.x, enemy.y, enemy.px, enemy.py);
    }
  }

  // shows the value on the player
  checkNum(rnum) {
    this.num = rnum;
  }

  // moves the player
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.py);
  }

  //renders the player
  show() {
    noStroke();
    fill(120,227,253);
    rect(this.x, this.y, this.px, this.py);
    fill(243,255,189);
    textSize(32);
    textStyle(BOLD);
    text(this.num, this.x+15, this.y+35);
  }
}