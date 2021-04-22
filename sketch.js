
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score =0,ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,202,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale =  0.1;
  FoodGroup = new Group();
  obstacleGroup = new Group();
  ground = createSprite(400,350,1400,10);
ground.velocityX = -4;
  // ground.x = ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  background(255);
  text("score:" + score,300,20);
  score = score + Math.round(frameCount/250);
if(ground.x<0){
  ground.x = ground.width/2;
}
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY+0.5;
  monkey.collide(ground);
  food();
  obstacles();
  drawSprites();
}
function food(){
  if(frameCount% 80===0){
    banana = createSprite(600,200,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-5;
    banana.y = Math.round(random(150,200));
    banana.lifetime = 120;
    FoodGroup.add(banana);
    
  }
}
function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(600,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 120;
    obstacleGroup.add(obstacle);
  }
}




