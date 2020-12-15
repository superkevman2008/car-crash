function setup() {
  createCanvas(windowWidth,windowHeight);
 car = createSprite(100, 200, 50, 50);
car.velocityX = 10
wall = createSprite (900,200,60,height/2)
speed = random(55,90)
weight = random(400,1500)
}

function draw() {
  background(255,255,255);  
  
  if((wall.x - car.x)<=wall.width/2 + car.width/2){
    car.velocityX = 0
    deformation = .5 * weight * speed * speed / 22509
    if(deformation >= 180){
      car.shapeColor = "red"
    }
    else if(deformation >= 100){
      car.shapeColor = "yellow"
    }
    else {
      car.shapeColor = "green"
    }
  }
  
  
  
  
  
  
  
  drawSprites();
}