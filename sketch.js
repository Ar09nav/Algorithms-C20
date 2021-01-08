var bird,pig;
function setup() {
  createCanvas(400,400);
  bird = createSprite(100,200,50,50);
  pig = createSprite(290,200,50,50);
  bird.debug = true;
  pig.debug = true;

}

function draw() {
  background(123,129,239); 
  bird.x = mouseX;
  bird.y =  mouseY;
  console.log(bird.x-pig.x);
  if(bird.x-pig.x<bird.width/2+pig.width/2
    && pig.x-bird.x<bird.width/2+pig.width/2
    && bird.y-pig.y<bird.height/2+pig.height/2
    && pig.y-bird.y<bird.height/2+pig.height/2){
  bird.shapeColor = "red";
  pig.shapeColor = "green";
  }
  else{
   bird.shapeColor = "yellow";
   pig.shapeColor = "blue"; 
  }
  drawSprites();
}