const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var obj;
var cir;
function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var obj_options={
    isStatic:true
  }

  obj=Bodies.rectangle(200,390,400,50,obj_options);
  World.add(world,obj);
  var cir_options={
    restitution:1
  }
  cir=Bodies.circle(200,200,20,cir_options);
  World.add(world,cir);
  //console.log(obj.type);
  //console.log(obj.position);
  console.log(cir);
}

function draw() {
  background("green");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(cir.position.x,cir.position.y,20);
}