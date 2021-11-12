var balloon1,baloon2,baloon3,baloon4;
var ground;
var bow;



function preload(){
    ground1 = loadImage("background0.png");
    baloon1 = loadImage("blue_balloon0.png");
    baloon2 = loadImage("green_balloon0.png");
    baloon3 = loadImage("pink_balloon0.png");
    baloon4 = loadImage("red_balloon0.png");
    bow = loadImage("bow0.png");
    arrow = loadImage("arrow0.png")
 
  
}

function setup() {
  createCanvas(400, 600);
  ground = createSprite(200,200,400,20);
  ground.addImage("gro", ground1);
  ground.scale = 2.3;
  
  baloon = createSprite(30,200,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
  baloon = createSprite(30,130,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
   baloon = createSprite(30,60,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
  baloon = createSprite(30,270,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
  baloon = createSprite(30,340,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
  baloon = createSprite(30,410,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
  baloon = createSprite(30,480,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
  baloon = createSprite(30,550,20,20);
  baloon.addImage("bal", baloon1);
  baloon.scale = 0.1;
  
  
  baloon0 = createSprite(70,200,10,10);
  baloon0.addImage("bal", baloon2);
  baloon0.scale = 0.090;
  
  baloon0 = createSprite(70,130,10,10);
  baloon0.addImage("bal", baloon2);
  baloon0.scale = 0.090;
  
  baloon0 = createSprite(70,270,10,10);
  baloon0.addImage("bal", baloon2);
  baloon0.scale = 0.090;
  
  baloon0 = createSprite(70,340,10,10);
  baloon0.addImage("bal", baloon2);
  baloon0.scale = 0.090;
  
  baloon0 = createSprite(70,410,10,10);
  baloon0.addImage("bal", baloon2);
  baloon0.scale = 0.090;
  
  baloon0 = createSprite(70,480,10,10);
  baloon0.addImage("bal", baloon2);
  baloon0.scale = 0.090;
  
  baloon2 = createSprite(110,200,10,10);
  baloon2.addImage("bal", baloon3);
  baloon2.scale  =1.1
  
  baloon2 = createSprite(110,270,10,10);
  baloon2.addImage("bal", baloon3);
  baloon2.scale  =1.1
  
   baloon2 = createSprite(110,340,10,10);
  baloon2.addImage("bal", baloon3);
  baloon2.scale  =1.1
  
  baloon2 = createSprite(110,410,10,10);
  baloon2.addImage("bal", baloon3);
  baloon2.scale  =1.1
  
  baloon3 = createSprite(150,270,10,10);
  baloon3.addImage("bal", baloon4);
  baloon3.scale = 0.085;
  
  baloon3 = createSprite(150,340,10,10);
  baloon3.addImage("bal", baloon4);
  baloon3.scale = 0.085;
  
  bow1 = createSprite(390,200,10,10);
  bow1.addImage("bo", bow);
  
  arrow1 = createSprite(370,200,10,10);
  arrow1.addImage("ar", arrow);
  arrow1.scale = 0.20;
  
}

function draw() {
  
   background("white");
   arrow1.y = bow1.y;
   bow1.y = World.mouseY;
  
  if(keyDown ("space")){
    arrow1.velocityX = -8;
  }
  
  ground.velocityX = -4;   
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(arrow1.x < 0) {
    resetarrow(); 
  }
  

drawSprites();
  
}

function resetarrow() {
  arrow1.y = 200;
  arrow1.x = 370;
  arrow1.velocityX = 0;
  
}

