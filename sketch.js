var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0
var ground, groundImage

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 200);

  monkey = createSprite(50, 160, 20, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1

  ground = createSprite(200, 200, 600, 20);
  ground.velocityX = -3
}

function draw() {
  background(200)

  ground.x = ground.width / 2

  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground)

  spawnBananas();

  spawnObstacles();

  drawSprites();
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 200, 40, 10);
    banana.y = Math.round(random(10,100));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.scale = 0.1
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;

  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 170, 10, 40);
    obstacle.velocityX = -8;
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.15
  }
}