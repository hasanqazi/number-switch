class Pipe {
  constructor() {
    this.px = 50;
    this.py = height;
    this.x = width;
    this.y = height - 680;
  }

  move() {
    this.x -= 5;
  }

  show() {
    noStroke();
    fill(86,44,44);
    rect(this.x, this.y, this.px, this.py);
  }
}