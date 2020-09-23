var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 100, 50, 50);
  fixedrect.shapeColor = "red";
  fixedrect.velocityY = 5;
  movingrect = createSprite(200,300,50,80);
  movingrect.shapeColor = "red";
  movingrect.velocityY = -5;



}

function draw() {
  background(0);  

 // movingrect.x = mouseX;
  //movingrect.y = mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 
    && fixedrect.x -  movingrect.x < movingrect.width/2 + fixedrect.width/2 ){
      movingrect.velocityX  = movingrect.velocityX*(-1)
     fixedrect.velocityX  = fixedrect.velocityX*(-1)
    }
    if( movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 
    &&fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
      movingrect.velocityY  = movingrect.velocityY*(-1)
      fixedrect.velocityY  = fixedrect.velocityY*(-1)

  }

  drawSprites();
}