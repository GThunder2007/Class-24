
const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ourworld,ourengine, ground, box1,box2, box3, box4, box5, pig, pig2, log, log2, log3, log4, bird;

function setup() {
  createCanvas(1200,400);
  ourengine = Engine.create();
  ourworld = ourengine.world;

  box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810, 160, 70, 70);
    ground = new Ground(600,390,1200,20);
    pig = new Pig(810,350);
    pig2 = new Pig(810,220);
    log = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(860,120,150,-PI/7);
    bird = new Bird(100,100);
    

 
}

function draw() {
  Engine.update(ourengine);
  background(0);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
ground.display();
pig.display();
pig2.display();
log.display();
log2.display();
log3.display();
log4.display();
bird.display();
}