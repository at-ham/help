
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyi,mango,mangoi,tree,treei,ground,stone,stonei;

function preload()
{
	boyi=loadImage("boy.png");
	treei=loadImage("tree.png");
	mangoi=loadImage("mango.png");
	stonei=loadImage("stone.png");

}

function setup() {
	createCanvas(800, 700);

boy.addImage(boyi);
tree.addImage(treei);
mango.addImage(mangoi);
stone.addImage(stonei);
	engine = Engine.create();
	world = engine.world;
boy =createSprite(200,200,10,10);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



