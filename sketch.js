let player;
let enemies = [];
let spikes = [];

let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

let soundClassifier;

let play = false;
let timer = 0;
let tut_timer = 0;
let gameover = false;
let replay;
let score = 0;
let textY = 200;

let spikeImg;

function preload() {
  const options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);

  spikeImg = loadImage('spikes.png');
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
    if (frameCount % 60 == 0 && play) { 
      score ++;
    }

    fill(188, 196, 149);
    textSize(24);
    textStyle(BOLD);
    textAlign(LEFT);
      
    text("Say the number on pink box to avoid being detected by them.", (windowWidth-800), textY);
    text("Say 'UP' to jump over the spikes.", (windowWidth-800), textY+50);

    if (play == true) {
      if (timer <= 0) {
        if (random(1)< 0.01) {
          if (random(1) < 0.3) {
            spikes.push(new Spike());
            timer = 2;
          } else {
            enemies.push(new Enemy());
            timer = 2;
          } 
        }
      }
      background(243,255,189);
      fill(86,44,44);
      textSize(32);
      textStyle(BOLD);
      text(score, (windowWidth/2), 100);

      if (frameCount % 60 == 0) {
        if (play) {
          tut_timer ++;
        }
      }
      
      if (tut_timer >= 10) {
        textY = -300;
      }

      for (let e of enemies) {
        e.move();
        e.show();
        if (player.hits(e)) {
          console.log('game over');
          gameover = true;
        }
      }

      for (let s of spikes) {
        s.move();
        s.show();
        if (player.hits(s)) {
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
    spikes = []
    fill(86,44,44);
    textSize(64);
    textStyle(BOLD);
    text("Game Over!", (windowWidth/2)-150, 300);
    textSize(32);
    textStyle(BOLD);
    text("Score: "+ score, (windowWidth/2)-50, 400);
    setTimeout(resetGame, 3000);
  }
}

function resetGame() {
  gameover = false;
  button.position(0, 0);
  score = 0;
}