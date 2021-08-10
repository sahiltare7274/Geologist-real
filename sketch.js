
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var hammer;
var stone;
var iron;
var rubber;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var sand6;
var sand7;
var sand8;
var sand9;
var sand10;

function preload()
{
	
}

 function setup() {
 createCanvas(1200,650);
 engine = Engine.create();
 world = engine.world;

 //Our bodies 
 plane = new Plane(600,height,1200,20) 
 hammer = new Hammer(10,100);
 stone = new Stone(700,320,100,100);
 iron = new Iron(300,350);
 rubber=new Rubber(900,450,70);
 
   sand1 = new Sand(505,450,10);
   sand2 = new Sand(510,450,10);    
   sand3 = new Sand(515,450,10);
   sand4 = new Sand(520,450,10);
   sand5 = new Sand(525,450,10);
   sand6 = new Sand(515,445,10);
   sand7 = new Sand(520,445,10);
   sand8 = new Sand(525,445,10);
   sand9 = new Sand(530,445,10);
   sand10 = new Sand(535,445,10);



 
 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
  
   plane.display();
   stone.display();
   rubber.display();
   iron.display();
   hammer.display();
   sand1.display();
   sand2.display();
   sand3.display();
   sand4.display();
   sand5.display();
   sand6.display();
   sand7.display();
   sand8.display();
   sand9.display();
   sand10.display();


  drawSprites();
 
}



