
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launcher ;
var launcherForce = 100;



function preload(){
	boy=loadImage("images/boy.png");
  BG = loadImage("images/bg.jpg");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,400,30); 

	mango1=new Mango2(1100,100,25);
  mango2=new mango(1170,130,25);
	mango3=new Mango2(1010,140,25);
	mango4=new mango(1000,70,25);
	mango5=new Mango2(1100,70,25);
	mango6=new mango(1000,230,25);
	mango7=new Mango2(900,230,32);
	mango8=new mango(1140,150,32);
	mango9=new Mango2(1100,230,32);
	mango10=new mango(1200,200,32);
	mango11=new Mango2(1120,50,32);
	mango12=new mango(900,160,32);

  launcher = new chain(stoneObj.body,{x:235,y:420})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  //create launcherObject here


	Engine.run(engine);
}

function draw() {

  background(BG);
  textSize(25);
  stroke("yellow")
  strokeWeight(5);
  fill ("blue");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  launcher.display();
  stoneObj.display();
  groundObject.display();
 
  // display launcher object here
    


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);
}

//create mouseDragged function here
function mouseDragged()
{
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}


//create mouseReleased function here
function mouseReleased()
  {
    launcher.fly();
  }

//create keyPressed function here

function keyPressed()
{
  if(keyCode ===32)
  {
    launcher.attach(stoneObj.body);
  }
}
  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }