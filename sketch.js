let player;
let enemies = [];

let play = false;

let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

let soundClassifier;

let timer = 0;
let gameover = false;
let replay;

function preload() {
  const options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
}

function setup() {
  createCanvas(windowWidth, 650);
  background(243,255,189);
  player = new Player();

  soundClassifier.classify(gotCommand);

  button = createButton('play');
  button.position(0, 0);
  button.mousePressed(runGame);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence)
  for (let n in nums) {
    if (results[0].label == nums[n]) {
      player.checkNum(n);
    }
  }
  if (results[0].label == 'up') {
    player.jump();
  }
}

function runGame() {
  play = !play;
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
  console.log(enemies);
}

function draw() {
  if (!gameover) {
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (play == true) {
      if (timer <= 0) {
        if (random(1)< 0.01) {
          enemies.push(new Enemy());
          timer = 5;
        }
      }
      background(243,255,189);
      for (let e of enemies) {
        e.move();
        e.show();
        if (player.hits(e)) {
          console.log('game over');
          gameover = true;
        }
      }
      
      player.show();
      player.move();
    }
  } else {
    background(243,255,189);
    button.position(-100, -100)
    enemies = []
    fill(86,44,44);
    textSize(64);
    textStyle(BOLD);
    text("Game Over!", (windowWidth/2)-150, 300);
    setTimeout(resetGame, 2000);
  }
}

function resetGame() {
  gameover = false;
  button.position(0, 0);
}