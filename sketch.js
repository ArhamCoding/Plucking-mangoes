
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new Stone(235,420,30); 
	ground = new Ground (width/2, 600, width, 20);
	tree = new Tree (1050,580);
	mango = new Mango (1000,50);
	mango2 = new Mango (1140,80);
	mango3 = new Mango (1110,30);
	mango4 = new Mango (1030,120);
	mango5 = new Mango (1200,100);
	mango6 = new Mango (980,180);
	mango7 = new Mango (960,240);



	launcherObject=new Launcher(stoneObj.body,{x:235,y:420})


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  stoneObj.display();
  ground.display();
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();



  launcherObject.display();

  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    Launcher.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(stone.body);
    }
}
