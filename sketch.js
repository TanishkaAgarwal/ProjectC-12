var runner,runner_running
var path,pathImage,invisblepath
function preload(){
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png")



}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path =createSprite(200,180,500,180)
  path.addImage("path",pathImage)
  path.velocityY= 4;
  path.y=path.height /2;
 
  runner =createSprite(180,190,20,50)
  runner.addAnimation("runner",runner_running)
  runner.scale=0.1;
  invisibleGround = createSprite(370, 200, 100, 400);
  invisibleGround.visible = false;
  
  invisibleGround2 = createSprite(40, 200, 100, 400);
  invisibleGround2.visible = false;

}

function draw() {
  background(0);
  drawSprites();

  if(path.y > 500){
    path.y = height/2;
  }
  runner.x = mouseX;
  runner.collide(invisibleGround);
  runner.collide(invisibleGround2);
  
}
