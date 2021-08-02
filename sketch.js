var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaf;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png");
 leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

if(frameCount%60===0){
apple=createSprite(200,0,10,40);
apple.velocityY=3;

  apple.addImage("apple",appleImg);
apple.scale=0.1;

}
leaf=createSprite(100,00,10,40);
leaf.velocityY=3;
leaf.addImage("leaf",leafImg);
leaf.scale=0.1;




}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX ;
  
console.log(frameCount);
    
   
spawnclouds();
   
  drawSprites();
}

function spawnclouds(){

  if(frameCount%100===0){
    apple=createSprite(300,0,10,40);
    apple.velocityY=3;
    
      apple.addImage("apple",appleImg);
    apple.scale=0.1;
    apple.y=Math.round(random(10,350));
    }
        if(frameCount%80===0){
          leaf=createSprite(50,0,10,40);
          leaf.velocityY=3;
          leaf.addImage("leaf",leafImg);
          leaf.scale=0.1;
          leaf.y=Math.round(random(10,400)); 
        }
  
        if(apple.isTouching(rabbit)&&leaf.isTouching(rabbit)){
          
          apple.y=4000;
        }
}



