const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree;
var stone;
var boyImg,boy;
var launcher;
var mango1,mango2,mango3,mango4,mango5;

function preload() {
 boyImage=loadImage("sprites/boy.png");	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,800,20);
    tree = new Tree(590,700);

	stone=new Stone(150,300,20);

	boy=createSprite(185,647,10,10);
	boy.addImage(boyImage);
	boy.scale=0.08;
	
	mango1=new Mango(500,350,20);
	mango2=new Mango(530,230,20);
	mango3=new Mango(650,370,20);
	mango4=new Mango(600,300,20);
	mango5=new Mango(690,280,20);

    launcher=new Launcher(stone.body,{x:140,y:600});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",100 ,70);
  
 ground.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 
 launcher.display();
 stone.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);

 drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    launcher.fly();
}

function detectCollision(lstone,lmango) {
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
 
   if(distance<=lmango.r+lstone.r) {
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed() {
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcher.attach(stone.body);
	}
}