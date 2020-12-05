const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground
var engine;
var world;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale=0.2;
	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;
	ground=createSprite(width/2, height-30, width,10);
	ground.shapeColor=color(255);
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8});
	World.add(world, packageBody);
	 bucket1 = new Bucket(317,418,5,80);
	 bucket2 = new Bucket(369,455,100,5);
	 bucket3 = new Bucket(417,413,5,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  bucket1.display();
  bucket2.display();
  bucket3.display();
  drawSprites();
 
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageSprite.velocity.y = 2;
  }
}



