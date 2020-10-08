
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var ground, trashCan, crumpledPaper;

function preload()
{
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	trashCan = new Dustbin(980,683);
	crumpledPaper = new Paper(100,580,20);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  trashCan.display();
  crumpledPaper.display();
  //drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x:85, y:-85});
	}
}

