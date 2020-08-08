var fRect,mRect;
function setup() {
  createCanvas(800,400);
 fRect=createSprite(200, 200, 50, 100);
 mRect=createSprite(400, 200, 100, 50);
 fRect.shapeColor="green";
 mRect.shapeColor="green";
 fRect.debug=true;
 mRect.debug=true;
}

function draw() {
  background(255,255,255);
  console.log(mRect.width/2+fRect.width/2)
  console.log(mRect.x-fRect.x)
  mRect.x=World.mouseX;
  mRect.y=World.mouseY;
  if(mRect.x-fRect.x<mRect.width/2+fRect.width/2 && fRect.x-mRect.x<mRect.width/2+fRect.width/2 
    &&mRect.y-fRect.y<mRect.width/2+fRect.width/2 && fRect.y-mRect.y<mRect.width/2+fRect.width/2  ){
    fRect.shapeColor="red";
    mRect.shapeColor="red";

  }
else{
  fRect.shapeColor="green";
  mRect.shapeColor="green";
}
  drawSprites();
}
