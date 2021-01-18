const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  object = Bodies.rectangle (200, 100, 50, 50);
  World.add(world, object);
  var changeP = {
    isStatic: true 
  }
  ground = Bodies.rectangle (200, 380, 50, 50, changeP);
  World.add(world, ground);
  console.log (object);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode (CENTER); 
  rect (object.position.x, object.position.y, 50, 50);
  rectMode (CENTER); 
  rect (ground.position.x, ground.position.y, 400, 20);
}