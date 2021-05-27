var bullet,wall;
var speed,weight;
var damage;
damage=0;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 40);
  bullet.shapeColor="white"
   wall=createSprite(1200,200,thickness,height/2)
   wall.shapeColor=80,80,80;
  speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);
  bullet.velocityX=5;
  bullet.debug=true;
  
}

function draw() {
  background("cyan");  
    damage=[(0.5*weight*speed*speed)/(thickness*thickness*thickness)]
    text("damage"+damage,400,20)
     if (hasCollided(bullet,wall))
    {
    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
  }
  if (damage>10){
    wall.shapeColor="red"
  }
  if (damage<10){
    wall.shapeColor="green"
  }

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }
  return false;
}