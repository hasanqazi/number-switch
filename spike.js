class Spike {
  constructor() {
    this.px = 50;
    this.py = 30;
    this.x = width;
    this.y = height - 30;
  }

  move() {
    this.x -= 5;
  }

  show() {
    noStroke();
    fill(255);
    image(spikeImg, this.x, this.y, this.px, this.py);
  }
}