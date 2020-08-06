var car,wall,speed,weight,deformation;


function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(1050,200,60,height/2);
  deformation=0.5 * weight * speed * speed / 22500;
console.log(deformation);
}

function draw() {
  background("black"); 
  if(wall.x-car.x<wall.width/2+car.width/2 ) {
    car.velocityX=0;
    if(deformation > 180){
      car.shapeColor=("red");
    }
    else if(deformation >= 80 && deformation <= 180){
       car.shapeColor=("yellow");
    }
    else if(deformation < 80){
      car.shapeColor=("green");
    }
  }
  
  drawSprites();
}