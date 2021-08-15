const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground

function setup() {
  createCanvas(1800,900);
  engine=Engine.create()
  world=engine.world
  ground=createSprite(900,875,1800,30);
  wall=new Wall(100,200,50,75)
}

function draw() {
  background("green");  
  wall.display()


  drawSprites();
}