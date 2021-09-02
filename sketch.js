
var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png", 'trex3.png', 'trex4.png');
  groundimg = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,150,20,50);
  trex.shapeColor = 'orange';
  trex.addAnimation("running dino", trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();

  ground = createSprite(300,180,600,10);
  ground.addImage("infiniteground", groundimg);
  ground.x=ground.width/2
}

function draw(){
  background("white")

  if(keyDown('space')){
    trex.velocityY= -10;
  }

  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground)
  
  ground.velocityX= -3;

  if(ground.x < 0){
    ground.x=ground.width/2

  }



  drawSprites();
  

}
