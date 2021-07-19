class Spike {
  constructor() {
    this.r = 50 ;
    this.x = width;
    this.y = height - 30;
  }

  move() {
    this.x -= 5;
  }

  show() {
    noStroke();
    fill(255);
    image(spikeImg, this.x, this.y, this.r, 30);
  }
}