const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box8, box9;
var polygon1, slingshot1, ground1

function setup() {
  createCanvas(800,400);

   engine   = Engine.create();
   world    = engine.world;

   box1     = new Box(330, 235, 30, 40);
   box2     = new Box(360, 235, 30, 40);
   box3     = new Box(390, 235, 30, 40);
   box4     = new Box(420, 235, 30, 40);
   box5     = new Box(450, 235, 30, 40);
   box6     = new Box(360, 195, 30, 40);
   box7     = new Box(390, 195, 30, 40);
   box8     = new Box(420, 195, 30, 40);
   box9     = new Box(390, 155, 30, 40);

   polygon1 = new Polygon(100, 100, 50, 50);
   slingshot1 = new Slingshot(polygon1.body, {x: 80, y: 80})
   ground1  = new Ground(400,380,800,20);
}

function draw() {
  background(255,255,255);  
   Engine.update(engine);


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

polygon1.display();
slingshot1.display();
ground1.display();



  drawSprites();
}
function mouseDragged(){

      Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  }


//to make a specific function for releasing the bird
function mouseReleased(){
  slingshot1.fly();
 
}