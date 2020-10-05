var car;
var wall;
var speed , weight;


function setup() {
  createCanvas(800,400);

  car = createSprite(50 , 200 , 30 ,30);
  car.shapeColor = "white"
  wall = createSprite(770,200,20,400);
  wall.shapeColor = "black";
  speed = Math.round(random(50,90));
  weight = Math.round(random(400,1500))


}

function draw() {
  background("lightBlue");  

//  console.log(car.velocityX);   

car.velocityX = 90;

if(wall.x - car.x < (car.width + wall.width) / 2 ){
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed / 2500;
}

if(deformation > 100){
   
  car.shapeColor = "green";

}

if(deformation < 180 && deformation > 101){
 
  car.shapeColor = "yellow";

}


if(deformation > 180 ){

   car.shapeColor = "red";
   
}

  drawSprites();
}